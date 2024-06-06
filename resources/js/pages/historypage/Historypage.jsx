import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Inertia } from '@inertiajs/inertia';
import Footer from '../../components/Footer';

const historyData = [
    {
        number: 1,
        date: '2024-06-01',
        resultLink: '/result/1'
    },
    {
        number: 2,
        date: '2024-06-02',
        resultLink: '/result/2'
    },
    {
        number: 3,
        date: '2024-06-02',
        resultLink: '/result/3'
    },
    // Tambahkan lebih banyak data sesuai kebutuhan
];

function HistoryPage({ userName }) {
    const [showModal, setShowModal] = useState(false);

    const handleDoctorFeedback = () => {
        setShowModal(true);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar userName={userName} />
            <div className="flex-1 container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-6">History</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {historyData.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-lg font-semibold">NO: {item.number}</p>
                            <p className="text-gray-700">Date: {item.date}</p>
                            <button
                                onClick={() => Inertia.visit('/result')}
                                className="mt-4 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Go to Result
                            </button>
                            <button
                                onClick={handleDoctorFeedback}
                                className="m-2 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Doctor Feedback
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                    <div className="bg-white p-8 max-w-md rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Doctor Feedback</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
                            pharetra ligula, eget consequat lorem. Vestibulum ac efficitur neque.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 bg-custom-green text-white py-2 px-4 rounded-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HistoryPage;
