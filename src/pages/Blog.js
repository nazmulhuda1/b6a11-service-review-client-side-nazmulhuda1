import React from 'react';
import Helmet from '../componanet/CommonSection/Helmet';

const Blog = () => {
    return (
        <Helmet title={'Blog'}>
            <div className="p-16 grid md:grid-cols-2 items-center justify-center gap-5">
                <div className="signle_part p-5 border border-slate-500 rounded-lg">
                    <h1 className='text-xl text-slate-700 font-semibold pb-3'>Difference between SQL and NoSQL ?</h1>
                    <p>SQL is best suitable for complex queries, multi-row transactions. NoSQL is best suited for unstructured data or documents</p>
                </div>
                <div className="signle_part p-5 border border-slate-500 rounded-lg">
                    <h1 className='text-xl text-slate-700 font-semibold pb-3'>what is jwt and how does it work ?</h1>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object</p>
                </div>
                <div className="signle_part p-5 border border-slate-500 rounded-lg">
                    <h1 className='text-xl text-slate-700 font-semibold pb-3'>How does NodeJS handle multiple requests at the same time ?</h1>
                    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                </div>
                <div className="signle_part p-5 border border-slate-500 rounded-lg">
                    <h1 className='text-xl text-slate-700 font-semibold pb-3'>What is the difference between javascript and Node JS ?</h1>
                    <p>JavaScript is used for any client-side activity for a web application. Node. js is used for accessing or performing any non-blocking operation of any operating system.</p>
                </div>
            </div>
        </Helmet>
    );
};

export default Blog;