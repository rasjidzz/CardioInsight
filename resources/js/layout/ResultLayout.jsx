import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResultLayout = ({ userName, children }) => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar userName={userName} />
            <main className="flex-grow w-full px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default ResultLayout;
