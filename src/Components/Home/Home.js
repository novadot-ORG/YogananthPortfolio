import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import "./Home.css";
import AOS from "aos";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
   AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);
  
 
  useEffect(() => {
    const selectTyped = document.querySelector(".typed");
    if (selectTyped) {
      const typed_strings = selectTyped.getAttribute("data-typed-items").split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {/* Show preloader while loading */}
      {loading && <div id="preloader"></div>}

      {/* Main content */}
      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img
            src="https://wallpapercave.com/wp/wp4339383.jpg"
            alt=""
            data-aos="fade-in"
          />
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h2>Yogananth Balasekar</h2>
            <p>
              I'm{" "}
              <span
                className="typed"
                data-typed-items="React Developer,Web Developer"
              >
                Frontend Developer
              </span>
              <span className="typed-cursor typed-cursor--blink"></span>
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};




export default Home