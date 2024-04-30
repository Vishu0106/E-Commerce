import Homeicon from "../assets/shopping.png";
import cart from "../assets/shopping-bag.png";
import menu from "../assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
    const [menuOpen,setMenuOpen] = useState(false);
    const [itemsInCart, setItemsInCart] = useState(0);
    const isLoggedIn = false;
    return (
        <>
        <nav className="h-[10vh]  bg-slate-100 sticky top-0 z-[20] mx-auto border-b-2">
            <div className="flex items-center justify-between h-full pt-3 pb-3 px-10 ">
                <section className="text-3xl font-bold w-12">
                    <a to="/"><img src={Homeicon} alt="icon" /></a>
                </section>
                <section className="hidden sm:flex items-center gap-5 ">
                    <Link to='/cart' className=" py-2 px-4 flex bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300"><img src={cart} className="w-5 h-5" alt="trolly" /><span>Cart({itemsInCart})</span></Link>
                    {!isLoggedIn?(<Link to='/login' className=" py-2 px-4  bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300">Login</Link>):(<Link to='/signup' className=" py-2 px-4  bg-[#9f628f] text-white text-sm font-bold rounded-md  hover:bg-[#714B67] translate-all ease-in-out duration-300" >Signup</Link>)}
                </section>
                <section className="bg-[#f5bee6] sm:hidden" onClick={()=>{setMenuOpen(!menuOpen)
                console.log("clicked")}}>
                    <img className="w-10 focus:outline-none" src={menu} alt="menu-burger"/>
                </section>
            </div>
                <div>
                    {
                        menuOpen && (
                            <div className="sm:hidden absolute top-[10vh] left-0 w-full bg-[#F3F4F6] shadow-lg py-2">
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/cart">Cart({itemsInCart})</Link>
                                <Link className="block py-2 px-4 text-[#9f628f] hover:bg-gray-200" to="/login">Login</Link>
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