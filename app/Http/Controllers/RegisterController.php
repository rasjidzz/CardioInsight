<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    // public function store(Request $request){
    //     $validatedData = $request->validate([
    //         'emailRegister' => 'required|email:dns|unique:users,email',
    //         'fullname' => 'required',
    //         'username' => 'required|unique:users,username',
    //         'phonenum' => 'required',
    //         'passwordRegister' => 'required|min:4',
    //     ], [
    //         'emailRegister.required' => 'Email is required.',
    //         'emailRegister.email' => 'Invalid email format.',
    //         'emailRegister.unique' => 'Email has already been taken.',
    //         'fullname.required' => 'Full name is required.',
    //         'username.required' => 'Username is required.',
    //         'username.unique' => 'Username has already been taken.',
    //         'phonenum.required' => 'Phone number is required.',
    //         'passwordRegister.required' => 'Password is required.',
    //         'passwordRegister.min' => 'Password must be at least :min characters.',
    //     ]);

    //     $validatedData['passwordRegister'] = bcrypt($validatedData['passwordRegister']);
    //     User::create($validatedData);
    //     return redirect('/login')->with('success', 'Registration successful! Please login.');
    // }

    public function store(Request $request){
        $validatedData = $request->validate([
            'email' => 'required|email:dns|unique:users,email',
            'fullname' => 'required',
            'username' => 'required|unique:users,username',
            'phonenum' => 'required',
            'passwordRegister' => 'required|min:4',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email format.',
            'email.unique' => 'Email has already been taken.',
            'fullname.required' => 'Full name is required.',
            'username.required' => 'Username is required.',
            'username.unique' => 'Username has already been taken.',
            'phonenum.required' => 'Phone number is required.',
            'passwordRegister.required' => 'Password is required.',
            'passwordRegister.min' => 'Password must be at least :min characters.',
        ]);
    
        $validatedData['password'] = bcrypt($validatedData['passwordRegister']); // Perhatikan bahwa di sini kami menggunakan 'password' daripada 'passwordRegister'
        unset($validatedData['passwordRegister']); // Kami tidak ingin menyimpan 'passwordRegister' ke dalam database
    
        User::create($validatedData);
        return redirect('/login')->with('success', 'Registration successful! Please login.');
    }
    
}
