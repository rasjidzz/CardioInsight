<?php 

namespace App\Http\Controllers;

class LoginController extends Controller{
    public function index(){
        $data = [
            'title' => 'Login'
        ];
        return view('auth.login.index', $data);
    }
}
