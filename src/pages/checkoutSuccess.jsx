import { AiFillCheckCircle } from "react-icons/ai";
import HomeLayout from "../layouts/HomeLayout";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/slices/cartSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";

function CheckoutSuccess() {

    const dispatch = useDispatch();
    const {state} = useLocation();
    useEffect(()=>{
        dispatch(deleteCart());
        toast.success("Order Placed Successfully");
    },[])

  return (
    <HomeLayout>
        <div className="min-h-[90vh] flex items-center justify-center text-slate-900">
             <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                <h1 className="bg-[#604058] absolute text-center top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
                    Payment Sucessfull
                </h1>
                <div className="px-4 flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-lg font-semibold text-slate-900">
                        Order Placed
                    </h2>
                    <p className="text-left text-slate-900">
                      your order has on the way to Address
                    </p>
                </div>
                <AiFillCheckCircle className="text-5xl text-green-500 mt-2"/>
                <p className="text-left text-slate-900 ml-2">
                     <span className="text-lx font-bold">FullName :</span> {state?.fullName} <br/>
                     <span className="text-lx font-bold">Adress :</span>{state?.address} <br/>
                     <span className="text-lx font-bold">Zipcode :</span>{state?.zipcode}
                    </p>
                <Link to="/" className="bg-[#604058] hover:bg-[#60405] transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-center rounded-br-lg rounded-bl-lg">
               <button>Continue Shopping</button>           
              </Link>
             </div>

        </div>
    </HomeLayout>
  );
}

export default CheckoutSuccess;