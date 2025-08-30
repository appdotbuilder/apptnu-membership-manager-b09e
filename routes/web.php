<?php

use App\Http\Controllers\MembershipApplicationController;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\SuccessController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home page - APPTNU membership application
Route::get('/', [MembershipApplicationController::class, 'create'])->name('membership.create');
Route::post('/membership', [MembershipApplicationController::class, 'store'])->name('membership.store');
Route::get('/membership/success', SuccessController::class)->name('membership.success');

// Dashboard (requires authentication)
Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Admin panel for membership applications
Route::middleware(['auth'])->prefix('admin')->group(function () {
    Route::get('/applications', [MembershipApplicationController::class, 'index'])->name('admin.applications.index');
    Route::get('/applications/{application}', [MembershipApplicationController::class, 'show'])->name('admin.applications.show');
    Route::get('/applications/{application}/download', DownloadController::class)->name('admin.applications.download');
});

// Profile routes are handled by the existing auth routes
// Removed ProfileController references as they're already in auth.php

require __DIR__.'/auth.php';