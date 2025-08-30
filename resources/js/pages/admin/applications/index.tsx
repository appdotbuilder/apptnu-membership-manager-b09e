import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface MembershipApplication {
    id: number;
    institution_name: string;
    head_librarian_name: string;
    province: string;
    application_type: string;
    created_at: string;
}

interface Props {
    applications: {
        data: MembershipApplication[];
        links: Array<{
            url: string | null;
            label: string;
            active: boolean;
        }>;
        current_page: number;
        last_page: number;
        total: number;
    };
    [key: string]: unknown;
}

export default function ApplicationsIndex({ applications }: Props) {
    const getApplicationTypeBadge = (type: string) => {
        if (type === 'Pendaftaran Baru') {
            return <Badge className="bg-green-100 text-green-800">Pendaftaran Baru</Badge>;
        }
        return <Badge className="bg-blue-100 text-blue-800">Perpanjangan</Badge>;
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

    return (
        <AppLayout>
            <Head title="Admin - Aplikasi Keanggotaan" />
            
            <div className="container mx-auto px-4 py-8">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-2xl">📋 Aplikasi Keanggotaan</CardTitle>
                                <p className="text-gray-600 mt-1">
                                    Kelola aplikasi keanggotaan APPTNU
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Total Aplikasi</p>
                                <p className="text-2xl font-bold text-blue-600">{applications.total}</p>
                            </div>
                        </div>
                    </CardHeader>
                    
                    <CardContent>
                        {applications.data.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">Belum ada aplikasi keanggotaan</p>
                            </div>
                        ) : (
                            <>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>ID</TableHead>
                                                <TableHead>Institusi</TableHead>
                                                <TableHead>Kepala Perpustakaan</TableHead>
                                                <TableHead>Provinsi</TableHead>
                                                <TableHead>Jenis</TableHead>
                                                <TableHead>Tanggal</TableHead>
                                                <TableHead>Aksi</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {applications.data.map((application) => (
                                                <TableRow key={application.id}>
                                                    <TableCell className="font-medium">
                                                        #{application.id}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="max-w-xs truncate">
                                                            {application.institution_name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        {application.head_librarian_name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {application.province}
                                                    </TableCell>
                                                    <TableCell>
                                                        {getApplicationTypeBadge(application.application_type)}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="text-sm">
                                                            {formatDate(application.created_at)}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link
                                                            href={route('admin.applications.show', application.id)}
                                                        >
                                                            <Button size="sm" variant="outline">
                                                                Detail
                                                            </Button>
                                                        </Link>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>

                                {/* Pagination */}
                                {applications.last_page > 1 && (
                                    <div className="flex justify-center space-x-2 mt-6">
                                        {applications.links.map((link, index) => {
                                            if (link.url === null) {
                                                return (
                                                    <Button
                                                        key={index}
                                                        variant="outline"
                                                        size="sm"
                                                        disabled
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                );
                                            }

                                            return (
                                                <Link key={index} href={link.url}>
                                                    <Button
                                                        variant={link.active ? "default" : "outline"}
                                                        size="sm"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}