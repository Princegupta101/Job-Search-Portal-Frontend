
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import JobCard from "../Compontents/jobcard";
import HomeLayout from "../Layouts/HomeLayout";
import { getAllJobs } from "../Redux/Slices/JobSlice";
// import { JobData } from "../TastData/jobdata";

function  JobList () {
    const dispatch = useDispatch()
    const{JobData}=useSelector((state)=>state.job)

    async function loadJobs(){
        await dispatch(getAllJobs());
    }
    
    useEffect(()=>{
        loadJobs()
    },[])
  return (
        <HomeLayout>
            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                        <h2 className="text-5xl lg:text-4xl font-bold  text-yellow-400  flex justify-center items-center mb-14 ">
                                Available Jobs
                        </h2>
                        <div className="  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {JobData .map((job) => {
                           return < JobCard key={job.id} data={job} />
                        })}
                        </div>
                </div>
            </div>
        </HomeLayout>
  );
}

export default JobList;
