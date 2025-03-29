import React, { useState, useEffect } from 'react';

const CodeRain = ({ onAnimationComplete }) => {
  const [symbols, setSymbols] = useState([]);
  const [contentOpacity, setContentOpacity] = useState(0);
  const [welcomeShown, setWelcomeShown] = useState(false);

  // Programming characters from different languages
  const getRandomSymbol = () => {
    const codingChars = [
      // Basic symbols
      '{', '}', '(', ')', '[', ']', '<', '>', '/', '*', '#', ';', '=', ':', '+', '-', '&', '|', '!', '$', '%', '^', '~',

      // PHP specific
      '$', '<?', '?>', '->', '=>', '::',

      // Ruby specific
      '@', '@@', '#{', '}', 'do', 'end',

      // Go specific
      ':=', 'func', 'go', 'chan', '<-',

      // HTML/CSS specific
      '</', '/>', '</>', '.class', '#id', '@media', '@keyframes',

      // React/JS specific
      'JSX', 'const', 'let', 'var', '=>', '&&', '||', '===', '!==', '...', '`${', '}`',

      // Specific language keywords
      'class', 'def', 'function', 'if', 'else', 'for', 'while', 'return', 'import', 'from', 'try', 'catch',

      // Combined short snippets
      '() => {}', '!important', '{"key": "value"}', '&&', '||', 'export default', '.map()', '?:', '?.',
      '<div>', '</div>', '<React.Fragment>', 'useEffect()', 'useState()', '<></>', '$variable', 'render()',
      'this.state', 'props.children', ':root', 'console.log', 'package main'
    ];
    return codingChars[Math.floor(Math.random() * codingChars.length)];
  };

  // Generate a random color from our palette
  const getRandomColor = () => {
    const colors = [
      '#4f46e5', // indigo-600 (PHP)
      '#3b82f6', // blue-500 (Ruby)
      '#10b981', // emerald-500 (Go)
      '#ec4899', // pink-500 (HTML)
      '#8b5cf6', // violet-500 (CSS)
      '#f59e0b', // amber-500 (JavaScript)
      '#6366f1', // indigo-400 (React)
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Handle welcome screen click
  const handleWelcomeClick = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  useEffect(() => {
    // Create the initial symbols for the rain
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const columns = Math.floor(screenWidth / 50); // Approximate number of columns

    // Create rain in columns for more even distribution
    const initialSymbols = [];
    for (let i = 0; i < columns; i++) {
      const columnX = (i * screenWidth / columns) + (Math.random() * 20 - 10); // Add slight randomness
      const numSymbolsInColumn = 3 + Math.floor(Math.random() * 4); // 3-6 symbols per column

      for (let j = 0; j < numSymbolsInColumn; j++) {
        // Stagger the starting positions vertically
        const startY = -screenHeight + (j * (screenHeight / numSymbolsInColumn)) - (Math.random() * 200);

        initialSymbols.push({
          id: Math.random().toString(36).substr(2, 9),
          x: columnX,
          y: startY,
          speed: 8 + Math.random() * 4, // Faster speed (8-12 pixels per frame)
          symbol: getRandomSymbol(),
          color: getRandomColor(),
          size: 14 + Math.random() * 10, // Font size
          opacity: 0.7 + Math.random() * 0.3,
          rotation: Math.random() * 20 - 10, // Small rotation (-10 to +10 degrees)
        });
      }
    }

    setSymbols(initialSymbols);

    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (symbols.length === 0) return;

    let animationFrameId;
    const screenHeight = window.innerHeight;
    let animationStartTime = performance.now();
    let maxAnimationTime = 5000; // Shorter animation: 5 seconds max

    const updateAnimation = (timestamp) => {
      // Check if animation has run too long
      const animationRuntime = timestamp - animationStartTime;
      if (animationRuntime > maxAnimationTime && !welcomeShown) {
        showWelcomeScreen();
        return;
      }

      // Update symbols positions
      setSymbols(prevSymbols => {
        const updatedSymbols = prevSymbols.map(symbol => ({
          ...symbol,
          y: symbol.y + symbol.speed,
        }));

        // Check if all symbols are offscreen
        const anySymbolsVisible = updatedSymbols.some(symbol => symbol.y < screenHeight + 50);
        if (!anySymbolsVisible && !welcomeShown) {
          showWelcomeScreen();
          return [];
        }

        return updatedSymbols;
      });

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    const showWelcomeScreen = () => {
      setWelcomeShown(true);
      cancelAnimationFrame(animationFrameId);

      // Start fading in the welcome screen
      setContentOpacity(1);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [symbols, welcomeShown]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-white dark:bg-gray-900">
      {/* Falling code symbols */}
      <div className="w-full h-full relative">
        {symbols.map(symbol => (
          <div
            key={symbol.id}
            className="absolute font-mono font-medium select-none pointer-events-none will-change-transform"
            style={{
              left: `${symbol.x}px`,
              top: `${symbol.y}px`,
              fontSize: `${symbol.size}px`,
              color: symbol.color,
              opacity: symbol.opacity,
              transform: `rotate(${symbol.rotation}deg)`,
            }}
          >
            {symbol.symbol}
          </div>
        ))}
      </div>

      {/* Click anywhere welcome screen */}
      <div
        className="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center transition-opacity duration-600 cursor-pointer"
        style={{
          opacity: contentOpacity,
          pointerEvents: contentOpacity > 0 ? 'auto' : 'none',
        }}
        onClick={handleWelcomeClick}
      >
        <div className="text-center p-8 max-w-lg">
          <h1 className="text-4xl font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            Welcome
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            to my portfolio
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Explore my projects and skills as a developer
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-8 animate-pulse">
            Click anywhere to enter
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeRain;
