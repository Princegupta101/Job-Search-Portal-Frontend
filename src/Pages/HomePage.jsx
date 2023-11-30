import { BiSearchAlt } from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'

import homeimage from '../Assets/Image/HomeMainImage.png'
import HomeLayout from "../Layouts/HomeLayout";

function HomePage(){
    return(
        <HomeLayout>
          <div className="text-white flex flex-col md:flex-row items-center justify-center md:gap-10 h-[80vh]" data-theme="dark">
            <div className="sm:w-full md:w-2/3 flex flex-col justify-center items-center text-center md:text-left mb-8 md:mb-0">
                <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4'>
                    To Choose <span className='text-indigo-600 ml-2'>Right Jobs.</span>
                </h1>
                <p className='text-lg text-gray-400 max-w-md px-4 md:px-0'>
                    2400 people search on this portal daily, with 100 users adding jobs!
                </p>
                
                <div className='bg-white flex w-3/4 md:w-2/3 items-center p-4 border rounded-full justify-center mt-4'>
                    <input type="text" placeholder='Search Jobs.....' className='w-full bg-white p-1 font-normal text-lg text-black outline-none' />
                    <button className='ml-2'>
                        <BiSearchAlt className='text-2xl text-indigo-600' />
                    </button>
                </div>

                <div className='px-2 py-2 flex flex-col lg:flex-row items-center justify-start flex-wrap mt-4'>
                    <div className='flex items-center'>
                        <BsFillBookmarkFill className='text-indigo-600 text-xl mr-2' />
                        <h1 className='font-semibold text-lg text-blue-500'>Suggested Tags:</h1>
                    </div>
                    <div className='flex text-white gap-3 items-center justify-center mt-2 md:mt-0'>
                        <p>Software</p>
                        <p>Marketing</p>
                        <p>UI/UX Design</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-2/3 flex items-center justify-center">
                <img src={homeimage} alt="homepage image" className="max-w-full h-auto" />
            </div>
        </div>
    </HomeLayout>
    )
}
export default HomePage;