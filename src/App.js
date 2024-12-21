import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Layout/Footer/Footer";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import ScrollTopButton from "./Components/ScrollTopButton/ScrollTopButton";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollTopButton />
      <Footer />
    </div>
  );
}

export default App;
