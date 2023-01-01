import React from 'react';

const ContactPage = () => {
    return (
        <div className='p-16'>
            <div className="contact-title pb-16">
                <h3 className='text-center text-3xl '>Contact Information</h3>
            </div>
            <div className="contact-details grid md:grid-cols-2 gap-6 items-center justify-center">
                <div className=''>
                    <h2 className='text-xl text-slate-600 font-semibold pb-5'>Our Address</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='flex gap-3 items-center justify-start pt-5'>
                        <span className='text-lg '><i class="ri-map-pin-2-line"></i></span>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className='flex gap-3 items-center justify-start pt-5'>
                        <span className='text-lg '><i class="ri-phone-line"></i></span>
                        <p>+ 1235 2355 98</p>
                    </div>
                    <div className='flex gap-3 items-center justify-start pt-5'>
                        <span className='text-lg '><i class="ri-mail-line"></i></span>
                        <p>info@yoursite.com</p>
                    </div>
                    <div className='flex gap-3 items-center justify-start pt-5'>
                        <span className='text-lg '><i class="ri-global-line"></i></span>
                        <p>www.yoursite.com</p>
                    </div>
                </div>
                <div className="">
                    <div className="contact-form">
                        form
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;