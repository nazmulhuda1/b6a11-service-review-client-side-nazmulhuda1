import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import ServiceList from '../componanet/Shared/ServiceList';
import HeaderBanner from './HeaderBanner';
import ServiceIcon from './ServiceIcon';

const Home = () => {
    const [services, setServices] = useState([])
    const [seviceItem, setServiceItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data)
                } else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.error(err.message))
        const categoryLondon = services.filter(item => item.category === 'london')
        setServiceItem(categoryLondon);


    }, [services])
    return (
        <Helmet title={"Home"}>
            <HeaderBanner />
            <ServiceIcon />
            <section>
                <div className="setion_title text-center pt-16">
                    <h1 className='text-3xl font-semibold '>Best Tour Packege Offer For You</h1>
                    <p className='text-lg mt-3'>choose your next desitination</p>
                </div>
                <ServiceList data={seviceItem} />
                <div className='pb-16 text-center'>
                    <button className="btn btn-primary"> <Link to='/service'>All Services</Link> </button>
                </div>
            </section>
        </Helmet>
    );
};

export default Home;
