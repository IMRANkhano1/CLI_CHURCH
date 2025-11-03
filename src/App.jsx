import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ministries from "./components/Ministries";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Layout from "./components/Layout";
import Events from "./components/Events";
import Sermons from "./components/Sermons";
import Leadership from "./components/Leadership";
import Heritage from "./components/Heritage";
import Contact from "./components/Contact";
import Watchlive from "./components/Watchlive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/watchlive" element={<Watchlive />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
