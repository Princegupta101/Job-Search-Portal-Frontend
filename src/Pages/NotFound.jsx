import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();
    return(
        <div className="min-h-screen flex items-center justify-center" data-theme="dark">
        <div className="max-w-xl w-full rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 py-12 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold flex   flex-col justify-center items-center text-white mb-4">
                Oops! 404  
                <h3>  Page Not Found</h3>   
            </h1>
            <div className="flex justify-center">
                   <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-yellow-500 focus:outline-none focus:ring">
                    <span onClick={() => navigate(-1)} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        Go Back
                    </span>
                </a>
            </button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default NotFound;