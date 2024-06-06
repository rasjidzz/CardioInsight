<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use App\Models\Doctor;
use App\Models\Patient;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateUserRelationship implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(UserRegistered $event): void
    {
        $user = $event->user;

        if ($user->user_role === 'doctor') {
            Doctor::create([
                'user_id' => $user->id
            ]);
        } else if ($user->user_role === 'patient') {
            Patient::create([
                'user_id' => $user->id
            ]);
        }
    }
}
