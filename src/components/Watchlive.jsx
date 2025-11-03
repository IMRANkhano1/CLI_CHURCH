import {
  Facebook,
  Globe,
  HeartPlus,
  MessageCircle,
  Users,
  Youtube,
} from "lucide-react";
import React from "react";

function Watchlive() {
  return (
    <div className="con mx-4 md:mx-6 lg:mx-6">
      <div className="con p-8 mt-8 ">
        <h1 className="font-bold text-3xl text-center text-black/80">
          How to Watch
        </h1>
        <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
          Multiple ways to join us online for worship and fellowship.
        </p>
      </div>
      <div className="my-6  grid grid-cols-1 md:grid-cols-3  gap-8  ">
        <div
          className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
        >
          <span className="block text-center text-2xl p-4 bg-blue-300/30 rounded-full ">
            <Facebook className="w-6 h-6  cursor-pointer  hover:text-blue-600 transition" />
          </span>
          <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
            Facebook Live
          </h2>
          <p className=" text-gray-600 font-semibold text-center">
            Join us on Facebook for live streaming with comments and reactions.
          </p>
          <button className="text-white w-full text-sm font-semibold px-3 py-2 rounded-xl bg-blue-500 hover:bg-blue-700 hover:text-white duration-300">
            Watch on Facebook
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
        >
          <span className="block text-center text-2xl p-4 bg-red-300/30 rounded-full ">
            <Youtube className="w-6 h-6 cursor-pointer hover:text-red-600 transition" />
          </span>
          <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
            YouTube Live
          </h2>
          <p className=" text-gray-600 font-semibold text-center">
            Watch on our YouTube channel with live chat and community
            interaction.
          </p>
          <button className="text-white w-full text-sm font-semibold px-3 py-2 rounded-xl bg-red-500 hover:bg-red-700 hover:text-white duration-300">
            Watch on YouTube
          </button>
        </div>
        <div
          className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
        >
          <span className="block text-center text-2xl p-4 bg-gray-300/50 rounded-full ">
            <Globe className="w-6 h-6 cursor-pointer hover:text-yellow-600 transition" />
          </span>
          <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
            Church Website
          </h2>
          <p className=" text-gray-600 font-semibold text-center">
            Watch directly on our website with the best streaming quality.
          </p>
          <button className="text-white w-full text-sm font-semibold px-3 py-2 rounded-xl bg-green-600 hover:bg-green-700 hover:text-white duration-300">
            Watch Here
          </button>
        </div>
      </div>
      {/* Features */}
      <div className="mission  md:mx-6 my-16  flex flex-col items-center space-y-5">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Interactive Features
          </h1>
          <p className="text-xl md:w-3/4 font-sans font-semibold text-center leading-10 text-gray-700">
            Engage with our online worship experience through various
            interactive elements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 -mx-2 my-6 ">
          <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
            <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
              <MessageCircle className="" />
            </span>
            <h1 className="font-bold text-black/80 text-xl">Live Chat</h1>
            <p className="text-sm text-gray-700  font-semibold">
              Connect with other viewers during the service
            </p>
          </div>
          <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
            <span className="font-bold text-xl  text-white w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              🙏
            </span>
            <h1 className="font-bold text-black/80 text-xl">Prayer Requests</h1>
            <p className="text-sm text-gray-700  font-semibold">
              Submit prayer requests during the service.
            </p>
          </div>
          <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
            <span className="font-bold text-xl  text-white w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
              <HeartPlus className="" />
            </span>
            <h1 className="font-bold text-black/80 text-xl">Online Giving</h1>
            <p className="text-sm text-gray-700  font-semibold">
              Contribute to offerings during the service
            </p>
          </div>
          <div className="border border-gray-300/50 rounded-xl shadow-lg p-6 text-center font-sans flex flex-col items-center space-y-3">
            <span className="font-bold text-xl  text-white w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Users className="" />
            </span>
            <h1 className="font-bold text-black/80 text-xl">
              Connection Cards
            </h1>
            <p className="text-sm text-gray-700  font-semibold">
              Fill out digital connection cards for follow-up
            </p>
          </div>
        </div>
      </div>
      {/* shedule */}
      <div className="mission   my-16  bg-gray-200/50 p-6 rounded-xl flex flex-col   space-y-5">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl pt-4 font-bold text-gray-900 text-center">
            Weekly Service Schedule
          </h1>
          <p className="text-xl md:w-3/4 font-sans font-semibold text-center  text-gray-700">
            Join us online for all our weekly services and special events.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6  my-4">
          <div className="flex flex-col items-center w-full bg-white gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
            <h3 className="font-heading text-lg font-bold text-gray-900">
              Sunday Morning
            </h3>
            <h4 className="font-heading  font-semibold text-green-700">
              9:00 AM - 10:30 AM
            </h4>
            <p className="texl-sm text-gray-600">
              Main worship service with communion
            </p>
          </div>

          <div className="flex flex-col items-center  w-full bg-white gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
            <h3 className="font-heading text-lg font-bold text-gray-900">
              Sunday Evening
            </h3>
            <h4 className="font-heading  font-semibold text-green-700">
              6:00 PM - 7:15 PM
            </h4>
            <p className="texl-sm text-gray-600">
              Contemporary service and prayer
            </p>
          </div>
          <div className="flex flex-col items-center w-full bg-white gap-2 p-8 border border-gray-200/50 shadow-lg rounded-xl">
            <h3 className="font-heading text-lg font-bold text-gray-900">
              Wednesday Night
            </h3>
            <h4 className="font-heading  font-semibold text-green-700">
              7:00 PM - 8:00 PM
            </h4>
            <p className="texl-sm text-gray-600">
              Bible study and prayer meeting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchlive;
