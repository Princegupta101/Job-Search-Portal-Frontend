import { useState } from "react";
import toast from "react-hot-toast";

import axiosInstance from "../Helpers/axiosintance";
import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";

function PostJob(){

    const [userInput , setUserInput]= useState({
        title:"",
        company:"",
        email:"",
        link:"",
        description:"",
        location:"",
        salary:"",
    })

    function handleInputChange(e){
            const {name , value}= e.target;
            // console.log(name, value);
            setUserInput({
                ...userInput , 
                [name]:value
            })

    }

     async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email || !userInput.title ||!userInput.company|| !userInput.link){
                toast.error(" fields are mandatory");
                for (const key in userInput) {
                    if (!userInput[key]) {
                      document.getElementById(key).classList.add("border-red-500");
                    } else {
                      document.getElementById(key).classList.remove("border-red-500");
                    }
                  }
                return;
        }
        if(!isEmail(userInput.email)){
            toast.error("Invalid Email ")
            return;
        }
        try {
            const response = axiosInstance.post("/postjob",userInput)
            toast.promise(response,{
                loading:"Submitting your  job ....",
                success:"Job submitted sucessfully",
                error:"Failed to submit the Job"
            })
            const contactResponse = await response; 
            if(contactResponse?.data?.success){
                setUserInput({
                    title:"",
                    company:"",
                    email:"",
                    link:"",
                    description:"",
                    location:"",
                    salary:"",
                })
            }
        } catch (error) {
            toast.error("operation failed......")
        }
    }

    return (
     <HomeLayout>
        <div className=" flex items-center justify-center  h-[90vh] mt-[10vh]" >
            <form
                noValidate
                onSubmit={onFormSubmit}
                className=" flex  flex-col items-center justify-center  gap-2  p-5 rounded-md text-white shadow-[0_0_10px_black] w-auto">
                <h1 className="  text-yellow-500 text-3xl font-semibold">
                      Enter Job Details
                </h1>

                <div className="flex  w-full gap-2 ">

                    <div className=" flex flex-col w-full gap-1">
                        <label htmlFor="title" className=" text-xl font-semibold">Title</label>
                        <input 
                            className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                            type="text" 
                            name="title"
                            id="title"
                            placeholder="Enter title name..."
                            onChange={handleInputChange}
                            value={userInput.title}
                        />
                    </div>

                    <div className=" flex flex-col w-full gap-1">
                        <label htmlFor="company" className=" text-xl font-semibold">Company</label>
                        <input 
                            className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                            type="text" 
                            name="company"
                            id="company"
                            placeholder="Enter company name..."
                            onChange={handleInputChange}
                            value={userInput.company}
                        />
                    </div>
                    
                </div>

                <div className="flex w-full gap-2">

                    <div className=" flex flex-col w-full gap-1">
                        <label htmlFor="email" className=" text-xl font-semibold">Email</label>
                        <input 
                            className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                            type="email" 
                            name="email"
                            id="email"
                            placeholder="Enter email..."
                            onChange={handleInputChange}
                            value={userInput.email}
                        />
                    </div>

                    <div className=" flex flex-col w-full gap-1">
                        <label htmlFor="link" className=" text-xl font-semibold">Job link</label>
                        <input 
                            className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                            type="text" 
                            name="link"
                            id="link"
                            placeholder="Enter job link..."
                            onChange={handleInputChange}
                            value={userInput.link}
                        />
                    </div>

                </div>

                <div className="flex  w-full gap-2 ">

                    <div className=" flex flex-col w-full gap-1">
                            <label htmlFor="salary" className=" text-xl font-semibold">Salary</label>
                            <input 
                                className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                                type="text" 
                                name="salary"
                                id="salary"
                                placeholder="Enter salary ..."
                                onChange={handleInputChange}
                                value={userInput.salary}
                            />
                        </div>

                    <div className=" flex flex-col w-full gap-1">
                        <label htmlFor="location" className=" text-xl font-semibold">Location</label>
                        <input 
                            className=" bg-transparent  border  px-2 py-1 rounded-sm" 
                            type="text" 
                            name="location"
                            id="location"
                            placeholder="Enter location..."
                            onChange={handleInputChange}
                            value={userInput.location}
                        />
                    </div>

                </div>

                <div className=" flex flex-col w-full gap-1">
                    <label htmlFor="description" className=" text-xl font-semibold">Description</label>
                    <textarea 
                        className=" bg-transparent  border  px-2 py-1 rounded-sm resize-none h-40"
                        name="description"
                        id="message"
                        placeholder="Enter job description..."
                        onChange={handleInputChange}
                        value={userInput.description}
                    />
                </div>

                <button type="submit" className=" w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">Submit</button>
            </form>
        </div>
     </HomeLayout>
    )
}
export  default PostJob;