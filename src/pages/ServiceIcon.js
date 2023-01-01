import React from 'react';
import serviceData from '../assets/iconData';
import { motion } from 'framer-motion';

const ServiceIcon = () => {
    return (
        <div className='md:grid-cols-2 lg:grid-cols-4 grid gap-6 py-16 px-10  '>

            {
                serviceData.map((item, index) => (
                    <motion.div whileHover={{ scale: 1.1 }} key={index} className="card card-side bg-base-100 shadow-xl cursor-pointer" style={{ background: `${item.bg}` }}>
                        <div className="serviceIcon ml-4 grid items-center justify-center  ">
                            <span className='text-xl h-10 w-10 text-white  bg-black p-2 rounded-full flex items-center justify-center'><i class={item.icon}></i></span>
                        </div>
                        <div className="card-body pl-2">
                            <h2 className="card-title text-lg">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                        </div>
                    </motion.div>
                ))
            }

        </div>
    );
};

export default ServiceIcon;