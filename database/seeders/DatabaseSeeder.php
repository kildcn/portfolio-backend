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
                'name' => 'Avikan',
                'description' => 'A gamified bird recognition application that helps users identify, catalog, and track birds they spot in the wild. Leveraging machine learning for bird identification, Avikan turns birdwatching into an engaging adventure with experience points, badges, and a community leaderboard.',
                'image_path' => 'https://i.postimg.cc/M6NMc1PL/Screenshot-2025-03-29-at-12-46-16.png',
                'category' => 'fullstack',
                'technologies' => ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'Stimulus.js', 'Mapbox GL', 'Cloudinary', 'Devise'],
                'github_url' => 'https://github.com/kildcn/Avikan',
                'live_url' => null,
                'featured' => true,
                'display_order' => 1
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
                'display_order' => 2
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
                'display_order' => 3
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
                'display_order' => 4
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
                'display_order' => 5
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
                'display_order' => 6
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
