<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Call the ProfileSeeder
        $this->call(ProfileSeeder::class);

        // Create real projects
        $projects = [
            [
                'name' => 'Le Doucen Avocats',
                'description' => 'Site web officiel du Cabinet Le Doucen Avocats, un cabinet d\'avocats basé à Rodez (Aveyron) depuis 1972. Développé avec React et Vite, utilisant TailwindCSS pour le style. Le site présente les services, l\'équipe et les coordonnées du cabinet.',
                'image_path' => 'https://i.postimg.cc/4ZXzG67x/Screenshot-2025-03-30-at-21-10-20.png',
                'category' => 'frontend',
                'technologies' => ['React', 'Vite', 'TailwindCSS', 'ESLint', 'CSS Animation'],
                'github_url' => 'https://github.com/kildcn/ledoucen-avocats/',
                'live_url' => 'https://ledoucen-avocats.onrender.com/',
                'featured' => true,
                'display_order' => 1
            ],
            [
                'name' => 'Avikan',
                'description' => 'A gamified bird recognition application that helps users identify, catalog, and track birds they spot in the wild. Leveraging machine learning for bird identification, Avikan turns birdwatching into an engaging adventure with experience points, badges, and a community leaderboard.',
                'image_path' => 'https://i.postimg.cc/M6NMc1PL/Screenshot-2025-03-29-at-12-46-16.png',
                'category' => 'fullstack',
                'technologies' => ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'Stimulus.js', 'Mapbox GL', 'Cloudinary', 'Devise'],
                'github_url' => 'https://github.com/kildcn/Avikan',
                'live_url' => null,
                'featured' => true,
                'display_order' => 2
            ],
            [
                'name' => 'Job Catcher',
                'description' => 'A job analysis platform with a job search engine, filters, and an analysis dashboard to see most demanded skills, proportion of junior, mid and senior level positions, average salaries, and more.',
                'image_path' => 'https://i.postimg.cc/wBjX15qz/Screenshot-2025-03-27-at-22-16-55.png',
                'category' => 'fullstack',
                'technologies' => ['PHP', 'Laravel', 'React', 'PostgreSQL', 'API Integration', 'Data Analysis'],
                'github_url' => 'https://github.com/kildcn/job-catcher',
                'live_url' => null,
                'featured' => true,
                'display_order' => 3
            ],
            [
                'name' => 'Souk Machine',
                'description' => 'An online directory where people capture the visual and auditive experience of going to a market, from anywhere in the world. It is a digital mosaic that celebrates the vibrant, chaotic, and sensory-rich environments of markets globally through video and audio recordings.',
                'image_path' => 'https://i.postimg.cc/SkK7YGxZ/Screenshot-2025-03-29-at-12-02-42.png',
                'category' => 'fullstack',
                'technologies' => ['Ruby on Rails', 'PostgreSQL', 'Cloudinary', 'Map Integration', 'CRUD Operations'],
                'github_url' => 'https://github.com/kildcn/Souk-Machine',
                'live_url' => 'https://soukmachine-92aad94b7dd6.herokuapp.com/',
                'featured' => true,
                'display_order' => 4
            ],
            [
                'name' => 'Delivery Order Price Calculator',
                'description' => 'A backend service that calculates the total price and price breakdown of a delivery order. It integrates with an external API to fetch venue-related data required for the calculations. The service considers factors such as delivery distance, cart value, base delivery fees, distance-based surcharges, minimum order values, and maximum delivery ranges.',
                'image_path' => 'https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/001/539/original/vertical-gradle.png?1638521007',
                'category' => 'backend',
                'technologies' => ['Java', 'Spring Boot', 'RESTful API', 'Gradle', 'JUnit', 'API Integration'],
                'github_url' => 'https://github.com/kildcn/Delivery-Order-Price-Calculator',
                'live_url' => null,
                'featured' => true,
                'display_order' => 5
            ],
            [
                'name' => 'Baby Clothing Marketplace',
                'description' => 'A clothing marketplace where users can post clothing items for sale, browse, search, purchase items, with a messaging system between buyer and seller, order status, stock checking, and shipping information.',
                'image_path' => 'https://i.postimg.cc/7Ltg0Ch2/Screenshot-2025-03-27-at-22-29-23.png',
                'category' => 'fullstack',
                'technologies' => ['Go', 'React', 'SQL', 'RESTful API', 'User Authentication'],
                'github_url' => 'https://github.com/kildcn/Baby-Clothing-Marketplace',
                'live_url' => null,
                'featured' => false,
                'display_order' => 6
            ],
            [
                'name' => 'Portfolio Website',
                'description' => 'My personal portfolio website built with Laravel and React to showcase my projects and skills as a developer.',
                'image_path' => 'https://i.postimg.cc/9MvZgvGX/Screenshot-2025-03-27-at-22-35-00.png',
                'category' => 'fullstack',
                'technologies' => ['Laravel', 'React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
                'github_url' => 'https://github.com/kildcn/portfolio-backend',
                'live_url' => 'https://portfolio-frontend-6u0z.onrender.com/',
                'featured' => false,
                'display_order' => 7
            ],
            // New projects from paste.txt
            [
                'name' => 'Restaurant Booking System',
                'description' => 'A comprehensive backend API for restaurant table management and reservation system, featuring user management with multi-level access, table management for different capacities and sections, automated reservation system, customizable restaurant settings, real-time availability checking, and a well-structured RESTful API.',
                'image_path' => 'https://i.ibb.co/21qqBY0X/Screenshot-2025-04-25-at-12-43-55.png',
                'category' => 'backend',
                'technologies' => ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'moment', 'React'],
                'github_url' => 'https://github.com/kildcn/restaurant-booking-system',
                'live_url' => null,
                'featured' => true,
                'display_order' => 8
            ],
            [
                'name' => 'Birthday Paradox Simulator',
                'description' => 'An interactive React application that demonstrates the fascinating Birthday Paradox, showcasing both classic day-only matches and exact birthday (day + year) probabilities with interactive simulation, detailed visualization, and responsive design.',
                'image_path' => 'https://i.ibb.co/JwtTgVn5/Screenshot-2025-04-25-at-13-05-24.png',
                'category' => 'frontend',
                'technologies' => ['React 19.1.0', 'Lucide React', 'CSS-in-JS'],
                'github_url' => 'https://github.com/kildcn/birthday-paradox',
                'live_url' => 'https://birthday-paradox.onrender.com/',
                'featured' => true,
                'display_order' => 9
            ],
            [
                'name' => 'Warehouse Management System',
                'description' => 'A modern Warehouse Management System built with Kotlin and Spring Boot for the backend, and React for the frontend, providing a robust solution for managing warehouse operations including product management, order processing, inventory control, warehouse organization, and real-time notifications.',
                'image_path' => 'https://i.ibb.co/pj3KfFDD/Screenshot-2025-04-25-at-13-08-31.png',
                'category' => 'fullstack',
                'technologies' => ['Kotlin 2.1.x', 'Spring Boot 3.1.x', 'H2 Database', 'PostgreSQL', 'Gradle', 'React 19.x', 'Tailwind CSS', 'Recharts', 'Lucide React'],
                'github_url' => 'https://github.com/kildcn/wms-platform',
                'live_url' => null,
                'featured' => true,
                'display_order' => 10
            ],
            [
                'name' => 'German Learning App',
                'description' => 'A language learning application focused on German, with AI-generated practice content and comprehensive learning tools including content based on CEFR levels, level tracking system, personal lexicon, multiple quiz generations, and score tracking.',
                'image_path' => 'https://i.ibb.co/TM1XDFFL/Screenshot-2025-04-25-at-13-16-03.png',
                'category' => 'fullstack',
                'technologies' => ['React', 'PHP Laravel', 'AI Integration'],
                'github_url' => 'https://github.com/kildcn/language-learning-app',
                'live_url' => null,
                'featured' => true,
                'display_order' => 11
            ]
        ];

        // Create projects only if they don't exist by name, or update them if they do exist
        foreach ($projects as $projectData) {
            Project::updateOrCreate(
                ['name' => $projectData['name']],
                $projectData
            );
        }
    }
}
