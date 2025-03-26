<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image_path',
        'category',
        'technologies',
        'github_url',
        'live_url',
        'featured',
        'display_order'
    ];

    protected $casts = [
        'technologies' => 'array',
        'featured' => 'boolean',
    ];
}
