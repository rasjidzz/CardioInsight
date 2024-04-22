@extends('layouts.auth')

@section('container')
  <div class="container-fluid fullscreen">
    <div class="row">
      <div class="col-sm-4 text-center">
        <div class="row bg1">
          <h1>
            Cardio Insight
          </h1>          
          {{-- TAMBAHIN LOGO CARDIO INSIGHT --}}
        </div>
      </div>
      <div class="col-sm-8 text-center">
        <div class="row">
          <h1 id="title">Login Page</h1>
        </div>
        <div class="row">
          <form id="loginForm" class="form">
            <!-- Login Form Fields -->
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <button type="button" class="btn btn-primary">Login</button>
          </form>
          <form id="signupForm" class="form" style="display:none;">
            <!-- Signup Form Fields -->
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="fullname" class="form-control" id="floatingInput" placeholder="fullname">
              <label for="floatingInput">Full name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="phonenum" class="form-control" id="floatingInput" placeholder="Phone Number">
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <button type="button" class="btn btn-primary">Login</button>
          </form>
        </div>
        {{-- <button id="toggleBtn">Switch to Sign Up</button> --}}
        <div class="toggle-btn">
          <button id="toggleBtn" class="btn btn-link btn-toggle">Switch to Sign Up</button>
        </div>
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
@endsection
