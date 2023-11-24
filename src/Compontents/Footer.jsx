import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs';

import footerimg from '../Assets/Image/FooterImage-removebg-preview.png'

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <>
            <footer className=' relative left-0 bottom-0 h-[30vh] sm:h-[18vh]  py-5 sm:px-20 flex flex-col  sm:flex-row items-center justify-between text-white   bg-blue-600'>
                
                <section className=' flex flex-col items-center justify-center'>
                    <img src={footerimg} alt="image" className='w-64 ' />
                    Copyright {year} | All rights resvered
                </section>

                <section>
                    <header className="footer-title text-xl flex flex-col items-center justify-center">Social</header> 
                    <div className="grid grid-flow-col gap-6" >
                        <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300  '>
                            <BsFacebook className='h-6 w-6'/>
                        </a>
                        <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsInstagram className='h-6 w-6'/>
                        </a>
                        <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsLinkedin className='h-6 w-6'/>
                        </a>
                        <a className=' hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsTwitter className='h-6 w-6'/>
                        </a>
                    </div>
                </section>
                
            </footer>
        </>
    )
}
export default Footer;