<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      Profile::create([
        'name' => 'Killian Le Doucen',
        'title' => 'Backend Developer',
        'bio' => 'Passionate backend developer specializing in Ruby on Rails, PHP, Kotlin and Go for building scalable RESTful web services and web applications. Strong problem-solving skills with experience in implementing business logic, optimizing backend performance, and contributing to Agile projects. Transitioned from a successful career as an educator, bringing excellent communication, project management, and collaboration abilities.',
        'avatar' => 'https://media.licdn.com/dms/image/v2/D4E03AQFJg-5aIPzE9Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729774040953?e=1748476800&v=beta&t=NQn45hQJcF3y7oF7d0_LlT6Y3eXt4Hec4eY79HcadAk',
        'email' => 'killian.ledoucen@me.com',  // Replace with your email
        'github' => 'https://github.com/kildcn',
        'linkedin' => 'https://linkedin.com/in/killian-le-doucen-40382a253/',
        'twitter' => null,
        'skills' => [
            'Languages' => ['English (native)','French (native)','German (B1)'],
            'Programming' => ['Ruby on Rails', 'PHP', 'Go', 'Kotlin', 'SQL'],
            'Frontend' => ['JavaScript', 'React', 'HTML', 'CSS/SCSS'],
            'Backend' => ['RESTful APIs', 'Backend services', 'Agile methodologies', 'Cloud integration'],
            'Data' => ['Data structure / SQL', 'PostgreSQL'],
            'Other' => ['Version control', 'Documentation', 'Continuous learning']
        ],
        'resume_url' => 'https://publuu.com/flip-book/832764/1830333',
    ]);
    }
}
