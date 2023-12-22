import { useState } from "react";
import {toast} from 'react-hot-toast'
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isPassword } from "../Helpers/regexMatcher";
import { creatAccount } from "../Redux/Slices/AuthSlices";

function Singup(){

    const dispatch = useDispatch();
   const navigate = useNavigate();


    const [prevImage, setPrevImage]=useState("");

    const [signupData, setSignupData]=useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
        avtar:"",
    });

    function handleUserInput(e){
        const{name, value}=e.target;
        setSignupData({
            ...signupData,
            [name]:value
        })
    }

    function getImage(event){
        event.preventDefault();

        //getting image
        const uploadedImage = event.target.files[0];

        if(uploadedImage){
           setSignupData({
                ...signupData,
                avtar:uploadedImage
           });
           const fileReader =new FileReader();
           fileReader.readAsDataURL(uploadedImage);
           fileReader.addEventListener("load", function(){
                 console.log(this.result);
                setPrevImage(this.result);
           })   
        }
    }

   async function createNewAccount(event){
        event.preventDefault();
        if (!signupData.email ||!signupData.fullName||!signupData.avtar || !signupData.password||!signupData.confirmPassword) {
            toast.error("Please fill all the details ");
            return;
        }

        //checking name filed 
        if(signupData.fullName.length<5){
            toast.error("Name should be atleast of 5characters ")
            return;
        }

        if(signupData.password!==signupData.confirmPassword){
            toast.error("Password ans Confirm password not matched  ")
            return;
        }

        //email vaildtaion 
        if (!isEmail(signupData.email)) {
            toast.error("Invaild email id  ")
            return;
        }

        //checking password
        if(!isPassword(signupData.password)){
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("confirmPassword", signupData.confirmPassword);
        formData.append("avtar", signupData.avtar);


        //dispatch create account action
       const response = await dispatch(creatAccount(formData));
       console.log(response);
        if(response?.payload?.success)
          navigate('/');

        setSignupData({
            fullName:"",
            email:"",
            password:"",
            confirmPassword:"",
            avtar:"",
        })
        setPrevImage("");
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <form onSubmit={createNewAccount} className="flex flex-col items-center w-80   sm:w-96  gap-3  p-5 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-blue-500">Signup Page</h1>
            <label htmlFor="image_uploads" className="cursor-pointer">
                {prevImage ? (
                <img className="w-24 h-24 rounded-full" src={prevImage} alt="Profile Preview" />
                ) : (
                <BsPersonCircle className="w-24 h-24 rounded-full" />
                )}
                <input
                className="hidden"
                type="file"
                name="image_uploads"
                id="image_uploads"
                accept=".jpg, .jpeg, .png, .svg"
                onChange={getImage}
                />
            </label>
            <div className="w-full max-w-md">
                <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="font-semibold">
                    Name
                </label>
                <input
                    type="text"
                    required
                    name="fullName"
                    id="fullName"
                    placeholder="Enter your Full Name..."
                    className="w-full px-3 py-2 bg-gray-700 rounded border-none focus:outline-none focus:bg-gray-600"
                    onChange={handleUserInput}
                    value={signupData.fullName}
                />
                </div>
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
                    value={signupData.email}
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
                    value={signupData.password}
                />
                </div>

                <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-semibold">
                    Confirm Password
                </label>
                <input
                    type="password"
                    required
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter your password..."
                    className="w-full px-3 py-2 bg-gray-700 rounded border-none focus:outline-none focus:bg-gray-600"
                    onChange={handleUserInput}
                    value={signupData.confirmPassword}
                />
                </div>

                <button
                type="submit"
                className="w-full mt-4 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                Create Account
                </button>
                <p className="mt-4">
                Already have an account?{' '}
                <Link to="/signin" className="text-yellow-400 hover:underline">
                    Login
                </Link>
                </p>
            </div>
            </form>
      </div>
      
    )
}
export default Singup;