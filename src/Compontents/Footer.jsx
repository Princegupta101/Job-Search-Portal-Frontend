import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs';

import footerimg from '../Assets/Image/FooterImage-removebg-preview1.png'

function Footer(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return(
        <>
           <footer className='relative left-0 bottom-0 h-[25vh] sm:h-[15vh] py-5 sm:px-20 flex flex-col sm:flex-row items-center justify-between bg-neutral text-neutral-content'>
                <section className='flex flex-col items-center justify-center sm:items-start sm:justify-start'>
                    <img src={footerimg} alt="image" className='w-64' />
                    <p className="text-sm text-center sm:text-left">© {year} All rights reserved</p>
                </section>

                <section className="mt-4 sm:mt-0">
                    <header className="footer-title text-xl flex flex-col items-center justify-center sm:items-start sm:justify-start">Social</header> 
                    <div className="grid grid-flow-col gap-6 justify-center sm:justify-start mt-2">
                        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsFacebook className='h-6 w-6'/>
                        </a>
                        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsInstagram className='h-6 w-6'/>
                        </a>
                        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsLinkedin className='h-6 w-6'/>
                        </a>
                        <a href="#" className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                            <BsTwitter className='h-6 w-6'/>
                        </a>
                    </div>
                </section>
            </footer>

        </>
    )
}
export default Footer;