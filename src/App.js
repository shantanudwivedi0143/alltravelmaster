import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import DomesticPackages from "./pages/DomesticPackages";
import InternationalPackages from "./pages/InternationalPackages";
import PackageDetails from "./pages/PackageDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/domestic" element={<DomesticPackages />} />
        <Route path="/international" element={<InternationalPackages />} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}