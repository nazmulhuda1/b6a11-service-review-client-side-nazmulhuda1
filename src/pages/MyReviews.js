import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';

const MyReviews = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false)
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


    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh);
                } else {
                    toast.error(data.error);
                }
            }).catch(err => toast.error(err.message))
    };


    return (
        <Helmet title={'My Reviews'}>
            <div className="overflow-x-auto p-16">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.text.length > 80 ?
                                            `${item.text.substring(0, 80)} [...]` : item.text
                                        }</td>
                                        {/* <td>{item.text.substring(0, 250)}</td> */}
                                        <td>
                                            <span onClick={() => handleEdit(item._id)} className='text-xl text-sky-400 p-3 cursor-pointer'>
                                                <i class="ri-edit-line"></i>
                                            </span>
                                            <span onClick={() => handleDelete(item._id)} className='text-xl text-red-500 p-3 cursor-pointer'>
                                                <i class="ri-delete-bin-line"></i>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>


        </Helmet>
    );
};

export default MyReviews;