<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
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

    public function getToken()
    {
        $token = csrf_token();
        return response()->json($token);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email:dns|unique:users,email',
            'fullname' => 'required',
            'username' => 'required|unique:users,username',
            'phonenum' => 'required',
            'passwordRegister' => 'required|min:4',
            'gender' => 'required',
            'birthdate' => 'required',
            'user_role' => 'required'
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
            'gender.required' => 'Gender is required.',
            'birthdate.required' => 'Date of Birth is required',
            'user_role.required' => 'User Role is required'
        ]);

        $validatedData['password'] = bcrypt($validatedData['passwordRegister']);
        unset($validatedData['passwordRegister']);

        // return response()->json($validatedData);
        $newUser = User::create($validatedData);
        event(new UserRegistered($newUser));
        return response()->json($newUser);
        // return redirect('/login')->with('success', 'Registration successful! Please login.');
    }
}
