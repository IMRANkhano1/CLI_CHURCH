import React from "react";
import { Youtube, Facebook, Mail, Phone } from "lucide-react";
import { Clock, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <div className="mx-6">
        <div className="con p-8 mt-8 ">
          <h1 className="font-bold text-3xl text-center text-black/80">
            Get in Touch
          </h1>
          <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border border-gray-300/50 rounded-lg p-6 shadow-lg">
            <form action="">
              <h1 className="font-heading pb-4 text-2xl text-gray-900 font-bold">
                Send us a Message
              </h1>
              <label
                htmlFor=""
                className="text-green-700 text-md font-semibold"
              >
                Full Name
              </label>
              <br />
              <input
                type="text"
                name="uname"
                id=""
                className="w-full border border-gray-200 rounded-lg py-2 px-4 my-2 text-sm placeholder:text-gray-400 font-semibold outline-green-600"
                placeholder="Your full name"
                required
              />
              <br />
              <label
                htmlFor=""
                className="text-green-700 text-md font-semibold"
              >
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                id=""
                className="w-full border border-gray-200 rounded-lg py-2 px-4 my-2 text-sm placeholder:text-gray-400 font-semibold outline-green-600"
                placeholder="Your@gmail.com"
                required
              />
              <br />
              <label
                htmlFor=""
                className="text-green-700 text-md font-semibold"
              >
                Subject
              </label>
              <br />
              <input
                type="text"
                name="subject"
                id=""
                className="w-full border border-gray-200 rounded-lg py-2 px-4 my-2 text-sm placeholder:text-gray-400 font-semibold outline-green-600"
                placeholder="How can we help you?"
                required
              />
              <br />
              <label
                htmlFor=""
                className="text-green-700 text-md font-semibold"
              >
                Message
              </label>
              <br />
              <textarea
                name="message"
                id=""
                className="w-full border border-gray-200 rounded-lg py-2 px-4 my-2 text-sm placeholder:text-gray-400 font-semibold outline-green-600"
                placeholder="Your message..."
                rows="5"
              ></textarea>
              <br />
              <input
                type="submit"
                id=""
                className="w-full border bg-green-700 cursor-pointer text-white border-gray-200 rounded-lg py-2 px-4 my-2 text-md font-semibold"
                value="Send Message"
              />
            </form>
          </div>
          <div className="flex flex-col gap-8">
            {/* contact info */}
            <div className="flex flex-col space-y-6 p-6 border border-gray-200/50 shadow-lg rounded-xl">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 ">
                  Contact Information
                </h1>
              </div>
              <div className="flex space-x-3">
                <p className="items-start p-4 text-green-700">
                  <MapPin className="w-6 h-6 " />
                </p>
                <p className="flex flex-col ">
                  <span className="text-gray-900 items-start text-lg font-semibold">
                    Address
                  </span>
                  <span className="text-gray-500 items-start">
                    123 Church Street Springfield, ST 12345
                  </span>
                </p>
              </div>
              <div className="flex space-x-4">
                <p className="items-start p-4 text-green-700">
                  <Phone className="w-6 h-6 " />
                </p>
                <p className="flex flex-col ">
                  <span className="text-gray-900 items-start text-lg font-semibold">
                    Phone
                  </span>
                  <span className="text-gray-500 items-start">
                    (555) 13-4567
                  </span>
                </p>
              </div>
              <div className="flex space-x-4">
                <p className="items-start p-4 text-green-700">
                  <Mail className="w-6 h-6 " />
                </p>
                <p className="flex flex-col space-y-2">
                  <span className="text-gray-900 items-start text-lg font-semibold">
                    Email
                  </span>
                  <span className="text-gray-500 items-start">
                    info@csichurch.org
                  </span>
                </p>
              </div>
            </div>
            {/* office timing */}
            <div className="p-6 border border-gray-300/50 rounded-lg shadow-lg">
              <h1 className="pb-4 flex items-center gap-2 font-bold font-heading text-2xl text-gray-900">
                <span>
                  <Clock className="w-6 h-6 " />
                </span>
                Office Hours
              </h1>
              <div className="grid grid-cols-2">
                <ul className="space-y-4 text-gray-600 ">
                  <li>Monday - Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
                  <li>Sunday</li>
                </ul>
                <ul className="space-y-4 text-gray-600 ">
                  <li>9:00 AM - 5:00 PM</li>
                  <li>9:00 AM - 3:00 PM</li>
                  <li>By Appointment</li>
                  <li>8:00 AM - 1:00 PM</li>
                </ul>
              </div>
            </div>
            {/* location */}
            <div className="p-6 border border-gray-300/50 bg-gray-400/40 rounded-lg shadow-lg">
              <div className="flex flex-col items-center p-12">
                <span className="text-gray-600/70 ">
                  <MapPin className="w-10 h-10" />
                </span>
                <h1 className="text-center text-xl font-semibold text-gray-700/70">
                  Google Maps Integration
                </h1>
                <p className="text-sm text-gray-600 font-semibold text-center">
                  Interactive map would be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="con p-8 mt-8 ">
          <h1 className="font-bold text-3xl text-center text-black/80">
            Other Ways to Connect
          </h1>
          <p className="text-center font-semibold text-xl  text-gray-600 max-w-3xl mx-auto py-4 ">
            Find us on social media or join us for worship and fellowship.
          </p>
        </div>
        <div className="my-16  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          <div
            className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4 bg-gray-300/50 rounded-full ">
              <Facebook className="w-6 h-6  cursor-pointer  hover:text-blue-600 transition" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Facebook
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Follow us for updates, photos, and community discussions.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 border border-green-700 rounded-xl hover:bg-green-700 hover:text-white duration-300">
              Follow Us
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4 bg-gray-300/50 rounded-full ">
              <Youtube className="w-6 h-6 cursor-pointer hover:text-red-600 transition" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Youtube
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Watch our sermons and special events online.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 border border-green-700 rounded-xl hover:bg-green-700 hover:text-white duration-300">
              Subscribe
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-start space-y-4 border 
        border-gray-300/40 rounded-2xl shadow-lg p-6 transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl "
          >
            <span className="block text-center text-2xl p-4 bg-gray-300/50 rounded-full ">
              <Mail className="w-6 h-6 cursor-pointer hover:text-yellow-600 transition" />
            </span>
            <h2 className="font-heading text-xl text-gray-900 font-bold text-center">
              Newsletter
            </h2>
            <p className=" text-gray-600 font-semibold text-center">
              Get weekly updates and announcements via email.
            </p>
            <button className="text-green-700 text-sm font-semibold px-3 py-2 border border-green-700 rounded-xl hover:bg-green-700 hover:text-white duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
