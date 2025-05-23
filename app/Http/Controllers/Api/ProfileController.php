<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Get the profile information.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $profile = Profile::first();
        return response()->json($profile);
    }
}
