import React from "react";
import lobby from "../../assets/loby.png"; // Pastikan path ini benar sesuai dengan struktur folder Anda
import logo2 from "../../assets/logo2.png";
import Button from "@/components/Button" // Pastikan path ini benar sesuai dengan struktur folder Anda

function Auth() {
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
                            className="w-full lg:w-full md:w-96 sm:w-72 "
                        />
                    </div>
                </div>

                {/* Kolom untuk form */}
                <div className="flex-1 flex flex-col justify-center p-8 bg-white shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="Enter your email"
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
                        <Button>Log in</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;
