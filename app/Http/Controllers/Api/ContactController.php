<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Handle contact form submissions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function send(Request $request)
    {
        // Validate form data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // Get form data
        $name = $request->input('name');
        $email = $request->input('email');
        $message = $request->input('message');

        // Send email
        try {
            Mail::send([], [], function ($mail) use ($name, $email, $message) {
                $mail->to(env('MAIL_CONTACT_ADDRESS', 'killian.ledoucen@me.com'))
                    ->subject('Portfolio Contact: ' . $name)
                    ->html("
                        <h2>New Contact Message</h2>
                        <p><strong>From:</strong> {$name} ({$email})</p>
                        <div style='margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 4px;'>
                            " . nl2br(e($message)) . "
                        </div>
                    ");

                // Set reply-to address to the sender's email
                $mail->replyTo($email, $name);
            });

            return response()->json([
                'success' => true,
                'message' => 'Your message has been sent. I\'ll get back to you soon!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error sending your message. Please try again later.'
            ], 500);
        }
    }
}
