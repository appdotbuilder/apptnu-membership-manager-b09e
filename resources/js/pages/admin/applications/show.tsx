import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface MembershipApplication {
    id: number;
    institution_name: string;
    head_librarian_name: string;
    head_librarian_phone: string;
    pic_name: string;
    pic_phone: string;
    institution_address: string;
    province: string;
    institution_email: string;
    library_website_url: string | null;
    opac_url: string | null;
    onesearch_status: string;
    book_collection_count: number;
    accreditation_status: string;
    transfer_proof_path: string;
    application_type: string;
    created_at: string;
    updated_at: string;
}

interface Props {
    application: MembershipApplication;
    [key: string]: unknown;
}

export default function ApplicationShow({ application }: Props) {
    const getApplicationTypeBadge = (type: string) => {
        if (type === 'Pendaftaran Baru') {
            return <Badge className="bg-green-100 text-green-800">Pendaftaran Baru</Badge>;
        }
        return <Badge className="bg-blue-100 text-blue-800">Perpanjangan</Badge>;
    };

    const getStatusBadge = (status: string) => {
        if (status === 'sudah') {
            return <Badge className="bg-green-100 text-green-800">Sudah</Badge>;
        }
        return <Badge className="bg-gray-100 text-gray-800">Belum</Badge>;
    };

    const getAccreditationBadge = (status: string) => {
        switch (status) {
            case 'akreditasi A':
                return <Badge className="bg-green-100 text-green-800">Akreditasi A</Badge>;
            case 'akreditasi B':
                return <Badge className="bg-blue-100 text-blue-800">Akreditasi B</Badge>;
            default:
                return <Badge className="bg-gray-100 text-gray-800">Belum Akreditasi</Badge>;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('id-ID').format(num);
    };

    return (
        <AppLayout>
            <Head title={`Detail Aplikasi #${application.id}`} />
            
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Detail Aplikasi Keanggotaan</h1>
                        <p className="text-gray-600">ID: #{application.id}</p>
                    </div>
                    <Link href={route('admin.applications.index')}>
                        <Button variant="outline">
                            ← Kembali ke Daftar
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Information */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Institution Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    🏛️ Informasi Institusi
                                    {getApplicationTypeBadge(application.application_type)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Nama Perguruan Tinggi</label>
                                    <p className="text-lg font-semibold">{application.institution_name}</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Provinsi</label>
                                        <p>{application.province}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Email Institusi</label>
                                        <p>{application.institution_email}</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Alamat Lengkap</label>
                                    <p className="whitespace-pre-wrap">{application.institution_address}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>👥 Informasi Kontak</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-medium mb-2">Kepala Perpustakaan</h4>
                                        <div className="space-y-2">
                                            <p><span className="text-gray-500">Nama:</span> {application.head_librarian_name}</p>
                                            <p><span className="text-gray-500">No. HP/WhatsApp:</span> {application.head_librarian_phone}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">PIC (Penanggung Jawab)</h4>
                                        <div className="space-y-2">
                                            <p><span className="text-gray-500">Nama:</span> {application.pic_name}</p>
                                            <p><span className="text-gray-500">No. HP/WhatsApp:</span> {application.pic_phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Library Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>📚 Informasi Perpustakaan</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Jumlah Koleksi Buku</label>
                                        <p className="text-lg font-semibold">{formatNumber(application.book_collection_count)} eksemplar</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Status Akreditasi</label>
                                        <div className="mt-1">
                                            {getAccreditationBadge(application.accreditation_status)}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Repository terhubung Indonesia OneSearch</label>
                                    <div className="mt-1">
                                        {getStatusBadge(application.onesearch_status)}
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-3">
                                    <h4 className="font-medium">URL Website & Sistem</h4>
                                    
                                    {application.library_website_url && (
                                        <div>
                                            <label className="text-sm font-medium text-gray-500">Website Perpustakaan</label>
                                            <p>
                                                <a 
                                                    href={application.library_website_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 underline"
                                                >
                                                    {application.library_website_url}
                                                </a>
                                            </p>
                                        </div>
                                    )}

                                    {application.opac_url && (
                                        <div>
                                            <label className="text-sm font-medium text-gray-500">OPAC/Digital Library</label>
                                            <p>
                                                <a 
                                                    href={application.opac_url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 underline"
                                                >
                                                    {application.opac_url}
                                                </a>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Application Status */}
                        <Card>
                            <CardHeader>
                                <CardTitle>📄 Status Aplikasi</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Jenis Aplikasi</label>
                                    <div className="mt-1">
                                        {getApplicationTypeBadge(application.application_type)}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Tanggal Pengajuan</label>
                                    <p className="font-medium">{formatDate(application.created_at)}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-gray-500">Terakhir Diperbarui</label>
                                    <p>{formatDate(application.updated_at)}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Transfer Proof */}
                        <Card>
                            <CardHeader>
                                <CardTitle>💳 Bukti Transfer</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600">
                                        Bukti transfer keanggotaan yang diunggah
                                    </p>
                                    
                                    <Link 
                                        href={route('admin.applications.download', application.id)}
                                        className="block"
                                    >
                                        <Button className="w-full bg-green-600 hover:bg-green-700">
                                            📥 Download Bukti Transfer
                                        </Button>
                                    </Link>
                                    
                                    <p className="text-xs text-gray-500">
                                        File: {application.transfer_proof_path.split('/').pop()}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}