<?php

namespace Tests\Feature;

use App\Models\MembershipApplication;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MembershipApplicationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('public');
    }

    public function test_can_view_membership_application_form(): void
    {
        $response = $this->get(route('membership.create'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('membership-application')
        );
    }

    public function test_can_submit_membership_application(): void
    {
        $file = UploadedFile::fake()->create('transfer_proof.pdf', 1000, 'application/pdf');

        $applicationData = [
            'institution_name' => 'IAIN Test',
            'head_librarian_name' => 'Dr. Test Librarian',
            'head_librarian_phone' => '081234567890',
            'pic_name' => 'Test PIC',
            'pic_phone' => '081234567891',
            'institution_address' => 'Jl. Test No. 123, Kota Test',
            'province' => 'Jawa Timur',
            'institution_email' => 'test@iain-test.ac.id',
            'library_website_url' => 'https://perpustakaan.iain-test.ac.id',
            'opac_url' => 'https://opac.iain-test.ac.id',
            'onesearch_status' => 'sudah',
            'book_collection_count' => '10000',
            'accreditation_status' => 'akreditasi A',
            'transfer_proof' => $file,
            'application_type' => 'Pendaftaran Baru',
        ];

        $response = $this->post(route('membership.store'), $applicationData);

        $response->assertRedirect(route('membership.success'));
        $response->assertSessionHas('success', 'Aplikasi keanggotaan berhasil dikirim!');

        $this->assertDatabaseHas('membership_applications', [
            'institution_name' => 'IAIN Test',
            'head_librarian_name' => 'Dr. Test Librarian',
            'application_type' => 'Pendaftaran Baru',
        ]);

        $this->assertTrue(
            collect(Storage::disk('public')->files('transfer_proofs'))->isNotEmpty(),
            'Transfer proof file was not uploaded'
        );
    }

    public function test_admin_can_view_applications_list(): void
    {
        $user = User::factory()->create();
        MembershipApplication::factory()->count(5)->create();

        $response = $this->actingAs($user)->get(route('admin.applications.index'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('admin/applications/index')
            ->has('applications.data', 5)
        );
    }

    public function test_admin_can_view_application_details(): void
    {
        $user = User::factory()->create();
        $application = MembershipApplication::factory()->create();

        $response = $this->actingAs($user)->get(route('admin.applications.show', $application));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('admin/applications/show')
            ->where('application.id', $application->id)
            ->where('application.institution_name', $application->institution_name)
        );
    }

    public function test_form_validation_works(): void
    {
        $response = $this->post(route('membership.store'), []);

        $response->assertSessionHasErrors([
            'institution_name',
            'head_librarian_name',
            'head_librarian_phone',
            'pic_name',
            'pic_phone',
            'institution_address',
            'province',
            'institution_email',
            'onesearch_status',
            'book_collection_count',
            'accreditation_status',
            'transfer_proof',
            'application_type',
        ]);
    }

    public function test_file_upload_validation(): void
    {
        $file = UploadedFile::fake()->create('test.txt', 1000, 'text/plain');

        $applicationData = [
            'institution_name' => 'IAIN Test',
            'head_librarian_name' => 'Dr. Test',
            'head_librarian_phone' => '081234567890',
            'pic_name' => 'Test PIC',
            'pic_phone' => '081234567891',
            'institution_address' => 'Address',
            'province' => 'Jawa Timur',
            'institution_email' => 'test@example.com',
            'onesearch_status' => 'sudah',
            'book_collection_count' => '1000',
            'accreditation_status' => 'akreditasi A',
            'transfer_proof' => $file,
            'application_type' => 'Pendaftaran Baru',
        ];

        $response = $this->post(route('membership.store'), $applicationData);

        $response->assertSessionHasErrors(['transfer_proof']);
    }

    public function test_can_view_success_page(): void
    {
        $response = $this->get(route('membership.success'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page
            ->component('membership-success')
        );
    }
}