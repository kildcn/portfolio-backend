import React, { useEffect, useRef } from 'react';

const Hero = ({ profile }) => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    if (!profile) return;

    const typeEffect = async () => {
      const element = typingTextRef.current;
      if (!element) return;

      const titles = [profile.title, 'Problem Solver', 'Tech Enthusiast'];
      let titleIndex = 0;

      while (true) {
        const currentTitle = titles[titleIndex];

        // Type the title
        for (let i = 0; i <= currentTitle.length; i++) {
          if (!element) return;
          element.textContent = currentTitle.substring(0, i);
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Pause at the end
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Delete the title
        for (let i = currentTitle.length; i >= 0; i--) {
          if (!element) return;
          element.textContent = currentTitle.substring(0, i);
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        // Move to next title
        titleIndex = (titleIndex + 1) % titles.length;
      }
    };

    typeEffect();
  }, [profile]);

  if (!profile) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-16 overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 dark:opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center lg:text-left lg:col-span-6">
            <div className="space-y-5">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <div className="h-px w-10 bg-indigo-600 dark:bg-indigo-400"></div>
                <span className="text-sm font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">Welcome to my portfolio</span>
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Hello, I'm</span>
                <span className="block text-indigo-600 dark:text-indigo-400 mt-1">
                  {profile.name}
                </span>
              </h1>

              <div className="flex items-center h-12 mt-3">
                <span className="text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-300">I'm a </span>
                <span ref={typingTextRef} className="ml-2 text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 typing-cursor"></span>
              </div>

              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl max-w-xl">
                {profile.bio ? profile.bio.split(' ').slice(0, 25).join(' ') + '...' : ''}
              </p>

              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <a
                  href="#projects"
                  className="btn-primary group"
                >
                  View My Work
                  <svg className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="btn-secondary group"
                >
                  Get In Touch
                  <svg className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <div className="mt-12 flex space-x-6 sm:justify-center lg:justify-start">
                {profile.github && (
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026a9.564 9.564 0 0112 0c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.138 20.161 22 16.416 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                {profile.linkedin && (
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {profile.twitter && (
                  <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center relative lg:mt-0 lg:col-span-6">
            <div className="max-w-md transform lg:translate-x-10">
              {profile.avatar ? (
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 blur-lg"></div>
                  <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-75 blur-lg"></div>
                  <div className="relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl bg-gray-200 dark:bg-gray-700 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mx-auto">
                    <svg className="h-32 w-32 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</p>
        <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 0.375rem;
          color: white;
          background-color: #4f46e5;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1);
        }

        .dark .btn-primary {
          background-color: #6366f1;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          background-color: #4338ca;
          box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3), 0 4px 6px -2px rgba(79, 70, 229, 0.15);
        }

        .dark .btn-primary:hover {
          background-color: #4f46e5;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 0.375rem;
          color: #4f46e5;
          background-color: white;
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .dark .btn-secondary {
          background-color: #1f2937;
          border-color: #374151;
          color: #6366f1;
        }

        .btn-secondary:hover {
          transform: translateY(-1px);
          color: #4338ca;
          border-color: #d1d5db;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .dark .btn-secondary:hover {
          color: #4f46e5;
          border-color: #4b5563;
        }

        .social-icon-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          transition: all 0.3s ease;
        }

        .dark .social-icon-link {
          color: #9ca3af;
        }

        .social-icon-link:hover {
          color: #4f46e5;
          transform: translateY(-2px);
        }

        .dark .social-icon-link:hover {
          color: #6366f1;
        }

        .typing-cursor::after {
          content: '|';
          display: inline-block;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
