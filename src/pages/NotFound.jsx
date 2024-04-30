import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
 return(
    <div className="h-[100vh] w-full bg-[#F3F4F6]">
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white shadow-xl ">
     <h1 className="text-9xl font-extrabold text-[#604058]">404</h1>
     <div className="bg-black text-white absolute px-2 text-sm rounded rotate-12">
        Page NotFound
     </div>
     <button className="mt-5">
        <Link onClick={()=>navigate(-1)} className="relative inline-block text-sm font-medium text-white active:text-white focus:outline-none">
                <span  className="relative block px-8 py-3 bg-[#604058] border border-current">Go Back</span>
        </Link>
     </button>
    </div>
    </div>
 );
}

export default NotFound;