import { Head } from "@inertiajs/react";
import React from "react";
import Footer from "../components/Footer";

function LandingLayout({ children }) {
    return (
        <div>
            <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default LandingLayout;
