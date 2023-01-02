import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../componanet/CommonSection/Helmet';
import { AuthContext } from '../Context/AuthProvider';


const Login = () => {
    const { signIn, resetPassword, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [userEmail, setUserEmail] = useState(' ')

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
            });
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
    // reset password
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent | Please Check Your Email')
            })
            .catch((error) => {
                toast.error(error.message)
                // ..
            });
    }

    return (
        <Helmet title={'login'}>
            <div className="hero min-h-screen ">
                <div className="card  w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center mb-4 font-bold">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(event) => setUserEmail(event.target.value)} type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label onClick={handleReset} className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <p className='text-sm'>Create a New Account <Link className='font-semibold hover:underline ' to={"/signup"}>Sing Up</Link> </p>
                        </div>
                        <button onClick={handleGoogleSingIn} className="mt-7 "> <img className='w-5 h-5 text-center inline-block' src="https://freesvg.org/img/1534129544.png" alt="" /> <span className='font-semibold'>Google</span></button>
                    </div>
                </div>
            </div>
        </Helmet>
    );
};

export default Login;