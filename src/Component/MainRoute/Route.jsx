import React from 'react';
import NavBar from '../AllComponents/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../AllComponents/Footer/Footer';

const Route = () => {
    return (
        <div className='max-w-[1470px] mx-auto'>
            <div className='mx-2 md:mx-auto'>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Route;