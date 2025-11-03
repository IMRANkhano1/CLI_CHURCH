import React from "react";
import "../App.css";
function Services() {
  return (
    <>
      <div className="con px-4 my-12 mx-6">
        <div className=" mx-6 flex flex-col items-center">
          <h1 className="font-heading text-gray-900 font-bold text-3xl mb-4">
            Service Times
          </h1>
          <p className="text-lg font-semibold text-gray-600 text-center">
            Join us for worship, fellowship, and spiritual growth throughout the
            week.
          </p>
        </div>
        <div className="my-12  overflow-hidden border border-gray-100 bg-white w-full rounded-2xl shadow-lg">
          <div className="overflow-x-auto">
            <table className="  w-full ">
              <thead className="bg-gray-200/50 rounded-lg border-gray-300">
                <tr>
                  <th className="th">Day</th>
                  <th className="th">Service</th>
                  <th className="th">Time</th>
                  <th className="th">Description</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100/30">
                <tr className=" border-b border-gray-300/50">
                  <td className="td text-gray-900">Sunday</td>
                  <td className="td">Morning Worship</td>
                  <td className="td">09:00AM</td>
                  <td className="td">
                    Traditional worship service with communion
                  </td>
                </tr>

                <tr className=" border-b border-gray-300/50">
                  <td className="td text-gray-900">Sunday</td>
                  <td className="td">Morning Worship</td>
                  <td className="td">10:30AM</td>
                  <td className="td">Bible study for all ages</td>
                </tr>
                <tr className=" border-b border-gray-300/50">
                  <td className="td text-gray-900">Sunday</td>
                  <td className="td">Evening Service</td>
                  <td className="td">06:00PM</td>
                  <td className="td">Contemporary worship and prayer</td>
                </tr>
                <tr className=" border-b border-gray-300/50">
                  <td className="td text-gray-900">Wednesday</td>
                  <td className="td">Bible Study</td>
                  <td className="td">07:00PM</td>
                  <td className="td">Midweek Bible study and prayer meeting</td>
                </tr>
                <tr className=" border-b border-gray-300/50">
                  <td className="td text-gray-900">Friday</td>
                  <td className="td">Youth Fellowship</td>
                  <td className="td">07:00PM</td>
                  <td className="td">
                    Youth group activities and discipleship
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          <div
            className="flex flex-col items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">👨‍👩‍👧‍👦</span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Family Friends
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              All our services welcome families with children. We provide
              nursery care and children's programs during Sunday morning
              service.
            </p>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">🎵</span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Inspiring Worship
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Experience meaningful worship through contemporary and traditional
              music, led by our talented worship team and choir.
            </p>
          </div>
          <div
            className="flex flex-col  items-center justify-start space-y-6 border 
        border-gray-300/40 rounded-2xl shadow-lg p-8 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4">🤝</span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Warm Fellowship
            </h2>
            <p className=" text-gray-600 font-semibold text-center ">
              Connect with our welcoming community before and after services.
              Join us for coffee and fellowship in our community hall.
            </p>
          </div>
        </div>
        <div className=" my-14 p-12 bg-gray-200/50 rounded-2xl flex flex-col items-center">
          <div>
            <h1 className="font-heading text-gray-900 font-bold text-3xl">
              What to Expect
            </h1>
          </div>
          <div className="flex flex-col md:flex-row  gap-12 my-6 self-start">
            <div className="">
              <h2 className="font-heading text-gray-900 font-bold text-xl py-4">
                First-Time Visitors
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4">
                <li>Arrive 15 minutes early for parking and seating</li>
                <li>Dress comfortably - we welcome all styles</li>
                <li>
                  Visit our welcome center for information and a small gift
                </li>
                <li>
                  Feel free to participate as much or as little as you're
                  comfortable
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="font-heading text-gray-900 font-bold text-xl py-4">
                Service Elements
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-4">
                <li>Worship music (20-25 minutes)</li>
                <li>Biblical message (30-35 minutes)</li>
                <li>Prayer and communion (monthly)</li>
                <li>Fellowship time after service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
