import React from "react";
import lead1 from "../assets/lead1.jpg";
import lead2 from "../assets/lead2.jpg";
import lead3 from "../assets/lead3.jpg";
import lead4 from "../assets/lead4.jpg";
import lead5 from "../assets/lead5.jpg";
import lead6 from "../assets/lead6.jpg";
function Leadership() {
  return (
    <>
      <div className="mx-3 md:mx-8">
        {/* heading */}
        <div className="con p-4 md:p-8 mt-8 ">
          <h1 className="font-bold text-3xl text-center text-black/80">
            Our Leadership
          </h1>
          <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
            Meet the dedicated leaders who guide our church community with
            wisdom and compassion.
          </p>
        </div>
        {/* profile cards */}
        <div className="card my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*  card */}
          <div className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead1}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                Pastor David Thompson
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Senior Paster
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                Pastor David has been leading our congregation for over 15 years
                with a heart for biblical teaching and community outreach.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead2}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                Pastor Sarah Williams
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Associate Pastor
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                Pastor Sarah oversees our youth and family ministries, bringing
                energy and passion to connecting with the next generation.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead3}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                Michael Rodriguez
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Worship Leader
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                Michael leads our worship team with a heart for creating
                meaningful worship experiences that draw people closer to God.{" "}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead4}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                Elder Mary Johnson
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Church Elder
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                Elder Mary provides wise counsel and spiritual guidance, serving
                our community with decades of faithful service.{" "}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead5}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                James Chen
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Church Administrator
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                James manages our church operations and coordinates our various
                ministries with excellence and attention to detail.{" "}
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 border border-gray-200/50 p-8 rounded-xl shadow-lg 
          tansform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl
          "
          >
            <div className="img  flex justify-center items-center">
              <img
                src={lead6}
                alt="no img "
                className="rounded-full w-32 h-32"
              />
            </div>
            <div className="about flex flex-col items-center gap-2">
              <h2 className="text-xl text-gray-900 text-center font-heading font-bold">
                Lisa Anderson
              </h2>
              <h3 className="text-md text-green-700 font-semibold">
                Children's Director
              </h3>
              <p className="text-sm text-gray-600 text-center ">
                Lisa brings joy and creativity to our children's ministry,
                helping young hearts discover God's love through fun and
                engaging programs.
              </p>
            </div>
          </div>
        </div>
        {/* philoshopy */}
        <div className="mission mx-3 md:mx-12 my-16  flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Our Leadership Philosophy
          </h1>
          <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-8 md:leading-10 text-gray-700">
            We believe in servant leadership - leading by example, serving
            others, and following Christ's model of humility and love. Our
            leadership team is committed to shepherding our congregation with
            care, wisdom, and biblical integrity.
          </p>
          <div className="flex flex-col md:flex-row md:w-4/5 space-x-5 space-y-5">
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                🛡️
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Biblical Foundation
              </h1>
              <p className="text-gray-700  font-semibold">
                All our decisions and direction are grounded in Scripture
              </p>
            </div>

            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                ❤️
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Servant Hearts
              </h1>
              <p className="text-gray-700 font-semibold">
                We lead by serving others and putting their needs first
              </p>
            </div>
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                🤝
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Collaborative Spirit
              </h1>
              <p className="text-gray-700 font-semibold">
                We work together as a team, valuing each person's contribution{" "}
              </p>
            </div>
          </div>
        </div>
        {/* directors */}
        <div className="mission   my-16  flex flex-col  space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-900 text-center">
              Board of Directors
            </h1>
            <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
              Our board provides governance and oversight, ensuring our church
              operates with integrity and stays true to our mission and values.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6  my-4">
            <div className="flex flex-col items-center w-full  gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
              <h3 className="font-heading text-lg font-bold text-gray-900">
                John Smith
              </h3>
              <h4 className="font-heading  font-semibold text-green-700">
                Board Chairman
              </h4>
              <p className="texl-sm text-gray-600">15 years of service</p>
            </div>
            <div className="flex flex-col items-center w-full  gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Sarah Wilson
              </h3>
              <h4 className="font-heading  font-semibold text-green-700">
                Secretary
              </h4>

              <p className="texl-sm text-gray-600">8 years of service</p>
            </div>
            <div className="flex flex-col items-center  w-full gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Robert Garcia
              </h3>

              <h4 className="font-heading  font-semibold text-green-700">
                Treasurer
              </h4>
              <p className="texl-sm text-gray-600">12 years of service</p>
            </div>
            <div className="flex flex-col items-center w-full  gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
              <h3 className="font-heading text-lg font-bold text-gray-900">
                Emily Davis
              </h3>
              <h4 className="font-heading  font-semibold text-green-700">
                Board Member
              </h4>
              <p className="texl-sm text-gray-600">6 years of service</p>
            </div>
          </div>
        </div>
        {/* end */}
        <div className="mission mx-3 md:mx-12 my-12 md:my-16  flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Connect With Our Leaders
          </h1>
          <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
            Our leadership team is here to serve you. If you have questions,
            need prayer, or want to get involved, don't hesitate to reach out.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center my-4">
            <button className="text-lg font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
              Schedule Meeting
            </button>
            <button className="text-lg font-semibold text-green-700 px-4 py-2 outline-2 outline-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
              Prayer Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
