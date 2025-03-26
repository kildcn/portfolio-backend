<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('projects', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->text('description');
        $table->string('image_path')->nullable();
        $table->string('category'); // 'frontend', 'backend', 'fullstack', etc.
        $table->json('technologies'); // Store technologies as JSON array
        $table->string('github_url')->nullable();
        $table->string('live_url')->nullable();
        $table->boolean('featured')->default(false);
        $table->integer('display_order')->default(0);
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
