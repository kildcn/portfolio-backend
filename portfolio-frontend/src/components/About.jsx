import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = ({ profile }) => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [leftColRef, leftColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300
  });

  const [rightColRef, rightColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 600
  });

  if (!profile) return null;

  // Organize skills by category
  const renderSkills = () => {
    if (!profile.skills) return null;

    return Object.entries(profile.skills).map(([category, skills], categoryIndex) => (
      <div key={category} className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, skillIndex) => (
            <span
              key={skill}
              className="skill-tag px-3 py-1.5 rounded-full text-sm font-medium relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
              }}
            >
              <span className="relative z-10">{skill}</span>
              <span className="absolute inset-0 gradient-border opacity-20"></span>
            </span>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-700 ${containerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 mb-3">
              About Me
            </span>
            <div className="mt-1 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Who I Am
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-300 leading-relaxed">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div
            ref={leftColRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${leftColInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="prose prose-lg prose-indigo dark:prose-invert text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="inline-block mr-3 h-8 w-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                My Background
              </h3>
              <div className="text-lg leading-relaxed">
                <p className="mb-4">{profile.bio}</p>
              </div>

              <div className="mt-12 flex flex-wrap gap-6">
                {profile.github && (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card hover:shadow-xl"
                  >
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.137 20.194 22 16.437 22 12.017 22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card hover:shadow-xl"
                  >
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
                {profile.twitter && (
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card hover:shadow-xl"
                  >
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </a>
                )}
                {profile.resume_url && (
                  <a
                    href={profile.resume_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card hover:shadow-xl"
                  >
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                    </svg>
                    Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          <div
            ref={rightColRef}
            className={`order-1 lg:order-2 transition-all duration-700 ${rightColInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-lg"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="inline-block mr-3 h-8 w-1 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                  Skills & Expertise
                </h3>
                <div className="space-y-6">
                  {renderSkills()}
                </div>
                {profile.email && (
                  <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Get In Touch</h3>
                    <p className="text-gray-500 dark:text-gray-300 mb-4">
                      Feel free to reach out if you have any questions or would like to work together.
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {profile.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .social-link-card {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 500;
          color: #4b5563;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .dark .social-link-card {
          color: #d1d5db;
          background-color: #1f2937;
          border-color: #374151;
        }

        .social-link-card:hover {
          color: #4f46e5;
          border-color: #4f46e5;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .dark .social-link-card:hover {
          color: #6366f1;
          border-color: #6366f1;
        }

        .skill-tag {
          background-color: rgba(99, 102, 241, 0.1);
          color: #4338ca;
          background-size: 200% 100%;
          animation: fadeIn 0.5s ease forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        .dark .skill-tag {
          background-color: rgba(99, 102, 241, 0.15);
          color: #818cf8;
        }

        .skill-tag .gradient-border {
          background: linear-gradient(90deg, #4f46e5, #8b5cf6, #4f46e5);
          background-size: 200% 100%;
          animation: gradient-shift 3s linear infinite;
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
