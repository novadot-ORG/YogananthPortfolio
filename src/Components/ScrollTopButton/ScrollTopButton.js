import React, { useEffect, useState } from "react";
import "./ScrollTopButton.css";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
  
    window.addEventListener("scroll", toggleVisibility);

 
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
   
      <button
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "active" : ""}`}
        onClick={scrollToTop}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
};

export default ScrollTopButton;
