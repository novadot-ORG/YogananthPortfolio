import React, { useEffect, useState } from "react";
import "./About.css";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const About = () => {
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

    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((bar) => {
      const value = bar.getAttribute("aria-valuenow");
      bar.style.width = `${value}%`;
    });
  }, []);
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);
  return (
    <div>
      {loading && <div id="preloader"></div>}
      <main className="main ">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>About</h1>
                  <p className="mb-0">
                    We are dedicated to providing excellent service and
                    solutions to meet your needs.
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
                <li className="current">About</li>
              </ol>
            </div>
          </nav>
        </div>

        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 content">
                <h2>Front-End Developer &amp; Web Developer</h2>
                <p className="fst-italic py-3">
                  Passionate about building interactive and dynamic websites, I
                  specialize in creating user-centric, responsive web
                  applications. With a strong foundation in both front-end and
                  back-end technologies, I aim to deliver seamless digital
                  experiences that empower businesses and users alike.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Birthday:</strong> <span>26 October 1998</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Website:</strong>{" "}
                        <span>www.yourwebsite.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Phone:</strong> <span>+91 8667224491</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>City:</strong> <span>Karur, Tamil Nadu</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Age:</strong> <span>30</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Degree:</strong>{" "}
                        <span>Master's in Computer Science</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Email:</strong>{" "}
                        <span>yogananth@novadot.co.uk</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Freelance:</strong>{" "}
                        <span>Available for Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  I am always looking to push the limits of my skills and learn
                  new technologies. Whether it's creating stunning front-end
                  designs or developing robust back-end systems, I am committed
                  to delivering quality and innovation in every project. Let's
                  collaborate and make something amazing!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-emoji-smile"></i>
                <div className="stats-item">
                  <CountUp start={0} end={10} duration={1} />
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-journal-richtext"></i>
                <div className="stats-item">
                  <CountUp start={0} end={8} duration={1} />
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-headset"></i>
                <div className="stats-item">
                  <CountUp start={0} end={1463} duration={1} />
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-people"></i>
                <div className="stats-item">
                  <CountUp start={0} end={5} duration={1} />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <div>
              <span>My</span> <span className="description-title">Skills</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="skill">
                    <span>HTML</span> <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <span className="skill">
                    <span>CSS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <span className="skill">
                    <span>JavaScript</span> <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <span className="skill">
                    <span>Figma</span> <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="skill">
                    <span>WordPress/CMS</span> <i className="val">50%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                <div
                  className="progress"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <span className="skill">
                    <span>React</span> <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="interests section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <div>
              <span>I'm</span>{" "}
              <span className="description-title">interested in</span>
            </div>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="features-item">
                  <i className="bi bi-react"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      React Development
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="features-item">
                  <i className="bi bi-html5"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      HTML5 Expertise
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="features-item">
                  <i className="bi bi-css3"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      CSS3 Styling
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="features-item">
                  <i className="bi bi-javascript"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      JavaScript Mastery
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="features-item">
                  <i className="bi bi-bootstrap"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Bootstrap Framework
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="features-item">
                  <i className="bi bi-palette"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Tailwind CSS
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="features-item">
                  <i className="bi bi-sass"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      SCSS Styling
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="features-item">
                  <i className="bi bi-archive"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Component Libraries
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="features-item">
                  <i className="bi bi-code-slash"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Code Optimization
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="features-item">
                  <i className="bi bi-clipboard-data"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Performance Tuning
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <div className="features-item">
                  <i className="bi bi-check-circle"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Quality Assurance
                    </a>
                  </h3>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-4"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                <div className="features-item">
                  <i className="bi bi-puzzle"></i>
                  <h3>
                    <a href="" className="stretched-link">
                      Api Integration
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="testimonials section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <div>
              <span>Check my</span>{" "}
              <span className="description-title">Testimonials</span>
            </div>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper init-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus.
                      </span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default About;
