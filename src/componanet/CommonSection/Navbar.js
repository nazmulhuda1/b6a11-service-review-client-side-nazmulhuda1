import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import avater from '../../assets/img/avater.png';
import { AuthContext } from '../../Context/AuthProvider';


const Navbar = () => {
    const { singOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/login';

    const handleLogOut = () => {
        singOut()
            .then(toast.warning('User Logged Out'))
            .catch(error => console.log(error));
        navigate(from, { replace: true })
    }


    const userMenu = <>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li onClick={handleLogOut} className='font-semibold'><Link to='/login'>LogOut</Link></li>

                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>

                </>
        }


    </>


    return (
        <div className="navbar bg-slate-100 px-10">
            <div className="flex-1">
                <a href="/" className="md:text-xl font-bold lg:text-2xl"><span className='text-primary'>Travel</span> Agency</a>
            </div>
            <div className="flex-none">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 left-[-70px]  p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/home'}>Home</Link> </li>
                            <li> <Link to={'/service'}>Service</Link> </li>
                            <li> <Link to={'/blog'}>Blog</Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to={'/home'}>Home</Link> </li>
                        <li> <Link to={'/service'}>Service</Link> </li>
                        <li> <Link to={'/blog'}>Blog</Link> </li>

                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.email ? <>
                                    <img src={user.photoURL} alt='' />
                                </> : <>
                                    <img src={avater} alt='' />
                                </>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {userMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;