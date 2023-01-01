import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import ProductReview from './ProductReview';

const ServiceDetails = () => {
    const [tab, setTab] = useState('desc')
    const router = useParams();
    const [service, setService] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const { id } = router;

    const { name, image, price, shortDesc, description, category } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setService(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

    const handleReview = (e) => {
        e.preventDefault();
        const reviews = {
            name: e.target.name.value,
            email: e.target.email.value,
            text: e.target.text.value,
        };

        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh);
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReviews(data.data)
                } else {
                    toast.error(data.error)
                }
            })
            .catch(err => toast.error(err.message))

    }, [refresh])

    return (
        <Helmet title={name}>
            <div className="">
                <div className='px-10 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-center justify-center'>
                    <div className="product_img ">
                        <img className='rounded-xl' src={image} alt="" />
                    </div>
                    <div className="productDetail p-6">
                        <h2 className='text-2xl font-semibold text-black'>{name}</h2>
                        <div className="service_ifof">
                            <div className="form_grou mt-3">
                                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                            </div>
                            <span className='flex gap-3 py-4'>
                                <p className='text-yellow-600 font-semibold text-lg'>4.7</p>
                                <p >Rating</p>
                                <span><p> <strong>Category:</strong> {category}</p></span>
                            </span>

                            <div className="short_text">
                                <p> {shortDesc}</p>
                            </div>
                        </div>
                        <button className='btn btn-primary mt-8 text-xl '> $ {price} </button>
                    </div>

                </div>
                <div className=' px-16 reviews_tab_wrapper'>
                    <div className="tab_button flex gap-5 ">
                        <h6 className={`${tab === 'desc' ? 'actiove_tab hover:cursor-pointer font-semibold' : "hover:cursor-pointer"}`}
                            onClick={() => setTab('desc')}>Description</h6>

                        <h6 className={`${tab === 'rev' ? 'actiove_tab hover:cursor-pointer font-semibold' : "hover:cursor-pointer"}`}
                            onClick={() => setTab('rev')}>Reviews</h6>
                    </div>
                    <div className="tab-se">
                        {
                            tab === 'desc' ?
                                <>
                                    <div className="tab_content mt-5 pb-32">
                                        <p className=' leading-7 text-justify  '>{description}</p>
                                    </div>
                                </> :
                                <>
                                    <div className="product_reviews mt-5 pb-32">
                                        <div className="review_wrapper">
                                            <ul>
                                                {
                                                    reviews.map((item, index) => (
                                                        <li key={index} className=' review-text mb-4'>
                                                            <ProductReview item={item}></ProductReview>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="review_form">
                                            <h5>Leave Your Experience</h5>
                                            <form onSubmit={handleReview} >
                                                <div className="form_grou mt-5">
                                                    <input className='p-2 w-1/2 border border-slate-500 outline-none' type="text" name='name' placeholder='Enter Name' />
                                                </div>
                                                <div className="form_grou mt-5">
                                                    <input className='p-2 w-1/2 border border-slate-500 outline-none' type="text" name='email' placeholder='example@gmail.com' />
                                                </div>
                                                <div className="form_grou mt-5">
                                                    <textarea className=' p-2 w-1/2 border border-slate-500 outline-none ' name="text" id="" placeholder='message'></textarea>
                                                </div>
                                                <button type="submit" className='btn btn-primary mt-0'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default ServiceDetails;