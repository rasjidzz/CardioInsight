import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import heart from "../assets/Heart.png";

function MainLayout({ children, userName }) {
    return (
        <div>
            <Navbar userName={userName} />
            <div className="">
                <div className="flex px-4 bg-custom-green justify-end rounde">
                    <div>
                        
                    </div>
                    <div className="">
                        <img src={heart} alt="heart" className="" />
                    </div>
                </div>

            </div>
            <div className=" mx-auto p-8">{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
