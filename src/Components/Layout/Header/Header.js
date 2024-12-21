import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active link
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("mobile-nav-active");
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    const parent = e.currentTarget.parentNode;
    parent.classList.toggle("active");
    parent.nextElementSibling.classList.toggle("dropdown-active");
    e.stopImmediatePropagation();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add scrolled class if scrolled more than 50px
      } else {
        setIsScrolled(false); // Remove scrolled class if less than 50px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToggle();
        }
      });
    });

    const dropdowns = document.querySelectorAll(".navmenu .toggle-dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownToggle);
    });

    return () => {
      navLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", () => {
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToggle();
          }
        });
      });

      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownToggle);
      });
    };
  }, []);

  return (
    <div>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Portfolio</h1>
          </NavLink>

          <nav id="navmenu" className={`navmenu ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" activeClassName="active">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" activeClassName="active">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none ${
                isMenuOpen ? " bi bi-list " : "bi bi-x"
              }`}
              onClick={mobileNavToggle}
            ></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
