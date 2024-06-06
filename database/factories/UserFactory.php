<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // public function definition(): array
    // {
    //     return [
    //         // 'name' => fake()->name(),
    //         // 'email' => fake()->unique()->safeEmail(),
    //         // 'email_verified_at' => now(),
    //         // 'password' => static::$password ??= Hash::make('password'),
    //         // 'remember_token' => Str::random(10),
    //         // 'first_name' => fake()->firstName,
    //         // 'last_name' => fake()->lastName,
    //         'username' => fake()->userName,
    //         'fullname' => fake()->name,
    //         'email' => fake()->unique()->safeEmail,
    //         'email_verified_at' => now(),
    //         'password' => bcrypt('test'), 
    //         'remember_token' => Str::random(10),
    //     ];
    // }

    public function definition()
    {
        return [
            'fullname' => $this->faker->name,
            'username' => $this->faker->unique()->userName,
            'email' => $this->faker->unique()->safeEmail,
            'phonenum' => $this->faker->phoneNumber,
            'password' => bcrypt('password'), // default password
            'gender' => $this->faker->randomElement([1, 2]),
            'birthdate' => $this->faker->date(),
            'user_role' => $this->faker->randomElement(['admin', 'patient', 'doctor']),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
