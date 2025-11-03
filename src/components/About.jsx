import React from "react";
import Img from "../assets/hero1.jpg";
import Img2 from "../assets/mukan.jpg";

function About() {
  return (
    <>
      <div className="con p-8 mt-8 ">
        <h1 className="font-bold text-4xl text-center text-black/80">
          About CSI Church
        </h1>
        <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
          Learn about our history, mission, and the people who make our church
          family special.
        </p>
      </div>
      <div className=" main p-4 md:flex">
        <div className="md:w-1/2 md:m-4">
          <h1 className="font-bold text-3xl   text-black/80">Our Story</h1>
          <div className=" text-lg  text-gray-600 py-4 text-justify">
            <p className="py-2 font-semibold">
              Founded in 1947, CSI Church began as a small congregation with a
              big vision - to create a place where people from all walks of life
              could come together to worship, grow, and serve. Over the decades,
              we have remained steadfast in our commitment to biblical teaching
              and community service.
            </p>
            <br />
            <p className="py-2 font-semibold">
              Today, we are a thriving community of believers who are passionate
              about making a difference in our neighborhood and beyond. Our
              doors are open to everyone, regardless of background, and we
              believe that together we can make a positive impact in the world.
            </p>
          </div>
          <ul className=" text-lg text-gray-900 flex flex-col space-y-6 ">
            <li className="flex items-center space-x-3 ">
              <span className="font-bold   text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                75+
              </span>
              <span className="font-semibold">
                Years of faithful service to our community.
              </span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="font-bold  p-2  text-black w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                500+
              </span>
              <span className="font-semibold">Active members and growing.</span>
            </li>
            <li className="flex items-center space-x-3 ">
              <span className="font-bold   text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                12
              </span>
              <span className="font-semibold">
                Different ministries serving all ages.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex my-6 md:w-1/2 self-center md:m-4">
          <img src={Img} alt="no img found" className="rounded-lg" />
        </div>
      </div>
      <div className="mission  m-12  flex flex-col items-center space-y-5">
        <h1 className="text-3xl font-bold text-black/80">Our Mission</h1>
        <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
          "To create a loving, welcoming community where people can encounter
          Jesus Christ, grow in their faith, and be equipped to serve God and
          others with joy and purpose."
        </p>
        <div className="flex flex-col md:flex-row md:w-3/4 space-x-5 space-y-5">
          <div className="text-center font-sans flex flex-col items-center space-y-4">
            <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
              🙏
            </span>
            <h1 className="font-bold text-black/80 text-xl">Worship</h1>
            <p className="text-gray-700  font-semibold">
              Honoring God through authentic praise and prayer.
            </p>
          </div>
          <div className="text-center font-sans flex flex-col items-center space-y-4">
            <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
              📖
            </span>
            <h1 className="font-bold text-black/80 text-xl">Learn</h1>
            <p className="text-gray-700 font-semibold">
              Growing in knowledge and understanding of God's Word.
            </p>
          </div>
          <div className="text-center font-sans flex flex-col items-center space-y-4">
            <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
              ❤️
            </span>
            <h1 className="font-bold text-black/80 text-xl">Serve</h1>
            <p className="text-gray-700 font-semibold">
              Demonstrating Christ's love through acts of service.
            </p>
          </div>
        </div>
      </div>
      <div className="m-8 shadow-xl p-12 bg-white rounded-lg  grid md:grid-cols-2 gap-4 items-center">
        <div>
          <img src={Img2} alt="no img load" className="rounded-full" />
        </div>
        <div className="space-y-5">
          <h2 className="font-heading text-3xl font-semibold text-gray-900 leading-relaxed">
            A Welcome from Pastor David
          </h2>
          <p className="text-lg font-semibold text-gray-600 leading-relaxed">
            "Welcome to CSI Church! Whether you're visiting for the first time
            or have been part of our family for years, I want you to know that
            you are loved and valued here. Our church is more than a building -
            it's a community of people who are on a journey of faith together."
          </p>
          <p className="text-lg font-semibold text-gray-600 leading-relaxed">
            "I invite you to explore what it means to be part of our church
            family. Come as you are, and discover how God wants to work in your
            life and through you to bless others."
          </p>
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-gray-900">
              Pastor David Thompson
            </h2>
            <h3 className="text-green-600 font-bold">Senior Pastor</h3>
            <h3 className="text-gray-600 font-semibold">
              15 years serving CSI Church
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className=" p-8 space-y-8">
          <h1 className="font-heading text-3xl font-bold text-gray-900 text-center">
            Our Journey
          </h1>
          <p className="text-lg text-center font-semibold  text-gray-600">
            Key milestones in our church's history
          </p>
        </div>
        <div className="my-5 mx-6 space-y-8">
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
                1947
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Church Founded
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                CSI Church was established with 25 founding members who shared a
                vision of creating a welcoming community centered on Christ's
                love.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-yellow-400 px-4 py-2 rounded-xl font-bold text-gray-900">
                1963
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                New Sanctuary Built
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                As our congregation grew, we built our current sanctuary to
                accommodate our expanding church family and provide a beautiful
                space for worship.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
                1985
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Community Outreach Begins
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                We launched our first community outreach programs, including
                food distribution and support for local families in need.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-yellow-500 px-4 py-2 rounded-xl font-bold text-gray-900">
                2009
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Pastor David Arrives
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                Pastor David Thompson joined our church family, bringing fresh
                vision and energy to our ministries and community outreach
                efforts.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:space-x-6 space-y-5">
            <div className="">
              <button className="md:w-32 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
                2020
              </button>
            </div>
            <div>
              <h2 className=" font-bold text-gray-900 text-2xl pb-4">
                Digital Ministry Launch
              </h2>
              <p className="text-lg text-gray-600 font-semibold pb-4">
                We embraced technology to continue serving our community during
                challenging times, launching online services and digital
                ministry programs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 space-y-6 pb-8 mb-12">
        <h1 className="font-heading text-gray-900 text-3xl font-bold">
          Ready to Join Our Family?
        </h1>
        <p className="text-lg font-semibold text-gray-600 text-center md:w-1/2">
          We would love to welcome you to CSI Church. Come and see what God is
          doing in our community.
        </p>
        <button className="md:w-38 bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
          Plan Your Visit
        </button>
      </div>
    </>
  );
}

export default About;
