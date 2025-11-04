import React, { useCallback, useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBible } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import Slider from './Slider.jsx'
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  
  const navigate = useNavigate();
 
  const goto=useCallback((path)=>{
    navigate(path)
  },[navigate])
 
  return (
    <>
      {/* main container */}   
     <Slider/>
      <section>
        <div className=" flex flex-col items-center gap-4 my-16 ">
          <h1 className=" text-4xl text-center font-bold text-black opacity-90 max-w-3xl">
            Experience God's Love
          </h1>
          <p className="text-center  text-xl text-gray-700 max-w-3xl">
            We are a vibrant community committed to worship, fellowship, and
            service. Discover your place in God's family with us.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 p-4 px-6 my-16 md:px-12">
          <div className="flex flex-col items-center flex-grow-1  py-4 border border-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <span className="my-8">
              <MdAccessTime size={30} color="green" />
            </span>
            <h1 className="text-xl text center font-bold ">Service Times</h1>
            <p className="text-gray-700  text-center  p-4">
              Join us for worship every Sunday at 9:00 AM for our main service,
              and 6:00 PM for evening service. Youth fellowship on Fridays at
              7:00 PM.
            </p>
            <button
              onClick={()=>goto("/services")}
              className="  p-2 m-4 rounded-lg text-green-700 text-sm font-bold   hover:bg-gray-200  cursor-pointer"
            >
              View Full Schedule
            </button>
          </div>
          <div className="flex flex-col items-center flex-grow-1  py-4 border border-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <span className="my-8">
              <FaUsers size={40} color="green" />
            </span>
            <h1 className="text-xl text center font-bold ">Our Ministries</h1>
            <p className="text-gray-700  text-center  p-4">
              From children's ministry to senior care, we have something for
              every stage of life. Find your calling and serve with purpose.
            </p>
            <button
              onClick={()=>goto("/ministries")}
              className="  p-2 m-4 rounded-lg text-green-700 text-sm font-bold  hover:bg-gray-200 cursor-pointer"
            >
              Explore Ministries
            </button>
          </div>
          <div className="flex flex-col items-center flex-grow-1  py-4 border border-gray-100 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <span className="my-8">
              <MdEvent size={40} color="green" />
            </span>
            <h1 className="text-xl text center font-bold ">Upcoming Event</h1>
            <p className="text-gray-700  text-center  p-4">
              Easter Sunday Celebration - April 9, 2024 • 9:00 AM. Special
              Service & Fellowship. Join us for this special celebration!
            </p>
            <button
              className="  p-2 m-4 hover:cursor-pointer rounded-lg text-green-700 text-sm font-bold  hover:bg-gray-200 cursor-pointer"
              onClick={()=>goto("/events")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 md:px-12">
          <div className="flex-grow-1 p-4 md:w-1/2">
            <h1 className="text-4xl font-bold opacity-80 font-sans">
              About Our Church
            </h1>
            <p className="text-lg text-gray-700 my-4 font-sans">
              For over 75 years, CSI Church has been a beacon of hope and faith
              in our community. We are committed to spreading God's love through
              worship, fellowship, and service to others.
            </p>
            <p className="text-lg text-gray-700 my-4 font-sans">
              Our mission is to create a welcoming environment where people can
              encounter God, grow in their faith, and make a positive impact in
              the world around them.
            </p>
            <p className=" text-gray-700 my-4 flex">
              <div className="place-self-center py-4 ps-0 pe-6">
                {/* <FaHeart size={20} color="red" /> */}
                <MdFavorite
                  size={20}
                  color="crimson"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 
                   drop-shadow-[0_0_10px_rgba(255,0,100,0.7)]"
                />
              </div>
              <div>
                <span className="text-md font-bold font-sans text-black block">
                  Worship & Prayer
                </span>
                <p>Authentic worship that draws us closer to God</p>
              </div>
            </p>
            <div className=" text-gray-700 my-4 flex my-4">
              <div className="place-self-center py-4 ps-0 pe-6">
                <FaBible size={20} className="text-rose-900 drop-shadow-md" />
              </div>
              <div>
                <span className="text-md font-bold font-sans text-black block">
                  Biblical Teaching
                </span>
                <p>Grounded in Scripture and relevant to daily life</p>
              </div>
            </div>
            <div className=" text-gray-700 my-4 flex">
              <div className="place-self-center py-4 ps-0 pe-6">
                <FaHandshake size={20} className="text-yellow-600" />
              </div>
              <div>
                <span className="text-md font-bold font-sans text-black block">
                  Community Service
                </span>
                <p>Serving our neighbors with compassion and grace</p>
              </div>
            </div>
            <button className="bg-green-600 text-md font-bold font-sans text-center py-3 px-6 rounded-lg text-white my-4">
              Learn More About Us
            </button>
          </div>
          <div className="relative flex-grow-1 p-2 md:w-1/2 p-4 ">
            <img
              src={img2}
              alt="no image"
              className=" w-full h-auto rounded-lg "
            />
            <div className="absolute bg-yellow-400 left-0 bottom-0 p-6 rounded-lg">
              <h1 className="text-xl  text-center font-extrabold">75+</h1>
              <p className=" font-semibold text-green-950">Years of Service</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
