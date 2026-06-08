import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [webglSupported, setWebglSupported] = useState(true);

  // Check WebGL availability
  const checkWebGL = () => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    if (!checkWebGL()) {
      setWebglSupported(false);
      return;
    }

    if (!containerRef.current) return;

    // Dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 30;

    let renderer;
    try {
      // Renderer
      renderer = new THREE.WebGLRenderer({
        canvas: containerRef.current,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (err) {
      console.warn("Failed to initialize WebGLRenderer. Falling back to CSS background.", err);
      setWebglSupported(false);
      return;
    }

    // Particles Geometry
    const particlesCount = 1800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    const colorBlue = new THREE.Color('#3b82f6');
    const colorPurple = new THREE.Color('#8b5cf6');
    const colorPink = new THREE.Color('#ec4899');

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 60; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // Z

      // Mixed color distribution
      const randomType = Math.random();
      let selectedColor;
      if (randomType < 0.45) {
        selectedColor = colorPurple;
      } else if (randomType < 0.8) {
        selectedColor = colorBlue;
      } else {
        selectedColor = colorPink;
      }

      colors[i * 3] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture/Material
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.28,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Points Mesh
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Track Mouse
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (renderer) renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow drift rotation
      points.rotation.y = elapsedTime * 0.02;
      points.rotation.x = elapsedTime * 0.01;

      // Mouse reactivity with interpolation (lerp)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      points.position.x = mouseRef.current.x * 2.5;
      points.position.y = mouseRef.current.y * 2.5;

      // Render
      if (renderer) renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      geometry.dispose();
      material.dispose();
      texture.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    // Elegant static CSS particle/grid backdrop fallback
    return (
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-white dark:bg-[#030014] transition-colors duration-300">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)]" />
        
        {/* Large floating glow orbs */}
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-glowPurple/8 dark:bg-glowPurple/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-glowBlue/8 dark:bg-glowBlue/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-glowPink/5 dark:bg-glowPink/3 blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>
    );
  }

  return (
    <canvas
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-60 dark:opacity-85 transition-opacity duration-500"
    />
  );
};

export default Background3D;
