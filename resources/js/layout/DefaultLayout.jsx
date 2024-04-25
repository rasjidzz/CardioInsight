import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DefaultLayout({children}) {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col min-h-[100vh] overflow-x-hidden">
                {children}
            </div>
            <Footer/>
        </>

    );
}

export default DefaultLayout;
