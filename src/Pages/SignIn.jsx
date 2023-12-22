import { useState } from "react";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signIn } from "../Redux/Slices/AuthSlices";

function SignIn(){

    const dispatch = useDispatch();
   const navigate = useNavigate();


    const [signinData, setSigninData]=useState({
        email:"",
        password:"",
    });

    function handleUserInput(e){
        const{name, value}=e.target;
        setSigninData({
            ...signinData,
            [name]:value
        })
    }

   async function onSignin(event){
        event.preventDefault();
        if (!signinData.email ||!signinData.password) {
            toast.error("Please fill all the details ");
            return;
        }

        //dispatch create account action
       const response = await dispatch(signIn(signinData));
       console.log(response);
        if(response?.payload?.success)
          navigate('/');

          setSigninData({
            email:"",
            password:"",
        })
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <form onSubmit={onSignin} className="flex flex-col items-center w-80   sm:w-96  gap-3  p-5 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-500">SignIn Page</h1>
            <div className="w-full max-w-md">

                <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Enter your email..."
                    className="w-full px-3 py-2 bg-gray-700 rounded border-none focus:outline-none focus:bg-gray-600"
                    onChange={handleUserInput}
                    value={signinData.email}
                />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-semibold">
                    Password
                </label>
                <input
                    type="password"
                    required
                    name="password"
                    id="password"
                    placeholder="Enter your password..."
                    className="w-full px-3 py-2 bg-gray-700 rounded border-none focus:outline-none focus:bg-gray-600"
                    onChange={handleUserInput}
                    value={signinData.password}
                />
                </div>
                <button
                type="submit"
                className="w-full mt-4 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    SignIn
                </button>
                <p className="mt-4">
                Already have an account?{' '}
                <Link to="/signup" className="text-yellow-400 hover:underline">
                    Signup               
                 </Link>
                </p>
            </div>
            </form>
      </div>
      
    )
}
export default SignIn;