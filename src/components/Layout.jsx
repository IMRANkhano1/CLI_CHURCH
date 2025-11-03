// new
import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, Close, ArrowDropDown } from "@mui/icons-material"; // Google icons
import Footer from "./Footer";

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/services", label: "Services" },
  { to: "/sermons", label: "Sermons" },
  { to: "/contact", label: "Contact" },
];
const serviceLinks = [
  { to: "/ministries", label: "Ministries" },
  { to: "/leadership", label: "Leadership" },
  { to: "/heritage", label: "Heritage" },
];
//mobile view links
const mobileLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/services", label: "Services" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/leadership", label: "Leadership" },
  { to: "/heritage", label: "Heritage" },
  { to: "/contact", label: "Contact" },
];

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showOthers, setShowOthers] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowOthers(false);
  }, [location]);
  // setShowOthers

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white w-full fixed top-0 z-50 shadow-md">
        <div className="px-4 md:px-10 py-4 mx-4 flex justify-between items-center h-16">
          {/* Logo */}
          <span className="text-green-700 font-heading font-bold text-2xl font-sans">
            CSI Church
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-bold text-gray-600 font-sans">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-green-700 font-bold" : ""
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Dropdown for Services */}
            {/* Dropdown for Others */}
            {/* Mobile Dropdown (click-to-toggle) */}
            <div className="relative">
              <button
                onClick={() => setShowOthers(!showOthers)}
                className="flex items-center justify-between w-full font-bold text-gray-700 hover:text-green-700"
              >
                Others <ArrowDropDown fontSize="small" />
              </button>
              {showOthers && (
                <div className="ml-3 mt-25 flex flex-col space-y-2 bg-white p-3 shadow-md rounded-md">
                  {serviceLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => {
                        setShowOthers(false);
                      }}
                      className="text-sm hover:text-green-700"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                  <button
                    onClick={() => setShowOthers((cur) => !cur)}
                    className="bg-green-700 text-white text-sm w-full rounded-sm py-[1px]  px-1 "
                  >
                    close
                  </button>
                </div>
              )}
            </div>
            <Link to="/watchlive">
              <button className="cursor-pointer bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition text-sm">
                Watch Live
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 cursor-pointer focus:outline-none hover:bg-gray-200/50 px-1 rounded-md"
            >
              {isOpen ? (
                <Close fontSize="medium" />
              ) : (
                <Menu fontSize="medium" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-14 right-0 w-1/2 bg-white shadow-lg z-40 transform transition-transform duration-300 rounded-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col space-y-5 font-bold text-gray-600 font-sans">
          {mobileLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-green-700 font-bold" : ""
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link to="/watchlive" onClick={() => setIsOpen(false)}>
            <button className="w-full cursor-pointer bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition text-sm">
              Watch Live
            </button>
          </Link>
        </div>
      </div>
      {/* main contents */}
      <div name="top" className="pt-16">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
