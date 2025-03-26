import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Setup dark mode
  useEffect(() => {
    // Check user preference for dark mode
    if (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setDarkMode(!darkMode);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header profile={profile} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default App;
