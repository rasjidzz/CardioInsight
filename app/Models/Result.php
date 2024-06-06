<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cholesterol_level',
        'glucose_level',
        'systole',
        'diastole',
        'weight',
        'height',
        'is_smoking',
        'is_exercising',
        'prediction'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
