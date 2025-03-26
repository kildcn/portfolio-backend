<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('display_order')->get();
        return response()->json($projects);
    }

    public function show($id)
    {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    // If you want to add admin functionality later,
    // you can uncomment these methods
    /*
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image_path' => 'nullable|string|max:255',
            'category' => 'required|string|max:255',
            'technologies' => 'required|array',
            'github_url' => 'nullable|url|max:255',
            'live_url' => 'nullable|url|max:255',
            'featured' => 'boolean',
            'display_order' => 'integer',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image_path'] = $path;
        }

        $project = Project::create($validated);
        return response()->json($project, 201);
    }

    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'image_path' => 'sometimes|nullable|string|max:255',
            'category' => 'sometimes|string|max:255',
            'technologies' => 'sometimes|array',
            'github_url' => 'sometimes|nullable|url|max:255',
            'live_url' => 'sometimes|nullable|url|max:255',
            'featured' => 'sometimes|boolean',
            'display_order' => 'sometimes|integer',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image_path'] = $path;
        }

        $project->update($validated);
        return response()->json($project);
    }

    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        return response()->json(null, 204);
    }
    */
}
