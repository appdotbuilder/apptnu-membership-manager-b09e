<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class SuccessController extends Controller
{
    /**
     * Show success page.
     */
    public function __invoke()
    {
        return Inertia::render('membership-success');
    }
}