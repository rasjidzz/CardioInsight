import React from 'react';
import Navbar from '../../components/Navbar';
import { Inertia } from '@inertiajs/inertia';
import Footer from '../../components/Footer';

const historyData = [
    {
        number: 1,
        date: '2024-06-01',
        document: 'Report1.pdf',
        resultLink: '/result/1'
    },
    {
        number: 2,
        date: '2024-06-02',
        document: 'Report2.pdf',
        resultLink: '/result/2'
    },
    // Tambahkan lebih banyak data sesuai kebutuhan
];

function HistoryPage({ userName }) {
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
                            <a
                                href={`/documents/${item.document}`}
                                download
                                className="text-blue-500 hover:underline mt-2 block"
                            >
                                Download Document
                            </a>
                            <button
                                onClick={() => Inertia.visit(item.resultLink)}
                                className="mt-4 bg-custom-green text-white py-2 px-4 rounded-full"
                            >
                                Go to Result
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HistoryPage;
