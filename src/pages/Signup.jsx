import { useState } from "react";
import { toast } from "react-hot-toast"

import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {isMailValid , isPasswordValid} from "../helpers/regexMatcher.js";
import HomeLayout from "../layouts/HomeLayout.jsx";

function Signup() {

    const [signupDetails, setSignupDetails] = useState({
        email:'',
        fullName:'',
        password:'',
    });

    async function  onFormSubmit(e) {
        e.preventDefault();
        if(!signupDetails.email || !signupDetails.fullName || !signupDetails.password) {
            toast.error("Please fill all the details");
            return;
        }
        if(signupDetails.fullName.length < 5) {
            toast.error("Name should be length of 5 or greater");
            return;
        }
        if(!isMailValid(signupDetails.email)) {
            toast.error("Email is inValid");
            return;
        }
        if(!isPasswordValid(signupDetails.password)) {
            toast.error("Password is inValid Ensure that password is 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character");
            return;
        }
        const emailExists = JSON.parse(localStorage.getItem("user"));
        if(emailExists && emailExists.email === signupDetails.email) {
            toast.error("Email already exists");
            return;
        }
        localStorage.setItem("user", JSON.stringify(signupDetails));
        toast.success("Account Created Successfully");
    }

    function inputHandler(e) {
        const {name , value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }


    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[80vh]">
                <form
                onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-2xl p-4 text-white bg-white shadow-2xl">
                    <h1 className="text-2xl text-center font-bold text-[#604058]">Registration Page</h1>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="fullName" className="font-semibold text-black">Name</label>
                          <input
                            onChange={inputHandler} 
                            value={signupDetails.fullName}
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="bg-transparent px-2 py-1 border rounded-md text-black"
                            placeholder="enter your Name..."
                          />
                     </div>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="email" className="font-semibold text-black">Email</label>
                          <input
                            onChange={inputHandler} 
                            value={signupDetails.email} 
                            type="email"
                            name="email"
                            id="email"
                            className="bg-transparent px-2 py-1 border rounded-md text-black"
                            placeholder="enter your Email..."
                          />
                     </div>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="password" className="font-semibold text-black">Password</label>
                          <input
                            onChange={inputHandler} 
                            value={signupDetails.password} 
                            type="password"
                            name="password"
                            id="password"
                            className="bg-transparent px-2 py-1 border focus:border-[#b4629e] rounded-md text-black"
                            placeholder="enter your Password..."
                          />
                     </div>
                     <button className="mt-2 bg-[#604058] hover:bg-[#633557] transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md">
                            Create Account
                     </button>
                     <p className="text-center text-black">
                            Already have an account ? <Link to='/login' className="cursor-pointer text-accent underline">Login</Link>
                     </p>
                </form>
            </div>
    </HomeLayout>
    );
}

export default Signup;