import Homeicon from "../assets/shopping.png";
function Header() {
    return (
        <nav className="h-[10vh] shadow-lg bg-[#714B67]">
            <div className="flex items-center justify-between h-full pt-3 pb-3 px-10 ">
                <section className="text-3xl font-bold w-12">
                    <a href="/"><img src={Homeicon} alt="icon" /></a>
                </section>
                <section className="flex items-center gap-5">
                    <a className=" px-2 hover:bg-[#F3F4F6] text[#252733] rounded-sm text-lg translate-all ease-in-out duration-500" href="/products" >Products</a>
                    <a className=" px-2 hover:bg-[#F3F4F6] text-[#252733] rounded-sm text-lg translate-all ease-in-out duration-500"href="/cart">Cart</a>
                    <a className=" px-2 hover:bg-[#F3F4F6] text-[#252733] rounded-sm text-lg translate-all ease-in-out duration-500"href="/login">Login</a>
                </section>
            </div>
        </nav>
    )
}

export default Header;