import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import emailjs from "emailjs-com"; 

const Contact = () => {
  const form = useRef(); // This should reference the form element
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
  
    // Send form data to EmailJS
    emailjs
      .sendForm(
        'service_nj3jhbv',      // Your service ID
        'template_igh2v2h',      // Your template ID
        form.current,            // Form reference
        'mEbxfuSkFIxmkonwm'     // Your public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          // Show success message
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');  // Clear any previous error messages
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Show error message
          setSuccessMessage('');  // Clear success message if error occurs
          setErrorMessage('Something went wrong. Please try again later.');
        }
      );
  };
  

  return (
    <div>
      {loading && <div id="preloader"></div>}
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
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">Contact</li>
              </ol>
            </div>
          </nav>
        </div>
        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              {/* Contact information */}
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

              {/* Other contact information */}
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

              {/* Form to contact */}
              <form
                onSubmit={handleSubmit}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="600"
                ref={form} // Ensure the ref is assigned to the form
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
