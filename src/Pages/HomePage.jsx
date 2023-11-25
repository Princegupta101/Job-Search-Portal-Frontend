import { BiSearchAlt } from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'

import homeimage from '../Assets/Image/HomeMainImage.png'
import HomeLayout from "../Layouts/HomeLayout";

function HomePage(){
    return(
        <HomeLayout>
            <div className=" text-white flex  flex-col lg:flex-row  items-center justify-center  lg:gap-10  lg:h-[80vh]  " data-theme="dark">


                < div className=" sm:w-2/3 flex flex-col justify-center items-center ">
                    <h1 className=' flex flex-wrap font-extrabold  items-center justify-center text-6xl mb-4'>
                        To Choose 
                        <span className= ' ml-4 text-indigo-600'>
                            Right Jobs.
                        </span>
                    </h1>
                    <p className=' w-2/3 lg:w-full flex flex-wrap items-center justify-center mb-12 text-lg text-gray-400'>
                                 2400 Peoples are daily search in this portal, 100 user added job portal!
                        </p>
                    
                    <div className='bg-white flex  w-2/3  items-center p-4 border  rounded-full  justify-center'>
                        {/* onChange={(e) => setSearch(e.target.value)} */}
                        <input  type="text" placeholder='Search Jobs.....' className=' w-full h-full  bg-white  p-1  font-normal  text-lg text-black outline-none' />
                        {/* onClick={handleSearch} */}
                        <button  className=''>
                             <BiSearchAlt className='text-2xl text-indigo-600 mx-2 ' />
                             </button>
                    </div>

                    <div className=' px-2 py-2 flex  flex-col lg:flex-row   items-center justify-start flex-wrap'>
                        <div className='flex items-center justify-center'>
                            <BsFillBookmarkFill className='text-indigo-600 text-xl mx-2' />
                            <h1 className='font-semibold text-lg text-blue-500'>Suggest Tag : </h1>
                        </div>
                        <div className='flex text-white  gap-3 items-center justify-center px-4 flex-wrap'>
                            <p >Software</p>
                            <p>Marketing</p>
                            <p>UI/UX Design</p>
                        </div>
                    </div>

                </div>

                <div className=" w-2/3 lg:full flex   items-center justify-center ">
                    <img src={homeimage} alt="homepage image" />
                </div>

            </div>        
    </HomeLayout>
    )
}
export default HomePage;