<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'bio',
        'avatar',
        'email',
        'github',
        'linkedin',
        'twitter',
        'skills',
        'resume_url'
    ];

    protected $casts = [
        'skills' => 'array',
    ];
}
