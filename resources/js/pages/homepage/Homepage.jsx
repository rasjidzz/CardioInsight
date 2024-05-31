import React from 'react';
import MainLayout from '../../layout/MainLayout';
import Footer from '../../components/Footer';

function HomePage() {
    const userName = "Nama User"; // Ganti dengan nama user sebenarnya

    return (
        <MainLayout userName={userName}>
            <div className="min-h-screen ">
                
                <h1 className="text-2xl font-bold mb-4">Selamat Datang di Halaman Utama</h1>
                <p className="mb-4">
                    Ini adalah konten halaman utama yang bisa di-scroll ke bawah. Anda bisa menambahkan lebih banyak konten di sini.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                    <p>Konten panjang di sini...</p>
                </div>
            </div>

        </MainLayout>
    );
}

export default HomePage;
