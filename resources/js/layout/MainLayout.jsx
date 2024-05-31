import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';

function MainLayout({ children, userName }) {
    return (
        <div>
            <Navbar userName={userName} />
            <div className='bg-custom-green aspect-4/3 rounded-b-full'>

                </div>
            <div className=" mx-auto p-8">
                {children}
            </div>
            <div>
            <Footer/>

            </div>

        </div>
    );
}

export default MainLayout;
