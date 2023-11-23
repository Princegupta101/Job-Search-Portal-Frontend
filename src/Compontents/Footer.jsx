import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs';

import footerimg from '../Assets/Image/FooterImage-removebg-preview.png'

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <>
            <footer className=' relative left-0 bottom-0 h-[25vh] sm:h-[15vh]  py-5 sm:px-20 flex flex-col  sm:flex-row items-center justify-between text-white  bg-blue-600'>
                
                <section className=' w-64 flex items-center justify-center'>
                    <img src={footerimg} alt="image" />
                </section>

                <section>
                        Copyright {year} | All rights resvered
                </section>
              
                <section className='flex mt-2 items-center justify-center gap-6 text-2xl text-white'>
                    <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook/>
                    </a>
                    <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram/>
                    </a>
                    <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin/>
                    </a>
                    <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter/>
                    </a>
                </section>
            </footer>
        </>
    )
}
export default Footer;