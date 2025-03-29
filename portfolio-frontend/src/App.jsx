import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MouseSprite from './components/MouseSprite'; // Import the MouseSprite component
import CodeRain from './components/CodeRain';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Check for first visit
  useEffect(() => {
    // Apply dark mode - now permanently enabled
    document.documentElement.classList.add('dark');

    // Check if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (hasVisitedBefore) {
      setIsFirstVisit(false);
      setShowContent(true); // Skip animation for returning visitors
    } else {
      setShowAnimation(true); // Show animation for first-time visitors
    }
  }, []);

  // Function to replay the animation
  const replayAnimation = () => {
    setShowContent(false);
    setShowAnimation(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch profile data
        const profileResponse = await axios.get('/api/profile');
        // If profile data doesn't exist or is incomplete, use the default profile
        let profileData = profileResponse.data;

        if (!profileData || !profileData.name) {
          profileData = {
            name: "Killian Le Doucen",
            title: "Backend Developer",
            bio: "Passionate backend developer specializing in Ruby on Rails, PHP, Kotlin and Go for building scalable RESTful web services and web applications. Strong problem-solving skills with experience in implementing business logic, optimizing backend performance, and contributing to Agile projects.",
            avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFJg-5aIPzE9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729774040953?e=1748476800&v=beta&t=NQn45hQJcF3y7oF7d0_LlT6Y3eXt4Hec4eY79HcadAk",
            email: "killian.le-doucen@email.com",
            github: "https://github.com/kildcn",
            linkedin: "https://linkedin.com/in/killian-le-doucen-40382a253/",
            twitter: null,
            skills: {
              'Languages': ['German (B1)'],
              'Programming': ['Ruby on Rails', 'PHP', 'Go', 'Kotlin'],
              'Backend': ['RESTful APIs', 'Backend services', 'Agile methodologies', 'Cloud integration'],
              'Data': ['Data structure / SQL', 'PostgreSQL'],
              'Other': ['Version control', 'Documentation', 'Continuous learning']
            },
            resume_url: null
          };
        }

        setProfile(profileData);

        // Fetch projects data
        const projectsResponse = await axios.get('/api/projects');
        setProjects(projectsResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  // Function to handle animation completion
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowContent(true);

    // Set flag for returning visitors if this is the first visit
    if (isFirstVisit) {
      localStorage.setItem('hasVisited', 'true');
      setIsFirstVisit(false);
    }
  };

  // Show loading spinner only if we're not showing the animation and content is still loading
  if (loading && !showAnimation && !showContent) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-900">
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    );
  }

  // Show error message if there's an error and we're not showing the animation
  if (error && !showAnimation) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-900">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-900 transition-colors duration-300">
      {/* Show code rain animation when triggered */}
      {showAnimation && (
        <CodeRain onAnimationComplete={handleAnimationComplete} />
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: showContent ? 'auto' : 'none' }}
      >
        <MouseSprite /> {/* Add the MouseSprite component */}
        <CustomCursor />
        <Header
          profile={profile}
          replayAnimation={replayAnimation}
          showReplayButton={true}
        />
        <main className="w-full">
          <Hero profile={profile} />
          <About profile={profile} />
          <Projects projects={projects} />
          <Contact profile={profile} />
        </main>
        <Footer profile={profile} />
      </div>

      {/* Global animations CSS */}
      <style jsx global>{`
        /* Enhanced loader animation */
        .loader {
          display: flex;
          align-items: center;
          justify-center;
          gap: 8px;
        }

        .loader .circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #6366f1;
          animation: loader 1.5s ease-in-out infinite;
        }

        .loader .circle:nth-child(1) {
          animation-delay: 0s;
        }

        .loader .circle:nth-child(2) {
          animation-delay: 0.15s;
        }

        .loader .circle:nth-child(3) {
          animation-delay: 0.3s;
        }

        .loader .circle:nth-child(4) {
          animation-delay: 0.45s;
        }

        @keyframes loader {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-15px);
            opacity: 0.5;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
          width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        body {
          width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        /* Button hover effects */
        button, a {
          transition: all 0.3s ease;
        }

        /* Image hover effects */
        img {
          transition: transform 0.5s ease;
        }

        /* Animate on scroll transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom selection styling */
        ::selection {
          background: rgba(99, 102, 241, 0.3);
          color: inherit;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}

export default App;
