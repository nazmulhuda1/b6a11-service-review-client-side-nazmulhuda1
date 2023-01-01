import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componanet/CommonSection/Footer';
import Navbar from '../componanet/CommonSection/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;