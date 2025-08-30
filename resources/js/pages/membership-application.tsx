import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';



export default function MembershipApplication() {
    const { data, setData, post, processing, errors } = useForm({
        institution_name: '',
        head_librarian_name: '',
        head_librarian_phone: '',
        pic_name: '',
        pic_phone: '',
        institution_address: '',
        province: '',
        institution_email: '',
        library_website_url: '',
        opac_url: '',
        onesearch_status: '',
        book_collection_count: '',
        accreditation_status: '',
        transfer_proof: null as File | null,
        application_type: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('membership.store'), {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('transfer_proof', e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
            <Head title="Aplikasi Keanggotaan APPTNU" />
            
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        📚 APPTNU
                    </h1>
                    <p className="text-xl text-gray-700 mb-2">
                        Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama
                    </p>
                    <p className="text-lg text-gray-600">
                        Formulir Pendaftaran & Perpanjangan Keanggotaan
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">Formulir Aplikasi Keanggotaan</CardTitle>
                        <CardDescription className="text-center">
                            Silakan lengkapi formulir di bawah ini untuk mendaftar sebagai anggota atau memperpanjang keanggotaan APPTNU
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Institution Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Informasi Institusi</h3>
                                
                                <div>
                                    <Label htmlFor="institution_name">Nama Perguruan Tinggi *</Label>
                                    <Input
                                        id="institution_name"
                                        type="text"
                                        value={data.institution_name}
                                        onChange={e => setData('institution_name', e.target.value)}
                                        className="mt-1"
                                        placeholder="Masukkan nama perguruan tinggi"
                                    />
                                    {errors.institution_name && (
                                        <p className="text-red-600 text-sm mt-1">{errors.institution_name}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="head_librarian_name">Nama Kepala Perpustakaan *</Label>
                                        <Input
                                            id="head_librarian_name"
                                            type="text"
                                            value={data.head_librarian_name}
                                            onChange={e => setData('head_librarian_name', e.target.value)}
                                            className="mt-1"
                                            placeholder="Nama kepala perpustakaan"
                                        />
                                        {errors.head_librarian_name && (
                                            <p className="text-red-600 text-sm mt-1">{errors.head_librarian_name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="head_librarian_phone">No. HP/WhatsApp Kepala Perpustakaan *</Label>
                                        <Input
                                            id="head_librarian_phone"
                                            type="tel"
                                            value={data.head_librarian_phone}
                                            onChange={e => setData('head_librarian_phone', e.target.value)}
                                            className="mt-1"
                                            placeholder="08xxxxxxxxxx"
                                        />
                                        {errors.head_librarian_phone && (
                                            <p className="text-red-600 text-sm mt-1">{errors.head_librarian_phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="pic_name">Nama PIC (Penanggung Jawab) *</Label>
                                        <Input
                                            id="pic_name"
                                            type="text"
                                            value={data.pic_name}
                                            onChange={e => setData('pic_name', e.target.value)}
                                            className="mt-1"
                                            placeholder="Nama penanggung jawab"
                                        />
                                        {errors.pic_name && (
                                            <p className="text-red-600 text-sm mt-1">{errors.pic_name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="pic_phone">No. HP/WhatsApp PIC *</Label>
                                        <Input
                                            id="pic_phone"
                                            type="tel"
                                            value={data.pic_phone}
                                            onChange={e => setData('pic_phone', e.target.value)}
                                            className="mt-1"
                                            placeholder="08xxxxxxxxxx"
                                        />
                                        {errors.pic_phone && (
                                            <p className="text-red-600 text-sm mt-1">{errors.pic_phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="institution_address">Alamat Lengkap Institusi *</Label>
                                    <Textarea
                                        id="institution_address"
                                        value={data.institution_address}
                                        onChange={e => setData('institution_address', e.target.value)}
                                        className="mt-1"
                                        placeholder="Masukkan alamat lengkap institusi"
                                        rows={3}
                                    />
                                    {errors.institution_address && (
                                        <p className="text-red-600 text-sm mt-1">{errors.institution_address}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="province">Provinsi *</Label>
                                        <Select value={data.province} onValueChange={value => setData('province', value)}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Pilih provinsi" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                                                <SelectItem value="Jawa Barat">Jawa Barat</SelectItem>
                                                <SelectItem value="Jawa Tengah">Jawa Tengah</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.province && (
                                            <p className="text-red-600 text-sm mt-1">{errors.province}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="institution_email">Email Institusi *</Label>
                                        <Input
                                            id="institution_email"
                                            type="email"
                                            value={data.institution_email}
                                            onChange={e => setData('institution_email', e.target.value)}
                                            className="mt-1"
                                            placeholder="email@institusi.ac.id"
                                        />
                                        {errors.institution_email && (
                                            <p className="text-red-600 text-sm mt-1">{errors.institution_email}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Library Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Informasi Perpustakaan</h3>
                                
                                <div>
                                    <Label htmlFor="library_website_url">URL Website Perpustakaan</Label>
                                    <Input
                                        id="library_website_url"
                                        type="url"
                                        value={data.library_website_url}
                                        onChange={e => setData('library_website_url', e.target.value)}
                                        className="mt-1"
                                        placeholder="https://perpustakaan.institusi.ac.id"
                                    />
                                    {errors.library_website_url && (
                                        <p className="text-red-600 text-sm mt-1">{errors.library_website_url}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="opac_url">URL Otomasi/OPAC/Digital Library</Label>
                                    <Input
                                        id="opac_url"
                                        type="url"
                                        value={data.opac_url}
                                        onChange={e => setData('opac_url', e.target.value)}
                                        className="mt-1"
                                        placeholder="https://opac.institusi.ac.id"
                                    />
                                    {errors.opac_url && (
                                        <p className="text-red-600 text-sm mt-1">{errors.opac_url}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label>Repository terhubung ke Indonesia OneSearch? *</Label>
                                        <Select value={data.onesearch_status} onValueChange={value => setData('onesearch_status', value)}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Pilih status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="belum">Belum</SelectItem>
                                                <SelectItem value="sudah">Sudah</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.onesearch_status && (
                                            <p className="text-red-600 text-sm mt-1">{errors.onesearch_status}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label htmlFor="book_collection_count">Jumlah Koleksi Buku (Eksemplar) *</Label>
                                        <Input
                                            id="book_collection_count"
                                            type="number"
                                            min="0"
                                            value={data.book_collection_count}
                                            onChange={e => setData('book_collection_count', e.target.value)}
                                            className="mt-1"
                                            placeholder="0"
                                        />
                                        {errors.book_collection_count && (
                                            <p className="text-red-600 text-sm mt-1">{errors.book_collection_count}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label>Status Akreditasi *</Label>
                                    <Select value={data.accreditation_status} onValueChange={value => setData('accreditation_status', value)}>
                                        <SelectTrigger className="mt-1">
                                            <SelectValue placeholder="Pilih status akreditasi" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="akreditasi A">Akreditasi A</SelectItem>
                                            <SelectItem value="akreditasi B">Akreditasi B</SelectItem>
                                            <SelectItem value="belum akreditasi">Belum Akreditasi</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.accreditation_status && (
                                        <p className="text-red-600 text-sm mt-1">{errors.accreditation_status}</p>
                                    )}
                                </div>
                            </div>

                            {/* Application Type & Payment */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Jenis Aplikasi & Pembayaran</h3>
                                
                                <div>
                                    <Label>Pilih Jenis Aplikasi *</Label>
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                id="new_registration"
                                                name="application_type"
                                                value="Pendaftaran Baru"
                                                checked={data.application_type === 'Pendaftaran Baru'}
                                                onChange={(e) => setData('application_type', e.target.value)}
                                                className="h-4 w-4"
                                            />
                                            <Label htmlFor="new_registration">Pendaftaran Baru</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                id="renewal"
                                                name="application_type"
                                                value="Perpanjangan"
                                                checked={data.application_type === 'Perpanjangan'}
                                                onChange={(e) => setData('application_type', e.target.value)}
                                                className="h-4 w-4"
                                            />
                                            <Label htmlFor="renewal">Perpanjangan</Label>
                                        </div>
                                    </div>
                                    {errors.application_type && (
                                        <p className="text-red-600 text-sm mt-1">{errors.application_type}</p>
                                    )}
                                </div>

                                <div>
                                    <Label htmlFor="transfer_proof">Upload Bukti Transfer Keanggotaan *</Label>
                                    <Input
                                        id="transfer_proof"
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className="mt-1"
                                    />
                                    <p className="text-sm text-gray-600 mt-1">
                                        Format yang diterima: PDF, JPG, JPEG, PNG (Maksimal 5MB)
                                    </p>
                                    {errors.transfer_proof && (
                                        <p className="text-red-600 text-sm mt-1">{errors.transfer_proof}</p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 border-t">
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Mengirim Aplikasi...
                                        </>
                                    ) : (
                                        'Kirim Aplikasi Keanggotaan'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-600">
                    <p>© 2024 APPTNU - Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama</p>
                    <p className="mt-2">
                        <a href="/login" className="text-blue-600 hover:text-blue-800">
                            Admin Login →
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}