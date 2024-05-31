import React, { useState } from "react";
import lobby from "../../assets/lobby.png";
import logo2 from "../../assets/logo2.png";
import Button from "@/components/Button";
import { Inertia } from "@inertiajs/inertia";

function Auth() {
    const [isLogin, setIsLogin] = useState(true); // State untuk toggle antara login dan sign up

    // Fungsi untuk mengubah state
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleToHome = () =>{
        Inertia.visit("/homepage");
    }

    return (
        <div className="min-h-screen flex items-stretch">
            <div className="flex md:grid-cols-2 w-full">
                {/* Kolom untuk gambar */}
                <div className="relative basis-[35%]">
                    <div className="w-full h-screen overflow-hidden">
                        <img
                            src={lobby}
                            alt="Lobby"
                            className="w-full h-full object-cover object-left"
                        />
                    </div>
                    <div className="absolute left-10 top-10">
                        <img
                            src={logo2}
                            alt="Overlay"
                            className="w-full lg:w-full md:w-96 sm:w-72"
                        />
                    </div>
                </div>

                {/* Kolom untuk form */}
                <div className="flex-1 flex flex-col justify-center p-8 bg-white shadow-lg">
                    <div className="mb-6 flex">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 text-lg font-bold py-2 px-4 ${
                                isLogin
                                    ? "bg-custom-green text-white"
                                    : "bg-gray-300 text-gray-700"
                            }`}
                        >
                            Log in
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 text-lg font-bold py-2 px-4 ${
                                !isLogin
                                    ? "bg-custom-green text-white"
                                    : "bg-gray-300 text-gray-700"
                            }`}
                        >
                            Sign Up
                        </button>
                    </div>
                    {isLogin ? (
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="Fullname"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your Full Name"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <Button text = "Log in" onClick = {handleToHome}>Log in</Button>
                        </form>
                    ) : (
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="Fullname"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your Full Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="Username"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Gender
                                </label>
                                <select
                                    name="gender"
                                    className="mt-1 block w-full p-2 border bg-white rounded-md shadow-sm "
                                >
                                    <option value="" disabled selected hidden>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="YYYY-MM-DD"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    name="Phonenumber"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Confirm your password"
                                />
                            </div>

                            <Button text = "Sign Up" onClick = {handleToHome}>Sign Up</Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Auth;
