import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import ServiceList from '../componanet/Shared/ServiceList';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-nazmulhuda1.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data)
                } else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.error(err.message))


    }, [services])

    return (
        <Helmet title={'Services'}>
            <ServiceList data={services} />
        </Helmet>
    );
};

export default Service;