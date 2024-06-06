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
                        <div className="text-white w-full px-4">
                            <h1 className="text-[90px] font-semibold">
                                Protect your cardiovascular
                            </h1>
                            <p className="text-sm">
                                Penyakit kardiovaskular adalah kelompok kondisi
                                yang melibatkan jantung dan pembuluh darah, yang
                                dapat menyebabkan gangguan dalam aliran darah ke
                                berbagai bagian tubuh. Kondisi-kondisi ini
                                seringkali terjadi akibat penumpukan plak di
                                dalam pembuluh darah (aterosklerosis), yang
                                dapat menyebabkan penyempitan atau penyumbatan
                                pembuluh darah
                            </p>
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
