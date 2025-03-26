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

        // Create sample projects
        $projects = [
          [
            'name' => 'Avikan',
            'description' => 'A bird recognition application that efficiently identifies bird species through uploaded images. Features include a bird species catalog with detailed taxonomic and ecological attributes, user capture system with image processing and recognition, geolocation-based bird spotting with search capabilities, and a gamification system with experience points and progressive achievements.',
            'image_path' => 'https://i.ibb.co/twWDXRgr/avikan-6dd30ac64e44-herokuapp-com-captures-i-Phone-12-Pro-1.png',
            'category' => 'fullstack',
            'technologies' => ['Ruby on Rails 7.1', 'PostgreSQL', 'HTTParty', 'Devise', 'Active Storage', 'Cloudinary', 'Geocoder', 'RSpec', 'Docker'],
            'github_url' => 'https://github.com/kildcn/Avikan',
            'live_url' => null,
            'featured' => true,
            'display_order' => 1,
        ],
            [
                'name' => 'Portfolio Website',
                'description' => 'A personal portfolio website showcasing my projects and skills.',
                'image_path' => 'projects/portfolio.jpg',
                'category' => 'frontend',
                'technologies' => ['React', 'Tailwind CSS', 'Laravel'],
                'github_url' => 'https://github.com/yourusername/portfolio',
                'live_url' => null,
                'featured' => true,
                'display_order' => 2,
            ],
            [
                'name' => 'Task Management API',
                'description' => 'A RESTful API for managing tasks and projects with authentication and authorization.',
                'image_path' => 'projects/task-api.jpg',
                'category' => 'backend',
                'technologies' => ['Node.js', 'Express', 'MongoDB', 'JWT'],
                'github_url' => 'https://github.com/yourusername/task-api',
                'live_url' => 'https://task-api.example.com',
                'featured' => false,
                'display_order' => 3,
            ],
            [
                'name' => 'Weather Dashboard',
                'description' => 'A weather dashboard that displays current and forecasted weather data from multiple APIs.',
                'image_path' => 'projects/weather.jpg',
                'category' => 'frontend',
                'technologies' => ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
                'github_url' => 'https://github.com/yourusername/weather',
                'live_url' => 'https://weather.example.com',
                'featured' => false,
                'display_order' => 4,
            ],
            [
                'name' => 'Social Media Backend',
                'description' => 'A backend system for a social media platform with user profiles, posts, and comments.',
                'image_path' => 'projects/social-backend.jpg',
                'category' => 'backend',
                'technologies' => ['Laravel', 'MySQL', 'Redis', 'WebSockets'],
                'github_url' => 'https://github.com/yourusername/social-backend',
                'live_url' => null,
                'featured' => true,
                'display_order' => 5,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
