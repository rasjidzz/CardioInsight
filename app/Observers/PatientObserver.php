<?php

namespace App\Observers;

use App\Models\Handle;
use App\Models\Patient;

class PatientObserver
{
    /**
     * Handle the Patient "created" event.
     */
    public function created(Patient $patient): void
    {
        // Membuat entri baru di tabel handles dengan patient_id yang sesuai
        // Handle::create([
        //     'patient_id' => $patient->id,
        //     // Anda dapat menetapkan nilai 'doctor_id' sesuai dengan logika aplikasi Anda
        // ]);
    }

    /**
     * Handle the Patient "updated" event.
     */
    public function updated(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Patient "deleted" event.
     */
    public function deleted(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Patient "restored" event.
     */
    public function restored(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Patient "force deleted" event.
     */
    public function forceDeleted(Patient $patient): void
    {
        //
    }
}
