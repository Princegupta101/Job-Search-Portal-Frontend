import {FiMenu} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import{useDispatch, useSelector} from 'react-redux'

import footerimg from '../Assets/Image/FooterImage-removebg-preview1.png'
import avatar from '../Assets/Image/avatarimg.jpg'
import Footer from '../Compontents/Footer.jsx';
import { logout } from '../Redux/Slices/AuthSlices.js';

function HomeLayout({ children }) {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    //for checking if user is logged in 
    const isLoggegIn = useSelector((state)=>state?.auth?.isLoggegIn);

    // for displaying the options acc to role
    const role = useSelector((state)=>state?.auth?.role);
    
    async function handleLogout (e){
        e.preventDefault();
        const res= await dispatch(logout());
        if(res?.payload?.sucess)
        navigate("/");
    }

    return (
                <div>
                    <div className="navbar h-[12vh] flex justify-between items-center bg-neutral text-neutral-content">

                        <div className="">
                            <a className="btn btn-ghost text-xl px-0">
                                <img src={footerimg} alt="image" className='w-56 lg:w-64' />
                            </a>
                        </div>

                        <div className='text-xl  gap-8 hidden lg:flex'>
                            <Link to="/">Home</Link>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/postjob">Post Job</Link>
                            <Link to="/viewjob">View Job</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </div>

                        <div className="flex justify-around items-center">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="lg:w-10 lg:rounded-full">
                                        <img alt="Navbar" className='hidden lg:block' src={avatar} />
                                        <FiMenu
                                            size={"32px"}
                                            className="font-bold text-white m-4 lg:hidden"
                                        />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm  dropdown-content  justify-center items-center text-black bg-base-100 rounded-box w-52">
                                         <li><Link to="/" className='lg:hidden'>Home</Link></li>
                                         <li><Link to="/deshboard" className='lg:hidden'>Dashboard</Link></li>
                                         <li><Link to="/postjob" className='lg:hidden'>Post Job</Link></li>
                                         <li><Link to="/viewjob" className='lg:hidden'>View Job</Link></li>
                                         <li><Link to="/about" className='lg:hidden'>About Us</Link></li>
                                         <li><Link to="/contactus" className='lg:hidden'>Contact Us</Link></li>
                                         
                                         {!isLoggegIn &&(                                        
                                            <div>
                                                <li><Link to="/signin">Login</Link></li>
                                                <li><Link to="/signup">Singup</Link></li> 
                                            </div>
                                    )}

                                    {isLoggegIn &&(
                                        <div>
                                                <li><Link to="/user/proflie">Profile</Link></li>
                                                <li><Link  onClick={handleLogout}>Logout</Link></li>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {children}

                    <Footer />
                </div>

    );
}

export default HomeLayout;