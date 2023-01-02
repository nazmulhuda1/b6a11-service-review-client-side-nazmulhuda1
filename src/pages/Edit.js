import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';

const Edit = () => {
    const router = useParams();
    const [reviews, setReviews] = useState({});
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-nazmulhuda1.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviews = {
            name: e.target.name.value,
            email: e.target.email.value,
            text: e.target.text.value,
        };

        fetch(`https://b6a11-service-review-server-side-nazmulhuda1.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    navigate("/myreviews")
                } else {
                    toast.err(data.error)
                }
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <Helmet title={'Add Service'}>
            <div className="review_form p-16 ">
                <h5 className='text-xl text-primary'>Update Review</h5>
                <form onSubmit={handleSubmit} className='' >
                    <div className="form_grou mt-5">
                        <input className='p-2 w-1/2 border border-slate-500 outline-none' type="text" name='name'
                            placeholder='Enter Name'
                            defaultValue={reviews?.name}
                        />
                    </div>
                    <div className="form_grou mt-5">
                        <input className='p-2 w-1/2 border border-slate-500 outline-none' type="text" name='email' placeholder='example@gmail.com'
                            defaultValue={reviews?.email} />
                    </div>
                    <div className="form_grou mt-5">
                        <textarea className=' p-2 w-1/2 border border-slate-500 outline-none ' name="text" id="" placeholder='message' defaultValue={reviews?.text}></textarea>
                    </div>
                    <button type="submit" className='btn btn-primary mt-0'>Submit</button>
                </form>
            </div>
        </Helmet>
    );
};

export default Edit;