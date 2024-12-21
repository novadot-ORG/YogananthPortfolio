import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nj3jhbv",
        "template_igh2v2h",
        form.current,
        "mEbxfuSkFIxmkonwm"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);

          setSuccessMessage("Your message has been sent successfully!");
          setErrorMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);

          setSuccessMessage("");
          setErrorMessage("Something went wrong. Please try again later.");
        }
      );
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
                  <h1>Contact</h1>
                  <p className="mb-0">
                    If you have any questions, feel free to reach out!
                  </p>
                  <p>We're here to help. Get in touch today!</p>
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
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav> */}
        </div>
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
           
              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Thennilai , Karur , TamilNadu - 639 206</p>
                  </div>
                </div>
              </div>

            
              <div className="col-md-6">
                <div
                  className="info-item d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>+91 8667224491</p>
                  </div>
                </div>
              </div>

         
              <form
                onSubmit={handleSubmit}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="600"
                ref={form}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">{loading && "Loading"}</div>
                    <div className="error-message">{errorMessage}</div>
                    <div className="sent-message">{successMessage}</div>

                    <button type="submit" id="button">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
