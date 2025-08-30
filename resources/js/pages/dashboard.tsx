import { Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* APPTNU Applications Management */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                📋 Aplikasi Keanggotaan
                            </CardTitle>
                            <CardDescription>
                                Kelola aplikasi keanggotaan APPTNU
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600">
                                    Lihat dan kelola semua aplikasi pendaftaran dan perpanjangan keanggotaan
                                </p>
                                <Link href={route('admin.applications.index')}>
                                    <Button className="w-full">
                                        Kelola Aplikasi
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Public Form Link */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                📚 Formulir Publik
                            </CardTitle>
                            <CardDescription>
                                Akses formulir aplikasi keanggotaan
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <p className="text-sm text-gray-600">
                                    Lihat formulir yang dapat diakses oleh calon anggota
                                </p>
                                <Link href={route('membership.create')}>
                                    <Button variant="outline" className="w-full">
                                        Lihat Formulir
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                📊 Statistik Cepat
                            </CardTitle>
                            <CardDescription>
                                Ringkasan aplikasi keanggotaan
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-blue-600">-</p>
                                    <p className="text-sm text-gray-600">Total Aplikasi</p>
                                </div>
                                <Link href={route('admin.applications.index')}>
                                    <Button variant="outline" className="w-full">
                                        Lihat Detail
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Welcome Section */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>🏛️ Selamat Datang di Admin Panel APPTNU</CardTitle>
                        <CardDescription>
                            Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Fitur Admin Panel:</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li>• Mengelola aplikasi keanggotaan baru</li>
                                    <li>• Memproses perpanjangan keanggotaan</li>
                                    <li>• Mengunduh bukti transfer pembayaran</li>
                                    <li>• Melihat detail lengkap setiap aplikasi</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Informasi Sistem:</h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li>• Formulir publik dapat diakses tanpa login</li>
                                    <li>• File bukti transfer tersimpan aman</li>
                                    <li>• Sistem mendukung format PDF, JPG, PNG</li>
                                    <li>• Paginasi otomatis untuk banyak data</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}