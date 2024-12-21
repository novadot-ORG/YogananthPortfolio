import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import AOS from "aos";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [loading, setLoading] = useState(true);
  const [iso, setIso] = useState(null);
  const [images, setImages] = useState([
    {
      src: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?ga=GA1.1.1856927488.1733146746&semt=ais_hybrid",
      title: "App 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      filter: "filter-app",
    },
    {
      src: "https://img.freepik.com/free-vector/realistic-ui-ux-background_23-2149046824.jpg?ga=GA1.1.1856927488.1733146746&semt=ais_hybrid",
      title: "App 2",
      description: "Lorem ipsum, dolor sit amet consectetur",
      filter: "filter-app",
    },
    {
      src: "https://img.freepik.com/free-vector/man-woman-working-app-development-landing-page_23-2148706844.jpg?ga=GA1.1.1856927488.1733146746&semt=ais_hybrid",
      title: "Product 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      filter: "filter-product",
    },
  ]);
  const [allImages] = useState([
    {
      src: "https://img.freepik.com/free-photo/3d-illustration-planet-moon_1150-6127.jpg",
      title: "Books 1",
      description: "Lorem ipsum, dolor sit amet consectetur",
      filter: "filter-books",
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isotopeInstance = new Isotope(".isotope-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      filter: "*",
    });

    setIso(isotopeInstance);

    const filterButtons = document.querySelectorAll(".portfolio-filters li");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        setActiveFilter(filterValue);
        isotopeInstance.arrange({ filter: filterValue });
      });
    });

    return () => {
      isotopeInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (iso) {
      iso.layout();
    }
  }, [activeFilter, iso]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleLoadMore = () => {
    setImages((prevImages) => [...prevImages, ...allImages]);
  };

  return (
    <div>
      {/* {loading && <div id="preloader"></div>} */}
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Portfolio</h1>
                  <p className="mb-0">
                    Welcome to my portfolio, showcasing my skills and projects
                    in web development and design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Portfolio</li>
              </ol>
            </div>
          </nav> */}
        </div>
        <section id="portfolio" className="portfolio section ">
          <div className="container " style={{minHeight:"250px"}}>
            <div
              className="isotope-layout "
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li
                  data-filter="*"
                  className={activeFilter === "*" ? "filter-active" : ""}
                  onClick={() => handleFilterClick("*")}
                >
                  All
                </li>
                <li
                  data-filter=".filter-app"
                  className={
                    activeFilter === ".filter-app" ? "filter-active" : ""
                  }
                  onClick={() => handleFilterClick(".filter-app")}
                >
                  App
                </li>
                <li
                  data-filter=".filter-product"
                  className={
                    activeFilter === ".filter-product" ? "filter-active" : ""
                  }
                  onClick={() => handleFilterClick(".filter-product")}
                >
                  Product
                </li>
                <li
                  data-filter=".filter-branding"
                  className={
                    activeFilter === ".filter-branding" ? "filter-active" : ""
                  }
                  onClick={() => handleFilterClick(".filter-branding")}
                >
                  Branding
                </li>
                <li
                  data-filter=".filter-books"
                  className={
                    activeFilter === ".filter-books" ? "filter-active" : ""
                  }
                  onClick={() => handleFilterClick(".filter-books")}
                >
                  Books
                </li>
              </ul>

              <div
                className="row gy-4 isotope-container"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`col-lg-4 col-md-6 portfolio-item isotope-item ${image.filter}`}
                  >
                    <div className="portfolio-content h-100">
                      <img
                        src={image.src}
                        className="img-fluid"
                        alt={image.title}
                      />
                      <div className="portfolio-info">
                        <h4>{image.title}</h4>
                        <p>{image.description}</p>
                        <a
                          href={image.src}
                          title={image.title}
                          data-gallery="portfolio-gallery-app"
                          className="glightbox preview-link"
                        >
                          <i className="bi bi-zoom-in"></i>
                        </a>
                        <a
                          href="portfolio-details.html"
                          title="More Details"
                          className="details-link"
                        >
                          <i className="bi bi-link-45deg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
