import React, { useEffect, useRef } from 'react';

const HexagonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;
    const hexSize = 30;
    const colors = [
      { r: 0, g: 212, b: 255 },
      { r: 124, g: 58, b: 237 },
      { r: 244, g: 114, b: 182 },
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const interpolateColor = (t) => {
      const index = Math.floor(t * (colors.length - 1));
      const nextIndex = Math.min(index + 1, colors.length - 1);
      const localT = (t * (colors.length - 1)) - index;
      const c1 = colors[index];
      const c2 = colors[nextIndex];
      return {
        r: Math.round(c1.r + (c2.r - c1.r) * localT),
        g: Math.round(c1.g + (c2.g - c1.g) * localT),
        b: Math.round(c1.b + (c2.b - c1.b) * localT),
      };
    };

    const animate = () => {
      time += 0.005;
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / (hexSize * 3)) + 2;
      const rows = Math.ceil(canvas.height / (hexSize * Math.sqrt(3))) + 2;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * 3 + (row % 2) * hexSize * 1.5;
          const y = row * hexSize * Math.sqrt(3) * 0.5;
          const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const normalizedDist = dist / maxDist;
          const wave = Math.sin(dist * 0.01 - time * 3) * 0.5 + 0.5;
          const wave2 = Math.sin(col * 0.3 + row * 0.2 + time) * 0.5 + 0.5;
          const opacity = (wave * wave2 * 0.15) + 0.02;
          const colorT = (normalizedDist + time * 0.1) % 1;
          const color = interpolateColor(colorT);

          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6;
            const hx = x + hexSize * Math.cos(angle);
            const hy = y + hexSize * Math.sin(angle);
            if (i === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();

          const gradient = ctx.createRadialGradient(x, y, 0, x, y, hexSize);
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 2})`);
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      const mouseX = centerX + Math.sin(time) * 200;
      const mouseY = centerY + Math.cos(time * 0.7) * 150;
      const glowGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
      glowGradient.addColorStop(0, 'rgba(0, 212, 255, 0.03)');
      glowGradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default HexagonBackground;