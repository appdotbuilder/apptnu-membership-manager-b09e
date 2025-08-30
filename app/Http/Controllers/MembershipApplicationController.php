<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMembershipApplicationRequest;
use App\Models\MembershipApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MembershipApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applications = MembershipApplication::latest()
            ->paginate(10)
            ->withQueryString();
        
        return Inertia::render('admin/applications/index', [
            'applications' => $applications
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('membership-application');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMembershipApplicationRequest $request)
    {
        $validated = $request->validated();
        
        // Handle file upload
        if ($request->hasFile('transfer_proof')) {
            $file = $request->file('transfer_proof');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('transfer_proofs', $filename, 'public');
            $validated['transfer_proof_path'] = $path;
        }
        
        // Remove the transfer_proof from validated data since we've processed it
        unset($validated['transfer_proof']);
        
        MembershipApplication::create($validated);

        return redirect()->route('membership.success')
            ->with('success', 'Aplikasi keanggotaan berhasil dikirim!');
    }

    /**
     * Display the specified resource.
     */
    public function show(MembershipApplication $application)
    {
        return Inertia::render('admin/applications/show', [
            'application' => $application
        ]);
    }
}