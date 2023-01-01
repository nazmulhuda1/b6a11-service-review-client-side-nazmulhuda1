import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import avater from '../assets/img/avater.png'

const ProductReview = ({ item }) => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="user flex">
                {
                    user?.email ? <>
                        <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="user" />
                    </> : <>
                        <img className='w-8 h-8 rounded-full' src={avater} alt='' />
                    </>
                }
                <h4 className='pl-3'>{item.name}</h4>
            </div>
            <div className="rating_icon">
                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
                <span><i className="ri-star-s-fill text-yellow-600 text-lg"></i></span>
            </div>
            <p><span>4.7</span> Rating</p>
            <p>{item.text}</p>
        </div>
    );
};

export default ProductReview;