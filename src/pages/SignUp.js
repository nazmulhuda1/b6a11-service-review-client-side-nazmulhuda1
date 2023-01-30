import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import { AuthContext } from '../Context/AuthProvider';

const SignUp = () => {
    const { createUser, updateName, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((resul) => {
                updateName(name)
                toast.success('Create New User')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
            })
    }
    // Google singin
    const handleGoogleSingIn = () => {
        googleLogin()
            .then((result) => {
                navigate(from, { replace: true })
                toast.success('Login Success Full')
            }).catch((error) => {
                toast.error(error.message)
            });
    }


    return (
        <Helmet title={'Register'}>
            <div className="hero min-h-screen py-10">
                <div className="card  w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center mb-4 font-bold">Register</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sing Up" className="btn btn-primary" />
                            </div>
                        </form>

                        <div className="form-control mt-6">
                            <p className='text-sm'>Already Have an account <Link className='font-semibold hover:underline ' to={"/login"}>Login</Link> </p>
                        </div>
                        <button onClick={handleGoogleSingIn} className="mt-7 "> <img className='w-5 h-5 text-center inline-block' src="https://freesvg.org/img/1534129544.png" alt="" /> <span className='font-semibold'>Google</span></button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default SignUp;