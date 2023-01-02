import React from 'react';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
        const service = {
            name: e.target.name.value,
            category: e.target.category.value,
            shortDesc: e.target.shortDesc.value,
            description: e.target.description.value,
            price: parseInt(e.target.price.value),
            image: e.target.image.value,
        };
        fetch("https://b6a11-service-review-server-side-nazmulhuda1.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })

    }

    return (
        <Helmet title={'Add Service'}>
            <div className='p-8 md:p-16 items-center justify-center'>
                <div className="title text-center ">
                    <h1 className='text-2xl font-semibold text-primary mb-8 font-serif'>Add Service Item</h1>
                </div>
                <form onSubmit={handleAddService} className=' w-full  md:w-1/2  md:mx-auto border p-16 rounded-xl shadow-2xl' >
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Service Name</label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Category Name</label>
                        <input type="text" name='category' placeholder="Category" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Price</label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Short-Information</label>
                        <textarea name="shortDesc" id="" cols="30" rows="10" placeholder='maximum 100 characters' className='input input-bordered'></textarea>

                    </div>
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Service -Description</label>
                        <textarea name="description" id="" cols="30" rows="10" placeholder='Service Details Info ' className='input input-bordered h-16'></textarea>
                    </div>
                    <div className="form-control mt-2">
                        <label className='mb-3 font-semibold text-lg text-slate-500' >Image</label>
                        <input type="text" name='image' placeholder="Url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-5">
                        <input type="submit" value="Add Service" className='btn btn-primary' />
                    </div>

                </form>
            </div>
        </Helmet>
    );
};

export default AddService;