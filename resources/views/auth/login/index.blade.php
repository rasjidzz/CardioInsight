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
      <div class="col-sm-8">
        <div class="row text-center">
          <h1 id="title">Login Page</h1>
        </div>
        <div class="row">
          @if(session('success'))
              <div class="alert alert-success">
                  {{ session('success') }}
              </div>
          @endif
          {{-- FORM UNTUK LOGIN --}}
          <form id="loginForm" class="form" action="/login" method="POST">
            <!-- Login Form Fields -->
            @csrf
            <div class="form-floating mb-3">
              <input type="email" class="form-control @error('emailLogin') is-invalid @enderror" id="emailLogin" name="emailLogin" placeholder="name@example.com" autofocus required value="{{ old('emailLogin') }}">
              <label for="floatingInput">Email address</label>
              @error('emailLogin')
                  <div class="invalid-feedback">
                      {{ $message }}
                  </div>
              @enderror
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="passwordLogin" name="passwordLogin" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          {{-- FORM UNTUK REGISTER --}}
          <form id="registerForm" class="form" style="display:none;" method="POST" action="/register">
            @csrf
            <!-- Register Form Fields -->
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="fullname" name="fullname" placeholder="fullname" value="{{ old('fullname') }}">
                <label for="fullname">Full name</label>
                @error('fullname')
                    <div class="invalid-feedack">
                      {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="username" name="username" placeholder="username" value="{{ old('username') }}">
                <label for="username">Username</label>
                @error('username')
                    <div class="invalid-feedack">
                      {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="form-floating mb-3">
                <select class="form-select" id="gender" name="gender">
                    <option selected disabled>Select Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>
                <label for="gender">Gender</label>
                @error('gender')
                    <div class="invalid-feedack">
                        {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="form-floating mb-3">
                <input type="date" class="form-control" id="birthdate" name="birthdate" value="{{ old('birthdate') }}">
                <label for="birthdate">Date of Birth</label>
                @error('birthdate')
                    <div class="invalid-feedack">
                      {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" value="{{ old('email') }}">
              <label for="email">Email address</label>
              @error('email')
                  <div class="invalid-feedack">
                    {{ $message }}
                  </div>
              @enderror
          </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="phonenum" name="phonenum" placeholder="Phone Number" value="{{ old('phonenum') }}">
                <label for="phonenum">Phone Number</label>
                @error('phonenum')
                    <div class="invalid-feedack">
                      {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="passwordRegister" name="passwordRegister" placeholder="Password">
                <label for="password">Password</label>
                @error('passwordRegister')
                    <div class="invalid-feedack">
                      {{ $message }}
                    </div>
                @enderror
            </div>
            <button type="submit" class="btn btn-danger">Register</button>
          </form>    
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
      var registerForm = document.getElementById('registerForm');
      var title = document.getElementById('title');

      if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        title.textContent = 'Login Page';
        this.textContent = 'Switch to Sign Up';
      } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        title.textContent = 'Sign Up Page';
        this.textContent = 'Switch to Login';
      }
    });

  </script>
@endsection
