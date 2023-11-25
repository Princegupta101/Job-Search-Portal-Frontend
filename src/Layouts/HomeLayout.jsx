import {FiMenu} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import{useDispatch, useSelector} from 'react-redux'

import footerimg from '../Assets/Image/FooterImage-removebg-preview1.png'
import avatar from '../Assets/Image/avatarimg.jpg'
import Footer from '../Compontents/Footer.jsx';

function HomeLayout({ children }) {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    //for checking if user is logged in 
    const isLoggegIn = useSelector((state)=>state?.auth?.isLoggegIn);

    // for displaying the options acc to role
    const role = useSelector((state)=>state?.auth?.role);

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }
    
    function handleLogout (e){
        e.preventDefault();

        // const res= await dispatch(logout());
        // if(res?.payload?.sucess)
        navigate("/");
    }

    return (
                <div className="navbar h-[12vh]  flex  justify-between items-center bg-neutral text-neutral-content ">

                    <div className="">
                        <a className="btn btn-ghost text-xl px-0"><img src={footerimg} alt="image" className=' sm:w-64 w-56' /></a>
                    </div>
                    
                    <div className='   text-xl flex  gap-8'>
                                <Link to="/" className='hidden sm:block'>Home</Link>
                                <Link to="/deshboard" className='hidden sm:block'>Dashboard</Link>
                                <Link to="/postjob" className='hidden sm:block'>Post Job</Link>
                                <Link to="/viewjob" className='hidden sm:block'>View Job</Link>
                                <Link to="/about" className='hidden sm:block'>About Us</Link>
                                <Link to="/contactus" className='hidden sm:block'>Contact Us</Link>
                    </div>

                    <div className="flex  justify-around items-center">

                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="sm:w-10 sm:rounded-full ">
                             <img alt="Navbar " className=' hidden sm:block' src={avatar} />
                             <FiMenu 
                                onClick={changeWidth}
                                size={"32px"}
                                className="font-bold text-white m-4 sm:hidden"
                              />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {!isLoggegIn &&(
                            <li >
                                <div className='w-full flex items-center justify-between flex-col'>
                                    <Link to="/" className='sm:hidden'>Home</Link>
                                    <Link to="/deshboard" className='sm:hidden'>Dashboard</Link>
                                    <Link to="/postjob" className='sm:hidden'>Post Job</Link>
                                    <Link to="/viewjob" className='sm:hidden'>View Job</Link>
                                    <Link to="/about" className='sm:hidden'>About Us</Link>
                                    <Link to="/contactus" className='sm:hidden'>Contact Us</Link>
                                    <Link to="/login">Login</Link>
                                    <Link to="/singup">Singup</Link>
                                </div>
                            </li>
                        )}

                        {isLoggegIn &&(
                            <li >
                                <div className='w-full flex items-center justify-betweenflex-col'>
                                    <Link to="/user/proflie">Profile</Link>
                                    <Link  onClick={handleLogout}>Logout</Link>
                                </div>
                            </li>
                        )}
                        </ul>
                        </div>
                    </div>
            

                    { children }

                    {/* <Footer /> */}
                </div>
    );
}

export default HomeLayout;