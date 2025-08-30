<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\MembershipApplication;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin APPTNU',
            'email' => 'admin@apptnu.org',
        ]);

        // Create sample membership applications
        MembershipApplication::factory()->count(15)->create();
        
        // Create some specific test applications
        MembershipApplication::factory()->newRegistration()->create([
            'institution_name' => 'IAIN Surabaya',
            'head_librarian_name' => 'Dr. Ahmad Fulan',
            'province' => 'Jawa Timur',
        ]);
        
        MembershipApplication::factory()->renewal()->create([
            'institution_name' => 'UIN Jakarta',
            'head_librarian_name' => 'Prof. Siti Aminah',
            'province' => 'Jawa Barat',
        ]);
    }
}
