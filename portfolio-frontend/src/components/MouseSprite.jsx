import React, { useState, useEffect } from 'react';

const MouseSprite = () => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  // Generate a random color
  const getRandomColor = () => {
    const colors = [
      '#4f46e5', // indigo-600
      '#6366f1', // indigo-500
      '#818cf8', // indigo-400
      '#3b82f6', // blue-500
      '#8b5cf6', // violet-500
      '#a78bfa', // violet-400
      '#c084fc', // purple-400
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    // Don't run on touch devices
    if ('ontouchstart' in window) {
      setIsEnabled(false);
      return;
    }

    let timeout;
    let animationFrameId;
    let lastMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const newMousePosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newMousePosition);

      // Check if mouse has moved significantly
      const distance = Math.sqrt(
        Math.pow(newMousePosition.x - lastMousePosition.x, 2) +
        Math.pow(newMousePosition.y - lastMousePosition.y, 2)
      );

      if (distance > 5) {
        setIsMoving(true);
        clearTimeout(timeout);

        // Create new particle
        if (isMoving && Math.random() > 0.5) {
          setParticles(prevParticles => [
            ...prevParticles,
            {
              id: Date.now() + Math.random(),
              x: newMousePosition.x,
              y: newMousePosition.y,
              size: Math.random() * 10 + 5,
              color: getRandomColor(),
              lifetime: 0,
              maxLifetime: Math.random() * 20 + 10,
              velocity: {
                x: (Math.random() - 0.5) * 3,
                y: (Math.random() - 0.5) * 3 - 1, // Slightly upward bias
              }
            }
          ]);
        }

        lastMousePosition = newMousePosition;

        timeout = setTimeout(() => {
          setIsMoving(false);
        }, 100);
      }
    };

    const updateParticles = () => {
      setParticles(prevParticles =>
        prevParticles
          .map(particle => ({
            ...particle,
            lifetime: particle.lifetime + 1,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            size: particle.size * 0.95, // Shrink over time
            velocity: {
              x: particle.velocity.x * 0.95, // Slow down over time
              y: particle.velocity.y * 0.95 + 0.1, // Slow down and add a bit of gravity
            }
          }))
          .filter(particle =>
            particle.lifetime < particle.maxLifetime && particle.size > 0.5
          )
      );

      animationFrameId = requestAnimationFrame(updateParticles);
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Start the animation loop
    animationFrameId = requestAnimationFrame(updateParticles);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMoving]);

  if (!isEnabled || particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 1 - (particle.lifetime / particle.maxLifetime),
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseSprite;
