import { useEffect, useRef, useState } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originX: number;
  originY: number;
  angle: number;
  speed: number;
  radius: number;
  color: string;
  targetX: number;
  targetY: number;
}

export function MouseGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mouseSpeedRef = useRef({ x: 0, y: 0 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();
  const [isLightweight, setIsLightweight] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mobileOrTabletQuery = window.matchMedia('(max-width: 1024px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMode = () => {
      setIsLightweight(mobileOrTabletQuery.matches || reducedMotionQuery.matches);
    };

    updateMode();
    mobileOrTabletQuery.addEventListener('change', updateMode);
    reducedMotionQuery.addEventListener('change', updateMode);

    return () => {
      mobileOrTabletQuery.removeEventListener('change', updateMode);
      reducedMotionQuery.removeEventListener('change', updateMode);
    };
  }, []);

  useEffect(() => {
    if (isLightweight) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial mouse position to center
    if (typeof window !== 'undefined') {
      mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      lastMousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlobs();
    };

    // The requested palette colors
    // #4159d0 (Blue-ish)
    // #c84fc0 (Pink/Purple)
    // #ffcd70 (Yellow/Orange)
    const colors = [
      'rgba(65, 89, 208, 0.95)',  // #4159d0 (slightly more saturated/opaque)
      'rgba(200, 79, 192, 0.95)', // #c84fc0
      'rgba(255, 205, 112, 0.95)', // #ffcd70
    ];

    const initBlobs = () => {
      // Create more blobs to cover the screen better
      // We'll create roughly 15-20 blobs to ensure full coverage and rich mixing
      const blobCount = 18;
      blobsRef.current = [];

      for (let i = 0; i < blobCount; i++) {
        const radius = Math.random() * 200 + 250; // 250-450px radius
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        blobsRef.current.push({
          x,
          y,
          vx: 0,
          vy: 0,
          originX: x,
          originY: y,
          angle: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.004,
          radius,
          color: colors[i % colors.length],
          targetX: x,
          targetY: y
        });
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = 16; // Approx 60fps frame time for calc

      const vx = (e.clientX - lastMousePos.current.x) / dt;
      const vy = (e.clientY - lastMousePos.current.y) / dt;

      mouseSpeedRef.current = { x: vx, y: vy };
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      blobsRef.current.forEach((blob) => {
        // Natural floating movement
        blob.angle += blob.speed;
        
        // Large, sweeping floating motions
        const floatX = blob.originX + Math.sin(blob.angle) * 400 * Math.cos(time * 0.5);
        const floatY = blob.originY + Math.cos(blob.angle) * 400 * Math.sin(time * 0.5);

        // Interaction physics
        const dx = mouseX - blob.x;
        const dy = mouseY - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Stronger interaction radius
        const interactionRadius = 600;

        if (dist < interactionRadius) {
          // Calculate attraction/repulsion
          // We want them to swirl around the mouse a bit
          const force = (interactionRadius - dist) / interactionRadius;
          
          // Pull towards mouse slightly
          blob.vx += dx * 0.0005 * force;
          blob.vy += dy * 0.0005 * force;

          // Add some "swirl" or turbulence based on mouse movement
          blob.vx += mouseSpeedRef.current.x * 0.05 * force;
          blob.vy += mouseSpeedRef.current.y * 0.05 * force;
        }

        // Return to natural floating path (spring force)
        const returnForce = 0.002;
        blob.vx += (floatX - blob.x) * returnForce;
        blob.vy += (floatY - blob.y) * returnForce;

        // Apply friction
        blob.vx *= 0.96;
        blob.vy *= 0.96;

        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Draw blob
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        // Draw slightly larger than radius to ensure overlap
        ctx.arc(blob.x, blob.y, blob.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Decay mouse speed
      mouseSpeedRef.current.x *= 0.9;
      mouseSpeedRef.current.y *= 0.9;

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isLightweight]);

  if (isLightweight) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 16% 18%, rgba(65, 89, 208, 0.5) 0, rgba(65, 89, 208, 0) 42%), radial-gradient(circle at 84% 20%, rgba(200, 79, 192, 0.48) 0, rgba(200, 79, 192, 0) 43%), radial-gradient(circle at 72% 70%, rgba(255, 205, 112, 0.46) 0, rgba(255, 205, 112, 0) 42%), radial-gradient(circle at 28% 78%, rgba(200, 79, 192, 0.34) 0, rgba(200, 79, 192, 0) 40%), radial-gradient(circle at 54% 48%, rgba(65, 89, 208, 0.28) 0, rgba(65, 89, 208, 0) 46%), #ffffff",
          filter: 'saturate(1.08)'
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ filter: 'blur(100px) saturate(1.08)', opacity: 0.9 }}
    />
  );
}
