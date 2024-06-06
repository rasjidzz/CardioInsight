import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import Footer from '../../components/Footer';
import '../../../css/docstyle.css'; // Import CSS file

// Data dummy history pasien
const historyData = [
    {
        number: 1,
        name: 'John Doe',
        checkupDate: '2024-06-01',
        pkvStatus: 'Positif',
        resultLink: '/result/1'
    },
    {
        number: 2,
        name: 'Jane Smith',
        checkupDate: '2024-06-02',
        pkvStatus: 'Negatif',
        resultLink: '/result/2'
    },
    {
        number: 3,
        name: 'Jane Smith',
        checkupDate: '2024-06-02',
        pkvStatus: 'Negatif',
        resultLink: '/result/2'
    },
];

const handleLogout = () => {
    const confirmation = window.confirm('Are you sure you want to logout?');
    if (confirmation) {
        Inertia.visit('/auth');// Handle actual logout logic here
        console.log('Logged out');
    }
};

function DoctorPage({ userName }) {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="header">
                <div className="text-lg font-bold">Welcome, {userName}</div>
                <button
                    onClick={handleLogout}
                    className="logout-button"
                >
                    Logout
                </button>
            </nav>
            <div className="flex-1 container">
                <h1 className="text-2xl font-bold mb-6">Patient Data</h1>
                <div className="card-container">
                    {historyData.map((item, index) => (
                        <div key={index} className="patient-card">
                            <p className="text-lg font-semibold">Nama: {item.name}</p>
                            <p className="text-gray-700">Tanggal Pengecekan: {item.checkupDate}</p>
                            <p className="text-gray-700">Status PKV: {item.pkvStatus}</p>
                            <button
                                onClick={() => Inertia.visit('/doctorrecom')}
                                className="go-to-result-button"
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

export default DoctorPage;
