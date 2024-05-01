import {BsFacebook, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between sm:px-20 text-white bg-[#252733]">
                <section className='felx flex-col items-center justify-center'>
                    <p>CopyRight {year} | All Rights Reserved</p>
                    <p>
                    Developed by <a href="https://www.linkedin.com/in/vishnuvardhan-kattameedi-01junue" className="underline text-sm"> @_Vishnu_Vardhan_Kattameedi....
                    </a>
                    </p>  
                </section>
                <section className="flex
                 items-center justify-center gap-5 text-zxl text-white">
                    <a href="#" className="hover:text-[#919db6] translate-all ease-in-out duration-300"><BsFacebook/></a>
                    <a href="#" className="hover:text-[#F3F4F6] translate-all ease-in-out duration-300"><BsInstagram/></a>
                    <a href="#" className="hover:text-[#F3F4F6] translate-all ease-in-out duration-300"><BsLinkedin/></a>
                    <a href="#" className="hover:text-[#F3F4F6] translate-all ease-in-out duration-300"><BsGithub/></a>
                </section>
                
            </footer>
        </>
    )
}

export default Footer;