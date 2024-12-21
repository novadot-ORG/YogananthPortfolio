import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer id="footer" class="footer dark-background">
        <div class="container">
          <h3 class="sitename">Portfolio</h3>
          <p>
            We help you craft stunning websites and innovative solutions for
            your business needs.
            <br /> Our team of experts is committed to delivering top-notch
            services tailored to your requirements.
          </p>{" "}
          <div class="social-links d-flex justify-content-center">
            <a href="">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="">
              <i class="bi bi-skype"></i>
            </a>
            <a href="">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          <div class="container">
            <div class="copyright">
              <span>Copyright</span>{" "}
              <strong class="px-1 sitename">Portfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
            <div class="credits">
              Designed by{" "}
              <a href="https://novadot.co.uk/about-us/">NovaDot.Uk</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
