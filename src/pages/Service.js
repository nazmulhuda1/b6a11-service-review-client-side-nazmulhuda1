import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import ServiceList from '../componanet/Shared/ServiceList';

const Service = () => {
    const [services, setServices] = useState([])
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


    }, [services])

    return (
        <Helmet title={'Services'}>
            <ServiceList data={services} />
        </Helmet>
    );
};

export default Service;