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
        Schema::create('membership_applications', function (Blueprint $table) {
            $table->id();
            $table->string('institution_name');
            $table->string('head_librarian_name');
            $table->string('head_librarian_phone');
            $table->string('pic_name');
            $table->string('pic_phone');
            $table->text('institution_address');
            $table->enum('province', ['Jawa Timur', 'Jawa Barat', 'Jawa Tengah']);
            $table->string('institution_email');
            $table->string('library_website_url')->nullable();
            $table->string('opac_url')->nullable();
            $table->enum('onesearch_status', ['belum', 'sudah']);
            $table->integer('book_collection_count');
            $table->enum('accreditation_status', ['akreditasi A', 'akreditasi B', 'belum akreditasi']);
            $table->string('transfer_proof_path');
            $table->enum('application_type', ['Pendaftaran Baru', 'Perpanjangan']);
            $table->timestamps();
            
            // Indexes for performance
            $table->index('application_type');
            $table->index('province');
            $table->index('accreditation_status');
            $table->index(['created_at', 'application_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('membership_applications');
    }
};