import AboutImage from '../Assets/Image/AboutUsImage.png'
import TeamCard from "../Compontents/TeamCard";
import { Team } from "../Constants/TeamData";
import HomeLayout from '../Layouts/HomeLayout';

function AboutUs(){
    return(
        <HomeLayout>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-[10vh]">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
                            About Our Job Search Portal
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Our job search portal is dedicated to simplifying the job search process
                            by aggregating job listings from various sources and providing personalized
                            recommendations to users based on their preferences and history.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed mt-4">
                            We are committed to revolutionizing the employment search experience, making it
                            more efficient and rewarding for job seekers.
                        </p>
                        </div>
                        <div className="flex justify-center">
                        <img src={AboutImage} alt="Team" className="rounded-lg shadow-lg w-full md:w-auto" />
                        </div>
                    </div>
                    <div className="mt-20">
                        <h2 className="text-3xl lg:text-4xl font-bold   text-yellow-400 flex justify-center items-center mb-14 ">
                        Meet Our Team
                        </h2>
                        <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team member cards */}
                        {Team && Team.map(mem => (<TeamCard 
                                                                                {...mem} 
                                                                                key={mem.d} 
                                                                            />))}
                        </div>
                    </div>
                </div>
            </div>
      </HomeLayout>
    )
}
export default AboutUs;