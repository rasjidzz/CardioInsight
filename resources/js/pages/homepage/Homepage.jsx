import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";

function HomePage() {
    const userName = "Nama User"; // Ganti dengan nama user sebenarnya
    const [showForm1, setShowForm1] = useState(true);
    const [showForm2, setShowForm2] = useState(false);
    const [showForm3, setShowForm3] = useState(false);
    const [showForm4, setShowForm4] = useState(false);

    const handleButtonClick = (buttonNumber) => {
        setShowForm1(false);
        setShowForm2(false);
        setShowForm3(false);
        setShowForm4(false);
        if (buttonNumber === 1) {
            setShowForm1(true);
        } else if (buttonNumber === 2) {
            setShowForm2(true);
        } else if (buttonNumber === 3) {
            setShowForm3(true);
        } else if (buttonNumber == 4) {
            setShowForm4(true);
        }
    };

    const handleNextButtonClickForm2 = () => {
        setShowForm2(false);
        setShowForm3(true);
    };

    const handleNextButtonClickForm1 = () => {
        setShowForm1(false);
        setShowForm2(true);
    };

    const handleNextButtonClickForm3 = () => {
        setShowForm1(false);
        setShowForm2(false);
        setShowForm3(false);
        setShowForm4(true);
    };

    // Untuk Tombol yang ada di tengah dari 1 sampai 4
    return (
        <MainLayout userName={userName}>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">
                    Press start to scan your body
                </h1>
                <div className="flex space-x-4 mb-4">
                    <button
                        className="w-12 h-12 bg-custom-green text-white rounded-full flex items-center justify-center"
                        onClick={() => handleButtonClick(1)}
                    >
                        1
                    </button>
                    <button
                        className="w-12 h-12 bg-custom-green text-white rounded-full flex items-center justify-center"
                        onClick={() => handleButtonClick(2)}
                    >
                        2
                    </button>
                    <button
                        className="w-12 h-12 bg-custom-green text-white rounded-full flex items-center justify-center"
                        onClick={() => handleButtonClick(3)}
                    >
                        3
                    </button>
                    <button
                        className="w-12 h-12 bg-custom-green text-white rounded-full flex items-center justify-center"
                        onClick={() => handleButtonClick(4)}
                    >
                        4
                    </button>
                </div>

                {/* Ketika di tekan pada tombol 1 maka akan keluar form 1 yang ada di bawah ini */}
                {showForm1 && (
                    <div className="bg-white p-6 rounded-lg mb-4 max-w-lg w-full">
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="bloodPressure"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Chol
                                </label>
                                <input
                                    type="text"
                                    id="bloodPressure"
                                    name="bloodPressure"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Mg/DL"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNextButtonClickForm1}
                                className="mt-2 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                )}

                {/* Ketika di tekan pada tombol 2 maka akan keluar form 2 yang ada di bawah ini */}
                {showForm2 && (
                    <div className="bg-white p-6 rounded-lg mb-4 max-w-lg w-full">
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="bloodPressure"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Tekanan Darah
                                </label>
                                <input
                                    type="text"
                                    id="bloodPressure"
                                    name="bloodPressure"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Masukkan Tekanan Darah"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNextButtonClickForm2}
                                className="mt-2 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                )}

                {/* Ketika di tekan pada tombol 3 maka akan keluar form 3 yang ada di bawah ini */}
                {showForm3 && (
                    <div className="bg-white p-6 rounded-lg mb-4 max-w-lg w-full">
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="bloodPressure"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Glucose
                                </label>
                                <input
                                    type="text"
                                    id="bloodPressure"
                                    name="bloodPressure"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Mg/DL"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNextButtonClickForm3}
                                className="mt-2 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Next
                            </button>
                        </form>
                    </div>
                )}

                {/* Ketika di tekan pada tombol 4 maka akan keluar form 4 yang ada di bawah ini */}
                {showForm4 && (
                    <div className="bg-white p-6 rounded-lg mb-4 max-w-lg w-full">
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="height"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Height
                                </label>
                                <input
                                    type="text"
                                    id="height"
                                    name="height"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Height (cm)"
                                />
                                <label
                                    htmlFor="weight"
                                    className="block font-sans font-semibold text-lg text-gray-700 mt-5"
                                >
                                    Weight
                                </label>
                                <input
                                    type="text"
                                    id="weight"
                                    name="weight"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="weight (kg)"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="smoke"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Do you smoke?
                                </label>
                                <select
                                    id="smoke"
                                    name="smoke"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="sport"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Are you active in sports or activities?
                                </label>
                                <select
                                    id="sport"
                                    name="sport"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="alcohol"
                                    className="block font-sans font-semibold text-lg text-gray-700"
                                >
                                    Do you consume alcohol?
                                </label>
                                <select
                                    id="alcohol"
                                    name="alcohol"
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick=""
                                className="mt-2 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Go to see result
                            </button>
                        </form>
                    </div>
                )}


                {/* Berguna untuk memunculkan tombol START pada form 1 ,2 , dan 3 */}
                {(showForm1 || showForm2 || showForm3) && (
                    <div>
                        <button className=" animate-bounce w-60 h-60 text-custom-green text-[40px] shadow-lg font-bold font-sans rounded-full flex items-center justify-center border-4 border-custom-green">
                            START
                        </button>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}

export default HomePage;
