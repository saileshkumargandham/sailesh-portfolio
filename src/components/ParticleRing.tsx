import { useEffect, useRef } from 'react';

const ParticleRing = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      color: string;
      opacity: number;
    }> = [];

    const particleCount = 150; // Increased particle count
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;

    const colors = [
      'rgba(255, 94, 14, opacity)', 
      'rgba(240, 97, 5, opacity)', 
      'rgba(255, 241, 215, opacity)', 
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          angle: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    const drawGradientBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, '#f3f4f6');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGradientBackground();
      time += 0.01;

      particles.forEach((particle, i) => {
        // Create flowing motion
        particle.angle += 0.02;
        const flowX = Math.sin(time + particle.angle) * 2;
        const flowY = Math.cos(time + particle.angle) * 2;

        // Add mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) { // Increased interaction radius
          const force = isMouseDown ? 0.2 : 0.05;
          particle.x += dx * force;
          particle.y += dy * force;
          particle.opacity = Math.min(0.8, particle.opacity + 0.1);
        } else {
          particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }

        // Update position with flow
        particle.x += (flowX + particle.speedX) * 0.5;
        particle.y += (flowY + particle.speedY) * 0.5;

        // Wrap around edges with smooth transition
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle with gradient
        const particleColor = particle.color.replace('opacity', particle.opacity.toString());
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particleColor);
        gradient.addColorStop(1, particleColor.replace(particle.opacity.toString(), '0'));
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections with opacity based on distance
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            const opacity = (1 - distance / 150) * 0.2 * particle.opacity * particle2.opacity;
            ctx.strokeStyle = `rgba(255, 94, 14, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isMouseDown = true;
      if (e.touches[0]) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isMouseDown = false;
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      particles.length = 0;
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleRing;