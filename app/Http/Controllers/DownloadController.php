<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MembershipApplication;
use Illuminate\Support\Facades\Storage;

class DownloadController extends Controller
{
    /**
     * Download transfer proof file.
     */
    public function __invoke(MembershipApplication $application)
    {
        $filePath = storage_path('app/public/' . $application->transfer_proof_path);
        
        if (!file_exists($filePath)) {
            abort(404, 'File tidak ditemukan.');
        }
        
        return response()->download($filePath);
    }
}