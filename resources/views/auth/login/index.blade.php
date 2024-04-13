@extends('layouts.auth')

@section('container')
  <div class="container-fluid fullscreen">
    <div class="row">
      <div class="col-sm-4 text-center">
        <div class="row bg1">
          <h1>
            Foto
          </h1>          
        </div>
      </div>
      {{-- <div class="col-sm-8 text-center">
        <h1>
          Login Page
        </h1>
      </div> --}}
      {{-- <div class="container"> --}}
        <div class="col-sm-8 text-center">
          <h1 id="title">Login Page</h1>
          <form id="loginForm" class="form">
            <!-- Login Form Fields -->
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button type="submit">Login</button>
          </form>
          <form id="signupForm" class="form" style="display:none;">
            <!-- Signup Form Fields -->
            <input type="text" placeholder="Username">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button type="submit">Sign Up</button>
          </form>
          <button id="toggleBtn">Switch to Sign Up</button>
        </div>
      </div>
  </div>

  <style>
    .bg1 {
      background-image: url('Assets/background.png'); /* Ganti 'Assets/background.png' dengan path ke gambar yang ingin Anda gunakan */
      background-size: cover;
      background-position: center;
      height: 100vh;
      /* Tambahan gaya CSS lainnya sesuai kebutuhan */
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form {
      margin-top: 20px;
    }

    button {
      margin-top: 10px;
    }
    </style>

    <script>
      document.getElementById('toggleBtn').addEventListener('click', function() {
        var loginForm = document.getElementById('loginForm');
        var signupForm = document.getElementById('signupForm');
        var title = document.getElementById('title');

        if (loginForm.style.display === 'none') {
          loginForm.style.display = 'block';
          signupForm.style.display = 'none';
          title.textContent = 'Login Page';
          this.textContent = 'Switch to Sign Up';
        } else {
          loginForm.style.display = 'none';
          signupForm.style.display = 'block';
          title.textContent = 'Sign Up Page';
          this.textContent = 'Switch to Login';
        }
      });

    </script>
@endsection()