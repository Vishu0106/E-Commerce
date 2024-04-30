import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-hot-toast"

import HomeLayout from "../layouts/HomeLayout"
import { Link } from "react-router-dom";
import { isMailValid  } from "../helpers/regexMatcher.js"
import { useDispatch } from "react-redux";
import {login} from "../redux/slices/authSlice.js"

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signinDetails, setsigninDetails] = useState({
        email:'',
        password:'',
    });

    async function  onFormSubmit(e) {
        e.preventDefault();
        if(!signinDetails.email || !signinDetails.password) {
            toast.error("Please fill all the details");
            return;
        }
        if(!isMailValid(signinDetails.email)) {
            toast.error("Email is inValid");
            return;
        }
        const user = JSON.parse(localStorage.getItem("user"));
        if(!user) {
            toast.error("User not found");
            return;
        }
        if(!user.email === signinDetails.email || !user.password === signinDetails.password) {
            toast.error("Email or Password is incorrect");
            return;
        }
        await dispatch(login());
        localStorage.setItem("isLoggedIn",true);
        toast.success("Logged in successfully");
        navigate('/');
        setsigninDetails({
            email:'',
            password:'',
        });
    }

    function inputHandler(e) {
        const {name , value } = e.target;
        setsigninDetails({
            ...signinDetails,
            [name]: value
        })
    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[80vh] bg-[#F3F4F6]">
                <form
                onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white bg-white">
                    <h1 className="text-3xl text-center font-bold text-[#604058]">Login Page</h1>
                     <div className="flex flex-col gap-1">
                          <label htmlFor="email" className="font-semibold text-black">Email</label>
                          <input
                            onChange={inputHandler} 
                            value={signinDetails.email} 
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
                            value={signinDetails.password} 
                            type="password"
                            name="password"
                            id="password"
                            className="bg-transparent px-2 py-1 border rounded-md text-black"
                            placeholder="enter your Password..."
                          />
                     </div>
                     <button className="mt-2 bg-[#604058] hover:bg-[#633557] transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md">
                            Login
                     </button>
                     <p className="text-center text-black">
                            Not have an account ? <Link to='/signup' className="cursor-pointer text-accent underline">Signup</Link>
                     </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Login;