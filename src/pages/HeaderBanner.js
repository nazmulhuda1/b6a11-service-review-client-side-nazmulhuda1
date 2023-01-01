import React from 'react';
import { Link } from 'react-router-dom';
import '../style/HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="hero hero-img min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl font-bold">The Right Desitination For You And Your Family</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <button className="btn btn-primary"> <Link to='/service'>Get Servises</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;