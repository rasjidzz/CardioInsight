import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import profilePic from '../../js/assets/profile.jpg';
import Logo from "../../js/assets/logo2.png";

const userName = "Stevent"; // Deklarasi username

function Navbar() {
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
                <span className="text-white text-lg font-semibold">{userName}</span>
                <img src={profilePic} alt="Profile" className="w-14 h-14 rounded-full" />
            </div>
        </nav>
    );
}

export default Navbar;
