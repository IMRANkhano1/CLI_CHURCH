import React from "react";
import "../App.css";
import { Baby, Heart, Users, User, Handshake } from "lucide-react";
function Ministries() {
  return (
    <>
      <div className="con px-4 my-12 mx-6">
        <div className=" mx-6 flex flex-col items-center">
          <h1 className="font-heading text-gray-900 font-bold text-3xl mb-4">
            Our Ministries
          </h1>
          <p className="text-lg font-semibold text-gray-600 text-center">
            We offer a variety of ministries to help you grow in faith and serve
            others at every stage of life.
          </p>
        </div>

        <div className="my-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          <div
            className="flex flex-col items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <Baby className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Children's Ministry
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Fun, age-appropriate programs that help children discover God's
              love through stories, games, and activities.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <Users className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Youth Ministry
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Engaging programs for teens including fellowship, service
              projects, and spiritual growth opportunities.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <Users className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Adult Fellowship
            </h2>
            <p className=" text-gray-600 font-semibold text-center ">
              Small groups, Bible studies, and fellowship opportunities for
              adults to grow together in faith.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <Heart className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Women's Ministry
            </h2>
            <p className=" text-gray-600 font-semibold text-center ">
              Supporting women through Bible study, prayer groups, and community
              service activities.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <Handshake className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Men's Ministry
            </h2>
            <p className=" text-gray-600 font-semibold text-center ">
              Building brotherhood through fellowship, service projects, and
              spiritual accountability.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">
              <User className="w-8 h-8 text-green-700" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Senior Ministry
            </h2>
            <p className=" text-gray-600 font-semibold text-center ">
              Honoring our seniors with fellowship, pastoral care, and
              opportunities to share their wisdom.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 rounded-xl hover:bg-gray-200/50 duration-300">
              Learn more
            </button>
          </div>
        </div>
        <div className="mission  m-12 my-16  flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Ready to Get Involved?
          </h1>
          <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
            God has given each of us unique gifts and talents to serve His
            kingdom. Whether you're new to faith or have been walking with Jesus
            for years, there's a place for you to make a difference.
          </p>
          <div className="flex flex-col md:flex-row md:w-3/4 space-x-5 space-y-5">
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                🤲
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Discover Your Gifts
              </h1>
              <p className="text-gray-700  font-semibold">
                Take our spiritual gifts assessment to find where you can serve
                best.
              </p>
            </div>
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                👥
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Connect With Others
              </h1>
              <p className="text-gray-700 font-semibold">
                Join a ministry team and build meaningful relationships.
              </p>
            </div>
            <div className="text-center font-sans flex flex-col items-center space-y-4">
              <span className="font-bold text-2xl  text-white w-15 h-15 bg-green-700 rounded-full flex items-center justify-center">
                💫
              </span>
              <h1 className="font-bold text-black/80 text-xl">
                Make an Impact
              </h1>
              <p className="text-gray-700 font-semibold">
                Use your talents to serve God and bless others in your
                community.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center my-4">
            <button className="text-lg font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
              Join a Ministry
            </button>
            <button className="text-lg font-semibold text-green-700 px-4 py-2 outline-2 outline-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ministries;
