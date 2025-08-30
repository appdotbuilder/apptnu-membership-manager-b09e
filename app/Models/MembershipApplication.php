<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\MembershipApplication
 *
 * @property int $id
 * @property string $institution_name
 * @property string $head_librarian_name
 * @property string $head_librarian_phone
 * @property string $pic_name
 * @property string $pic_phone
 * @property string $institution_address
 * @property string $province
 * @property string $institution_email
 * @property string|null $library_website_url
 * @property string|null $opac_url
 * @property string $onesearch_status
 * @property int $book_collection_count
 * @property string $accreditation_status
 * @property string $transfer_proof_path
 * @property string $application_type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication query()
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereAccreditationStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereApplicationType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereBookCollectionCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereHeadLibrarianName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereHeadLibrarianPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereInstitutionAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereInstitutionEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereInstitutionName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereLibraryWebsiteUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereOnesearchStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereOpacUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication wherePicName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication wherePicPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereTransferProofPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|MembershipApplication whereUpdatedAt($value)
 * @method static \Database\Factories\MembershipApplicationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class MembershipApplication extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'institution_name',
        'head_librarian_name',
        'head_librarian_phone',
        'pic_name',
        'pic_phone',
        'institution_address',
        'province',
        'institution_email',
        'library_website_url',
        'opac_url',
        'onesearch_status',
        'book_collection_count',
        'accreditation_status',
        'transfer_proof_path',
        'application_type',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'book_collection_count' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include new registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNewRegistrations($query)
    {
        return $query->where('application_type', 'Pendaftaran Baru');
    }

    /**
     * Scope a query to only include renewals.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRenewals($query)
    {
        return $query->where('application_type', 'Perpanjangan');
    }
}