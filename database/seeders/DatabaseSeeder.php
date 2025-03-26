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

        // Create sample projects
        $projects = [
          // Your projects array here
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
