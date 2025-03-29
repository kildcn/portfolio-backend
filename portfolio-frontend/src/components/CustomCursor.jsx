import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHoveringClickable = hoveredElement && (
        hoveredElement.closest('a') ||
        hoveredElement.closest('button') ||
        hoveredElement.closest('.social-icon-link') ||
        hoveredElement.closest('.project-card') ||
        hoveredElement.closest('.skill-tag') ||
        hoveredElement.closest('input') ||
        hoveredElement.closest('textarea') ||
        hoveredElement.tagName === 'A' ||
        hoveredElement.tagName === 'BUTTON' ||
        hoveredElement.tagName === 'INPUT' ||
        hoveredElement.tagName === 'TEXTAREA' ||
        window.getComputedStyle(hoveredElement).cursor === 'pointer'
      );

      setIsPointer(isHoveringClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Start checking cursor type on intervals
    const cursorTypeInterval = setInterval(updateCursorType, 100);

    // Initial check for cursor visibility
    if (document.hasFocus() && 'ontouchstart' in window === false) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(cursorTypeInterval);
    };
  }, [position.x, position.y]);

  // Don't render on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor-dot ${isVisible ? 'visible' : 'hidden'} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor-ring ${isVisible ? 'visible' : 'hidden'} ${isPointer ? 'pointer' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <style jsx>{`
        .custom-cursor-dot {
          position: fixed;
          width: 5px;
          height: 5px;
          background-color: #4f46e5;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          opacity: 0.8;
          transition: opacity 0.3s ease, width 0.2s ease, height 0.2s ease, background-color 0.3s ease;
        }

        .custom-cursor-ring {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 2px solid rgba(79, 70, 229, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9998;
          transition: width 0.3s ease-out, height 0.3s ease-out, border-color 0.3s ease, opacity 0.3s ease;
        }

        .custom-cursor-dot.clicking {
          width: 10px;
          height: 10px;
          background-color: rgba(99, 102, 241, 0.8);
        }

        .custom-cursor-ring.clicking {
          width: 20px;
          height: 20px;
          border-color: rgba(99, 102, 241, 0.5);
        }

        .custom-cursor-ring.pointer {
          width: 40px;
          height: 40px;
          border-color: rgba(79, 70, 229, 0.5);
          border-width: 3px;
        }

        .custom-cursor-dot.visible, .custom-cursor-ring.visible {
          opacity: 1;
        }

        .custom-cursor-dot.hidden, .custom-cursor-ring.hidden {
          opacity: 0;
        }

        @media (max-width: 768px) {
          .custom-cursor-dot, .custom-cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
