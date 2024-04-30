import React , { useState } from "react";
import { GrPrevious , GrNext } from "react-icons/gr";

import bannerOne from "../assets/banners/banner1.jpg";
import bannerTwo from "../assets/banners/banner2.webp";
import bannerThree from "../assets/banners/banner3.webp";


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
            <section className="mt-3 px-3  flex flex-col">
                <h1 className="text-3xl font-semibold sm:text-center text-gray-800">Top Products..</h1>
                <div className="mt-2 bg-[#F3F4F6] border rounded-sm">
                        
                </div>
            </section>
        </div>
    );
}

export default Home;