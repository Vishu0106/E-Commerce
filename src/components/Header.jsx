import Homeicon from "../assets/shopping.png";
import cart from "../assets/shopping-bag.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import toast from "react-hot-toast";
function Header() {
    const [menuOpen,setMenuOpen] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload();
        dispatch(logout());
        toast.success("Logged out successfully");
    }
    return (
        <>
        <nav className="h-[10vh]  bg-slate-100 sticky top-0 z-[20] mx-auto border-b-2">
            <div className="flex items-center justify-between h-full pt-3 pb-3 px-10 ">
                <section className="text-3xl font-bold w-12">
                    <Link to="/"><img src={Homeicon} alt="icon" /></Link>
                </section>
                <section className="hidden sm:flex items-center gap-5 ">
                    <Link to='/cart' className=" py-2 px-4 flex bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300"><img src={cart} className="w-5 h-5" alt="trolly" /><span>Cart({itemsInCart})</span></Link>
                    {!isLoggedIn?(<Link to='/login' className=" py-2 px-4  bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300">Login</Link>):(<Link onClick={handleLogout} className=" py-2 px-4  bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300" >Logout</Link>)}
                </section>
                <section className=" sm:hidden" onClick={()=>{setMenuOpen(!menuOpen)
                console.log("clicked")}}>
                    {menuOpen?<ImCross className="text-3xl"/>:<TiThMenu className="text-3xl"/>}
                </section>
            </div>
                <div>
                    {
                        menuOpen && (
                            <div className="sm:hidden absolute top-[10vh] left-0 w-full bg-[#F3F4F6] shadow-lg py-2">
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/cart">Cart({itemsInCart})</Link>
                                {!isLoggedIn?(<Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/login">Login</Link>):(<Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" onClick={handleLogout}>Logout</Link>)}
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/categories/electronics">Electronics</Link>
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/categories/jwellery">Jewellery</Link>
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/categories/mens's clothing">Men's Clothing</Link>
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/women's clothing">Women's Clothing</Link>
                            </div>
                        )
                    }
                </div>
        </nav>
        </>
    )
}

export default Header;