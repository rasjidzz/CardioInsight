import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/LandingPage";

function layout() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
                    <Routes>
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default layout;
