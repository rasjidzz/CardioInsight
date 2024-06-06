<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Handle;
use App\Models\Patient;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Handle::factory(5)->create();
        // User::factory(5)->create();
        Patient::factory(5)->create(); // Membuat patient dummy
        Doctor::factory(5)->create(); // Membuat doctor dummy

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

    }
}
