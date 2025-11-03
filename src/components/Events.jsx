import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const btns = ["All Events", "Worship", "Community", "Youth"];
function Events() {
  const [navInd, setNavInd] = useState(0);
  return (
    <>
      <div className="con px-4 my-12 mx-4 md:mx-6">
        <div className=" mx-6 flex flex-col items-center">
          <h1 className="font-heading text-gray-900 font-bold text-3xl mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg font-semibold text-gray-600 text-center">
            Join us for special events, fellowship opportunities, and community
            gatherings.
          </p>
        </div>

        <div className=" flex justify-center my-12">
          <nav className="inline-flex flex-wrap justify-center items-center  border border-gray-300/50 shadow-md p-1 rounded-lg">
            {btns.map((btn, ind) => {
              return (
                <>
                  <button
                    key={ind}
                    onClick={() => setNavInd(ind)}
                    className={`text-lg font-semibold  px-4 py-2 duration-300 rounded-lg ${
                      navInd === ind
                        ? "bg-green-700 text-white "
                        : "text-green-700 bg-white "
                    }`}
                  >
                    {btn}
                  </button>
                </>
              );
            })}
          </nav>
        </div>
        <div>
          {btns[navInd] === btns[0] && (
            <>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-green-700 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      09
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Easter Sunday Celebration
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Join us for a special Easter service celebrating the
                      resurrection of Jesus Christ. Special music, children's
                      program, and fellowship meal to follow.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        12:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        Main Sanctuary
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        worship
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-yellow-400 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      15
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Community Outreach Day
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Join our volunteer team as we serve the local community
                      with free meals, clothing distribution, and health
                      screenings.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" />
                        10:00 AM - 3:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> Community
                        Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        community
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-green-700 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      22
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Youth Retreat Weekend
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      A weekend retreat for teens and young adults featuring
                      worship, outdoor activities, and fellowship opportunities.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" />
                        Friday 6PM - Sunday 4PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        Mountain Retreat Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        youth
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-yellow-400 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      12
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      May
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Mother's Day Brunch
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Special celebration honoring mothers with a delicious
                      brunch and meaningful worship service.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 10:00 AM -
                        01:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> Fellowship
                        Hall
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" /> worship
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-green-700 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      10
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      June
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Vacation Bible School
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      A week-long program for children featuring Bible stories,
                      games, crafts, and music.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        12:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        Children's Ministry Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        youth
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {btns[navInd] === btns[1] && (
            <>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-green-700 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      09
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Easter Sunday Celebration
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Join us for a special Easter service celebrating the
                      resurrection of Jesus Christ. Special music, children's
                      program, and fellowship meal to follow.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        12:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        Main Sanctuary
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        worship
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-yellow-400 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      12
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      May
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Mother's Day Brunch
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Special celebration honoring mothers with a delicious
                      brunch and meaningful worship service.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 10:00 AM -
                        01:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> Fellowship
                        Hall
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" /> worship
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {btns[navInd] === btns[2] && (
            <>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-yellow-400 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      15
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Community Outreach Day
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      Join our volunteer team as we serve the local community
                      with free meals, clothing distribution, and health
                      screenings.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" />
                        10:00 AM - 3:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" /> Community
                        Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        community
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {btns[navInd] === btns[3] && (
            <>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-green-700 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      22
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      April
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Youth Retreat Weekend
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      A weekend retreat for teens and young adults featuring
                      worship, outdoor activities, and fellowship opportunities.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" />
                        Friday 6PM - Sunday 4PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        Mountain Retreat Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        youth
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-6 md:gap-12 p-8 shadow-lg border border-gray-200/50 rounded-xl hover:-translate-y-2 transform duration-300 ease-in-out">
                  <div className="bg-yellow-400 p-4 rounded-xl md:w-1/3 md:my-6 flex flex-col justify-center ">
                    <h1 className="font-bold text-3xl text-white text-center ">
                      10
                    </h1>
                    <h2 className="font-semibold text-lg text-white text-center ">
                      June
                    </h2>
                    <h3 className="text-sm font-semibold text-white/70 text-center ">
                      2024
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-heading font-bold text-gray-900 text-left">
                      Vacation Bible School
                    </h2>
                    <p className="text-justify  text-gray-600 font-md font-semibold ">
                      A week-long program for children featuring Bible stories,
                      games, crafts, and music.
                    </p>
                    <p className=" flex gap-2 flex-wrap">
                      <span className="flex items-center gap-2 text-justify text-gray-500 font-semibold   text-[12px]">
                        <Clock className="w-4 h-4 text-gray-500" /> 9:00 AM -
                        12:00 PM
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500 font-semibold   text-[12px]">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        Children's Ministry Center
                      </span>
                      <span className="flex items-center gap-2  text-justify  text-gray-500  font-semibold  text-[12px]">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        youth
                      </span>
                    </p>
                    <div className="flex gap-4">
                      <button className="text-md font-semibold text-white px-4 py-2  bg-green-700 rounded-lg">
                        Learn More
                      </button>
                      <button className="text-md font-semibold text-green-700 px-4 py-2 border border-green-700  hover:bg-green-700 hover:text-white duration-300 rounded-lg">
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col items-center p-4 space-y-6 pb-8 my-8">
            <h1 className="font-heading text-gray-900 text-3xl font-bold">
              Never Miss an Event
            </h1>
            <p className="text-lg font-semibold text-gray-600 text-center md:w-1/2">
              Stay updated on all our upcoming events and special programs. Sign
              up for our newsletter or follow us on social media.
            </p>
            <button className=" bg-green-700 px-4 py-2 rounded-xl font-bold text-white">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
