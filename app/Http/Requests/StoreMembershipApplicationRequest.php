<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMembershipApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'institution_name' => 'required|string|max:255',
            'head_librarian_name' => 'required|string|max:255',
            'head_librarian_phone' => 'required|string|max:20',
            'pic_name' => 'required|string|max:255',
            'pic_phone' => 'required|string|max:20',
            'institution_address' => 'required|string',
            'province' => 'required|in:Jawa Timur,Jawa Barat,Jawa Tengah',
            'institution_email' => 'required|email|max:255',
            'library_website_url' => 'nullable|url|max:255',
            'opac_url' => 'nullable|url|max:255',
            'onesearch_status' => 'required|in:belum,sudah',
            'book_collection_count' => 'required|integer|min:0',
            'accreditation_status' => 'required|in:akreditasi A,akreditasi B,belum akreditasi',
            'transfer_proof' => 'required|file|mimes:pdf,jpg,jpeg,png|max:5120', // 5MB max
            'application_type' => 'required|in:Pendaftaran Baru,Perpanjangan',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'institution_name.required' => 'Nama perguruan tinggi wajib diisi.',
            'head_librarian_name.required' => 'Nama kepala perpustakaan wajib diisi.',
            'head_librarian_phone.required' => 'No. HP/WhatsApp kepala perpustakaan wajib diisi.',
            'pic_name.required' => 'Nama PIC wajib diisi.',
            'pic_phone.required' => 'No. HP/WhatsApp PIC wajib diisi.',
            'institution_address.required' => 'Alamat institusi wajib diisi.',
            'province.required' => 'Provinsi wajib dipilih.',
            'province.in' => 'Provinsi yang dipilih tidak valid.',
            'institution_email.required' => 'Email institusi wajib diisi.',
            'institution_email.email' => 'Format email tidak valid.',
            'library_website_url.url' => 'URL website perpustakaan tidak valid.',
            'opac_url.url' => 'URL OPAC/Digital Library tidak valid.',
            'onesearch_status.required' => 'Status koneksi Indonesia OneSearch wajib dipilih.',
            'book_collection_count.required' => 'Jumlah koleksi buku wajib diisi.',
            'book_collection_count.integer' => 'Jumlah koleksi buku harus berupa angka.',
            'book_collection_count.min' => 'Jumlah koleksi buku tidak boleh negatif.',
            'accreditation_status.required' => 'Status akreditasi wajib dipilih.',
            'transfer_proof.required' => 'Bukti transfer wajib diunggah.',
            'transfer_proof.file' => 'File yang diunggah tidak valid.',
            'transfer_proof.mimes' => 'File harus berformat PDF, JPG, JPEG, atau PNG.',
            'transfer_proof.max' => 'Ukuran file maksimal 5MB.',
            'application_type.required' => 'Jenis aplikasi wajib dipilih.',
            'application_type.in' => 'Jenis aplikasi yang dipilih tidak valid.',
        ];
    }
}