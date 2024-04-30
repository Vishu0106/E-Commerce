import React , { useState } from "react";
import { GrPrevious , GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";

import bannerOne from "../assets/banners/banner1.jpg";
import bannerTwo from "../assets/banners/banner2.webp";
import bannerThree from "../assets/banners/banner3.webp";

// image imports
import electronics from "../assets/electronics.avif";
import jwellery from "../assets/jwellery.avif";
import mens from "../assets/mens.avif";
import womens from "../assets/womens.avif";


function CatergorieCard({title,image}) {

   return(
    <Link to={`/products/category/${title.toLowerCase()}`} className="flex mt-3 w-[250px] items-center p-3 gap-5 bg-[#F3F4F6] transition ease-in-out duration-300 rounded-lg border border-[#604058] scale-100 hover:scale-110">
        <img className="w-12 h-12 rounded-lg scale-100" src={image} alt="categores"/>
        <p className="text-lg font-medium text-slate-600">{title}</p>
    </Link>
   )
}


function Home() {
    const images = [
        bannerOne,
        bannerTwo,
        bannerThree 
    ]
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
          const nextSlide = () => {
              setCurrentImageIndex((currentImageIndex + 1) % images.length);
          
          }
      
          const prevSlide = () => {
              setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
          
          }

    return (
        <div>
            <section className="relative">
                <button className="absolute top-1/2 left-0 transform translate-y-1/2 bg-transparent p-2"
                onClick={prevSlide}>
                    <GrPrevious />
                </button>
                <button className="absolute top-1/2 right-0 transform translate-y-1/2 bg-transparent p-2"
                onClick={nextSlide}>
                    <GrNext />
                </button>
                <img src={images[currentImageIndex]} alt={`slide ${currentImageIndex+1}`} className="w-full h-[50vh]"/>
            </section>
            <section>
                <div className="hidden sm:flex flex-col">
                    <h3 className="text-4xl pl-5 my-5 font-bold text-black">
                        Catergories
                    </h3>
                    <div className="flex flex-row items-center justify-around px-10 flex-wrap">
                        <CatergorieCard title={"Electronics"} image={electronics}/>
                        <CatergorieCard title={"Jwellery"} image={jwellery}/>
                        <CatergorieCard title={"MensClothing"} image={mens}/>
                        <CatergorieCard title={"WomensClothing"} image={womens}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;