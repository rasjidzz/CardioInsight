import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import profilePic from '../../js/assets/profile.jpg';
import Logo from "../../js/assets/logo2.png";

const userName = "Stevent"; // Deklarasi username

function Navbar() {
    const handleSmallButton = () => {
        // Menampilkan alert dengan tombol Yes dan No
        if (window.confirm('Apakah Anda yakin ingin keluar?')) {
            // Jika user memilih Yes
            alert("Anda telah keluar.");
            // Tambahkan kode untuk logout atau navigasi ke halaman logout di sini
        } else {
            // Jika user memilih No
            alert("Pembatalan logout.");
        }
    };

    return (
        <nav className="bg-custom-green py-4 px-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={Logo} alt="Logo" className="w-40 h-auto" />
            </div>
            <div className="flex-1 flex justify-center space-x-10">
                <button onClick={() => Inertia.visit('/homepage')} className="text-white text-lg hover:underline font-sans">
                    Home
                </button>
                <button onClick={() => Inertia.visit('/result')} className="text-white text-lg hover:underline font-sans">
                    Result
                </button>
                <button onClick={() => Inertia.visit('/history')} className="text-white text-lg hover:underline font-sans">
                    History
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={handleSmallButton} className="text-white text-lg font-semibold hover:bg-red-700 rounded-md">
                    Log Out
                </button>
                <span className="text-white text-lg font-semibold">{userName}</span>
                <img src={profilePic} alt="Profile" className="w-14 h-14 rounded-full" />
            </div>
        </nav>
    );
}

export default Navbar;
