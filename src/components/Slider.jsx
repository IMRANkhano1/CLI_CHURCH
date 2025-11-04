import React from 'react'
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import  { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Welcome to CSI Church",
    subtitle:
      "A community of faith, hope, and love. Join us as we grow together in Christ's grace.",
  },
  {
    id: 2,
    image: img2,
    title: "Experience God's Love",
    subtitle:
      "Discover your place in God's family through worship, fellowship, and service.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Growing Together in Faith",
    subtitle:
      "Join our vibrant community as we learn, serve, and worship together.",
  },
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentSlideData = slides[currentSlide];
    return (
         <section className="relative  h-[600px] lg:h-[700px] overflow-hidden ">
        {/* background image */}

        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt=""
           loading={index === currentSlide ? "eager" : "lazy"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
         ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        {/* background overlay */}
        <div className="absolute inset-0 bg-green-800/50"></div>
        <div className="relative z-10  text-white text-center h-full flex items-center justify-center  ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {currentSlideData.title}
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              {currentSlideData.subtitle}
            </p>
            {/* join and live button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              {/* <Link to="/services"> */}
              <button
                onClick={()=>goto("/services")}
                className="bg-yellow-400 hover:cursor-pointer text-black/80 px-8 py-2 rounded-lg font-bold text-lg hover:bg-yellow-500/90 mx-auto md:mx-2"
              >
                Join Us Sunday
              </button>
              {/* </Link> */}
              {/* <Link to="/watchlive"> */}
              <button
                onClick={()=>goto("/watchlive")}
                className="bg-white hover:cursor-pointer  text-black/80 font-bold px-8 py-2 rounded-lg text-lg hover:text-green-700 hover:bg-white/90  mx-auto md:mx-2"
              >
                Watch Live
              </button>
              {/* </Link> */}
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-opacity ${
                    index === currentSlide
                      ? "bg-white opacity-100"
                      : "bg-white opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Slider
