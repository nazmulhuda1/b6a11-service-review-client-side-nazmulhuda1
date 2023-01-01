import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ data }) => {
    return (
        <>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-16 px-10'>
                {
                    data.map((item, index) => <ServiceCard item={item} key={index}></ServiceCard>)
                }
            </div>
        </>
    );
};

export default ServiceList;