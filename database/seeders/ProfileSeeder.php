<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Your profile seeding logic here
        Profile::updateOrCreate(
            ['id' => 1],
            [
                'name' => 'Killian Le Doucen',
                'title' => 'Backend Developer',
                'bio' => 'Passionate backend developer specializing in Ruby on Rails, PHP, Kotlin and Go for building scalable RESTful web services and web applications. Strong problem-solving skills with experience in implementing business logic, optimizing backend performance, and contributing to Agile projects.',
                'avatar' => 'https://media.licdn.com/dms/image/v2/D4E03AQFJg-5aIPzE9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729774040953?e=1748476800&v=beta&t=NQn45hQJcF3y7oF7d0_LlT6Y3eXt4Hec4eY79HcadAk',
                'email' => 'killian.ledoucen@me.com',
                'github' => 'https://github.com/kildcn',
                'linkedin' => 'https://linkedin.com/in/killian-le-doucen-40382a253/',
                'twitter' => null,
                'skills' => [
                    'Languages' => ['German (B1)'],
                    'Programming' => ['Ruby on Rails', 'PHP', 'Go', 'Kotlin'],
                    'Backend' => ['RESTful APIs', 'Backend services', 'Agile methodologies', 'Cloud integration'],
                    'Data' => ['Data structure / SQL', 'PostgreSQL'],
                    'Other' => ['Version control', 'Documentation', 'Continuous learning']
                ],
                'resume_url' => null
            ]
        );
    }
}
