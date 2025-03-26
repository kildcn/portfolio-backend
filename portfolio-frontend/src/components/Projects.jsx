import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (projects && projects.length > 0) {
      // Extract unique categories
      const uniqueCategories = ['all', ...new Set(projects.map(project => project.category))];
      setCategories(uniqueCategories);

      // Set featured projects
      const featured = projects.filter(project => project.featured);
      setFeaturedProjects(featured.length > 0 ? featured : projects.slice(0, 3));

      // Apply initial filtering
      filterProjects('all');

      // Add a small delay for animation purposes
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
    }
  }, [projects]);

  const filterProjects = (category) => {
    setSelectedCategory(category);
    setIsLoaded(false);

    setTimeout(() => {
      if (category === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === category));
      }
      setIsLoaded(true);
    }, 300);
  };

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              No projects available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 mb-3">
              My Work
            </span>
            <div className="mt-1 h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Check out some of my recent work that showcases my skills and experience.
          </p>
        </div>

        {/* Featured projects showcase */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>

        {/* All projects */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            All Projects
          </h3>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && isLoaded && (
            <div className="text-center py-12 transition-opacity duration-500 opacity-100">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
