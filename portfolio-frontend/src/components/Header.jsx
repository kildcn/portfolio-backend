import { useState, useEffect } from 'react';

const Header = ({ profile, replayAnimation, showReplayButton }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
              <span className="text-indigo-600 dark:text-indigo-400">{'{'}{'}'}</span> {profile?.name || 'My Portfolio'}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8 items-center">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            {profile?.resume_url && (
              <a href={profile.resume_url} target="_blank" rel="noopener noreferrer" className="nav-link">
                Resume
              </a>
            )}

            {/* Replay Animation Button */}
            {showReplayButton && (
              <button
                onClick={replayAnimation}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
                aria-label="Replay intro animation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Intro</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {/* Replay Animation Button (Mobile) */}
            {showReplayButton && (
              <button
                onClick={replayAnimation}
                className="p-2 mr-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Replay intro animation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <a href="#about" className="mobile-nav-link">About</a>
          <a href="#projects" className="mobile-nav-link">Projects</a>
          <a href="#contact" className="mobile-nav-link">Contact</a>
          {profile?.resume_url && (
            <a
              href={profile.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-link"
            >
              Resume
            </a>
          )}
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .nav-link {
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(55, 65, 81, 1);
          transition: color 0.3s;
          padding-bottom: 0.25rem;
        }

        .dark .nav-link {
          color: rgba(229, 231, 235, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #4f46e5;
          transition: width 0.3s ease;
        }

        .dark .nav-link::after {
          background-color: #818cf8;
        }

        .nav-link:hover {
          color: #4f46e5;
        }

        .dark .nav-link:hover {
          color: #818cf8;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.75rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(55, 65, 81, 1);
          border-bottom: 1px solid rgba(229, 231, 235, 0.5);
        }

        .dark .mobile-nav-link {
          color: rgba(229, 231, 235, 1);
          border-bottom: 1px solid rgba(75, 85, 99, 0.5);
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }
      `}</style>
    </header>
  );
};

export default Header;
