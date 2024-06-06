<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Login'
        ];
        return view('auth.login.index', $data);
    }
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'emailLogin' => 'required|email:dns,email',
            'passwordLogin' => 'required',
        ]);

        $credentials['email'] = $credentials['emailLogin'];
        unset($credentials['emailLogin']);

        $credentials['password'] = $credentials['passwordLogin'];
        unset($credentials['passwordLogin']);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // return redirect()->intended('/dashboard');
            return "masuk berhasil";
        }
        return back()->with('loginError', 'Login Failed');
    }
}
