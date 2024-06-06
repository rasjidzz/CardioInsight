import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import heart from "../assets/Heart.png";

function MainLayout({ children, userName }) {
    return (
        <div>
            <Navbar userName={userName} />
            <div>
                <div className="flex px-4 bg-custom-green justify-end rounded">
                    <div className="flex items-center justify-start w-full">
                        {/* Tambahkan judul dan isi di sini */}
                        <div className="text-white w-full">
                            <h2 className="text-lg font-semibold">Judul Konten</h2>
                            <p>Isi konten yang menjelaskan tentang gambar hati.</p>
                        </div>
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
