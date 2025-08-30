<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MembershipApplication>
 */
class MembershipApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'institution_name' => 'IAIN ' . fake()->city(),
            'head_librarian_name' => fake()->name(),
            'head_librarian_phone' => fake()->phoneNumber(),
            'pic_name' => fake()->name(),
            'pic_phone' => fake()->phoneNumber(),
            'institution_address' => fake()->address(),
            'province' => fake()->randomElement(['Jawa Timur', 'Jawa Barat', 'Jawa Tengah']),
            'institution_email' => fake()->unique()->safeEmail(),
            'library_website_url' => fake()->optional()->url(),
            'opac_url' => fake()->optional()->url(),
            'onesearch_status' => fake()->randomElement(['belum', 'sudah']),
            'book_collection_count' => fake()->numberBetween(1000, 50000),
            'accreditation_status' => fake()->randomElement(['akreditasi A', 'akreditasi B', 'belum akreditasi']),
            'transfer_proof_path' => 'transfer_proofs/' . fake()->uuid() . '.pdf',
            'application_type' => fake()->randomElement(['Pendaftaran Baru', 'Perpanjangan']),
        ];
    }

    /**
     * Indicate that the application is a new registration.
     */
    public function newRegistration(): static
    {
        return $this->state(fn (array $attributes) => [
            'application_type' => 'Pendaftaran Baru',
        ]);
    }

    /**
     * Indicate that the application is a renewal.
     */
    public function renewal(): static
    {
        return $this->state(fn (array $attributes) => [
            'application_type' => 'Perpanjangan',
        ]);
    }
}