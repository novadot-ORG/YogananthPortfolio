import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
const Services = () => {
       const [loading, setLoading] = useState(true);
          
            useEffect(() => {
              const timer = setTimeout(() => {
                setLoading(false);
              }, 1000);
          
              return () => clearTimeout(timer);
            }, []);
  return (
    <div>
      {loading && <div id="preloader"></div>}
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Services</h1>
                  <p className="mb-0">
                    I offer a range of professional services to help you achieve
                    your goals, from web development to design and consulting.
                    With a focus on quality and innovation, I ensure each
                    project meets your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                      <Link to="/">Home</Link>
                </li>
                <li className="current">Services</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>React Development</h3>
               </div>
                  <p>
                    I specialize in building dynamic and interactive web
                    applications using React. Whether it's a single-page app or
                    a complex application, I create scalable solutions tailored
                    to your needs.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>HTML & CSS</h3>
               </div>
                  <p>
                    With a strong foundation in HTML and CSS, I craft beautiful,
                    responsive websites that work seamlessly across all devices
                    and screen sizes.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>JavaScript Development</h3>
               </div>
                  <p>
                    I use JavaScript to build interactive features that enhance
                    user experience. Whether it's DOM manipulation, animations,
                    or complex logic, I ensure performance and usability.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>Bootstrap Framework</h3>
               </div>
                  <p>
                    I utilize Bootstrap to quickly build responsive,
                    mobile-first websites and applications with consistent,
                    modern designs.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>Tailwind CSS</h3>
               </div>
                  <p>
                    I use Tailwind CSS to create highly customizable,
                    utility-first styles, allowing for faster and more efficient
                    front-end development.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <div className="stretched-link">
                    <h3>Web Design</h3>
               </div>
                  <p>
                    I offer responsive web design services to create visually
                    appealing and user-friendly interfaces that engage and
                    convert visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main> 
    </div>
  );
};

export default Services;
