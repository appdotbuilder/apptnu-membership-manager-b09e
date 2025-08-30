import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function MembershipSuccess() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
            <Head title="Aplikasi Berhasil Dikirim - APPTNU" />
            
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <Card className="text-center">
                    <CardHeader>
                        <div className="text-6xl mb-4">✅</div>
                        <CardTitle className="text-3xl text-green-600 mb-2">
                            Aplikasi Berhasil Dikirim!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg text-gray-700">
                            Terima kasih telah mengirimkan aplikasi keanggotaan APPTNU.
                        </p>
                        <p className="text-gray-600">
                            Aplikasi Anda telah berhasil diterima dan akan diproses oleh tim admin kami. 
                            Anda akan mendapatkan konfirmasi lebih lanjut melalui email yang telah didaftarkan.
                        </p>
                        
                        <div className="bg-blue-50 p-4 rounded-lg mt-6">
                            <h3 className="font-semibold text-blue-800 mb-2">📋 Langkah Selanjutnya:</h3>
                            <ul className="text-left text-blue-700 space-y-1">
                                <li>• Tim admin akan memverifikasi dokumen yang diunggah</li>
                                <li>• Proses verifikasi membutuhkan waktu 3-5 hari kerja</li>
                                <li>• Anda akan mendapat email konfirmasi status aplikasi</li>
                                <li>• Jika disetujui, sertifikat keanggotaan akan dikirimkan</li>
                            </ul>
                        </div>

                        <div className="pt-6 space-y-3">
                            <Link href={route('membership.create')}>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Buat Aplikasi Baru
                                </Button>
                            </Link>
                            
                            <p className="text-sm text-gray-500">
                                Untuk pertanyaan lebih lanjut, hubungi admin APPTNU
                            </p>
                        </div>
                    </CardContent>
                </Card>
                
                <div className="text-center mt-8 text-gray-600">
                    <p>📚 APPTNU - Asosiasi Perpustakaan Perguruan Tinggi Nahdlatul Ulama</p>
                </div>
            </div>
        </div>
    );
}