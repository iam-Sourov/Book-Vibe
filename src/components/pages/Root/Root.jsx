import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <main className='min-h-[calc(100vh-285px)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;