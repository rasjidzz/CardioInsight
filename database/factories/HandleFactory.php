<?php

namespace Database\Factories;

use App\Models\Doctor;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Handle>
 */
class HandleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'patient_id' => Patient::factory()->create([
            //     'id' => $this->faker->unique()->numberBetween(1, 10)
            // ])->id,
            // 'doctor_id' => Doctor::factory()->create([
            //     'id' => $this->faker->unique()->numberBetween(1, 10)
            // ])->id,

        ];
    }
}
