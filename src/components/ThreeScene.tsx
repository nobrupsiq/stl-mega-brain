import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

/**
 * Interactive WebGL hero (Lusion-inspired):
 * an organic, noise-displaced "liquid glass" blob with a fresnel rim glow,
 * a wireframe shell, and a reactive particle field. Reacts to the cursor and
 * animates in with GSAP. Pure shaders, mobile-friendly.
 */

// Classic Ashima 3D simplex noise — used for vertex displacement.
const NOISE_GLSL = /* glsl */ `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const VERTEX = /* glsl */ `
  uniform float uTime;
  uniform float uHover;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  ${NOISE_GLSL}
  void main(){
    vNormal = normal;
    float n1 = snoise(position * 0.9 + vec3(0.0, uTime * 0.25, 0.0));
    float n2 = snoise(position * 2.2 + vec3(uTime * 0.35));
    float disp = n1 * 0.35 + n2 * 0.12;
    disp *= (1.0 + uHover * 0.9);
    vDisp = disp;
    vec3 newPos = position + normal * disp;
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    vView = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uRim;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  void main(){
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vView);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.5);
    vec3 col = mix(uColorA, uColorB, smoothstep(-0.3, 0.4, vDisp));
    col += fres * uColorB * uRim;
    gl_FragColor = vec4(col, 0.45);
  }
`;

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Shared uniforms so the solid blob and the wireframe shell animate together.
    const uniforms = {
      uTime: { value: 0 },
      uHover: { value: 0 },
      uColorA: { value: new THREE.Color(0x0a4a5c) }, // darker teal
      uColorB: { value: new THREE.Color(0x3bb4cc) }, // dimmed cyan
      uRim: { value: 1.1 },
    };

    const geo = new THREE.IcosahedronGeometry(1.6, 24);

    // Solid glassy blob
    const blobMat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
    });
    const blob = new THREE.Mesh(geo, blobMat);
    scene.add(blob);

    // Wireframe shell (gold-tinted rim) slightly larger
    const wireUniforms = {
      ...uniforms,
      uColorA: { value: new THREE.Color(0x9a7016) },
      uColorB: { value: new THREE.Color(0xc79a3a) },
      uRim: { value: 0.4 },
    };
    const wireMat = new THREE.ShaderMaterial({
      uniforms: wireUniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const wire = new THREE.Mesh(geo, wireMat);
    wire.scale.setScalar(1.04);
    scene.add(wire);

    // Reactive particle field
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (THREE.MathUtils.randFloatSpread(1)) * 18;
      positions[i * 3 + 1] = (THREE.MathUtils.randFloatSpread(1)) * 18;
      positions[i * 3 + 2] = (THREE.MathUtils.randFloatSpread(1)) * 18;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.04,
      transparent: true,
      opacity: 0.45,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // GSAP entrance
    gsap.from([blob.scale, wire.scale], {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.65)",
      stagger: 0.08,
    });
    gsap.from(uniforms.uRim, { value: 5, duration: 2, ease: "power2.out" });

    // Interaction
    let raf = 0;
    let mouseX = 0;
    let mouseY = 0;
    let hoverTarget = 0;
    let lastX = 0;
    let lastY = 0;
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      const speed = Math.min(1, Math.hypot(nx - lastX, ny - lastY) * 12);
      hoverTarget = Math.max(hoverTarget, speed);
      lastX = nx;
      lastY = ny;
      mouseX = nx * 0.6;
      mouseY = ny * 0.6;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      wireUniforms.uTime.value = t;

      // Smooth hover intensity + decay
      uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * 0.06;
      wireUniforms.uHover.value = uniforms.uHover.value;
      hoverTarget *= 0.94;

      blob.rotation.y = t * 0.18;
      blob.rotation.x = t * 0.12;
      wire.rotation.copy(blob.rotation);
      points.rotation.y = t * 0.04;

      // Camera parallax follows cursor
      camera.position.x += (mouseX * 2.4 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2.4 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      gsap.killTweensOf([blob.scale, wire.scale, uniforms.uRim]);
      renderer.dispose();
      geo.dispose();
      blobMat.dispose();
      wireMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}
