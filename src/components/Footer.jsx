import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube, FaMusic, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="  px-4 py-14 md:px-16 bg-gray-900">
        <div className="flex flex-col md:flex-row ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8  py-4 text-white">
            <div>
              <h1 className="font-heading font-bold text-2xl ">CSI Church</h1>
              <p className="text-gray-300 py-6">
                A community of faith, hope, and love, growing together in
                Christ's grace for over 75 years.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="visit our facebook page."
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 hover:cursor-pointer"
                >
                  <FaFacebook
                    size={20}
                    className="bg-gray-800 p-0 rounded-2xl"
                  />
                </a>
                <a
                  href="#"
                  aria-label="visit our youtube channel"
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 hover:cursor-pointer"
                >
                  <FaYoutube
                    size={20}
                    className="bg-gray-800 p-0 rounded-2xl"
                  />
                </a>
                <a
                  href="#"
                  aria-label=""
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 hover:cursor-pointer"
                >
                  <FaMusic size={22} className="bg-gray-800 p-0 rounded-2xl" />
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="font-heading font-bold text-lg">Quick Links</h1>
              <ul className="py-6 flex flex-col gap-3">
                <li>
                  <Link to="/about">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      About Us
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/services">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Service Times
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/ministries">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Ministries
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/events">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Events
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/sermons">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Sermons
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-heading font-bold text-lg">Resources</h1>
              <ul className="py-6 flex flex-col gap-3">
                <li>
                  <Link to="/giving">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Online Giving
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/contact">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Prayer Requests
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/leadership">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Leadership
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/heritage">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Heritage
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <span className="text-gray-300 hover:text-white cursor-pointer">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h1 className="font-heading font-bold text-lg">Contact Info</h1>
              <ul className="py-6 pb-14 flex flex-col gap-3">
                <li>
                  <span className="text-gray-300 flex hover:text-white cursor-pointer">
                    <MdLocationOn size={20} />
                    <span className="px-2">
                      123 Church Street <br></br>Springfield, ST 12345
                    </span>
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 flex hover:text-white cursor-pointer">
                    <FaPhoneAlt size={16} />
                    <span className="px-2">(555) 123-4567</span>
                  </span>
                </li>
                <li>
                  <span className="text-gray-300 flex hover:text-white cursor-pointer">
                    <MdEmail size={20} />
                    <span className="px-2">info@csichurch.org</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-gray-300/30" />

        <div className="flex-col md:flex-row flex justify-between py-4">
          <div className="self-center py-4">
            <span className="text-gray-400 hover:text-white ">
              © 2024 CSI Church. All rights reserved.
            </span>
          </div>
          <div className="flex self-center space-x-6 py-4">
            <div>
              <Link to="/about">
                <span className="text-gray-400 hover:text-white ">
                  Privacy Policy
                </span>
              </Link>
            </div>
            <div>
              <Link to="/about">
                <span className="text-gray-400 hover:text-white ">
                  Terms of Service
                </span>
              </Link>
            </div>
            <div>
              <span className="text-sm text-gray-400 hover:text-white p-1 px-2 rounded-lg bg-gray-800">
                CSI Certified
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
