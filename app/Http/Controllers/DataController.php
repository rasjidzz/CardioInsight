<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class DataController extends Controller
{
    protected $userModel;
    public function __construct()
    {
        $this->userModel = new User();
    }

    public function getData()
    {
        $systol = 0;
        $diastol = 0;
        $bpm = 0;
        $gula = 0;
        $kolesterol = 0;
        $data = [
            'systol' => $systol,
            'diastol' => $diastol,
            'bpm' => $bpm,
            'gula' => $gula,
            'kolesterol' => $kolesterol
        ];
        return response()->json($data);
    }
    public function test()
    {
        // DATA DUMMY, KIRIM DRI FRONTEND
        $cholerstrolLevel = 2;
        $glucoseLevel = 2;
        $smoke = 0;
        $alcohol = 0;
        $physicalActive = 1;
        $beratBadan = 72;
        // DATA DUMMY, KIRIM DRI FRONTEND

        $user = $this->userModel->getUserbyUsername('rasjidzz');

        $fullname = $user->fullname;
        $birthdate = $user->birthdate;
        $umur = round(Carbon::parse($birthdate)->diffInDays(Carbon::now()));

        $data = [
            'fullname' => $fullname,
            'berat_badan' => $beratBadan,
            'umur' => $umur,
            'kolesterol' => $cholerstrolLevel,
            'glukosa' => $glucoseLevel,
            'Merokok' => $smoke,
            'Alkohol' => $alcohol,
            'Olaraga' => $physicalActive
        ];

        return response()->json($data);
    }
}
