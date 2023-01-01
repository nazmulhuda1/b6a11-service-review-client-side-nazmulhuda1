import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ item }) => {
    const { name, image, price, shortDesc } = item;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <motion.img whileHover={{ scale: 0.9 }} className='h-60 rounded-lg w-full' src={image} alt="service image" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-justify'>{shortDesc}</p>
                <div className="card-actions justify-between items-center">
                    <div className='location'>
                        <span className='text-xl text-primary'>
                            $ {price}
                        </span>
                    </div>
                    <button className="btn btn-primary">
                        <Link to={`/service/${item._id}`}> Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;