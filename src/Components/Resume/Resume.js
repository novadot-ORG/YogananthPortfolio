import React, { useEffect, useState } from "react";
import "./Resume.css";
import { Link } from "react-router-dom";
import  resume  from "../../Resume/YogananthResume.pdf.pdf";
const Resume = () => {
  const [loading, setLoading] = useState(true);


  const handleDownload = (event) => {
    event.preventDefault(); 
    const link = document.createElement("a");
    link.href = resume; 
    link.download = "Yogananth_Resume.pdf"; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  };
  return (
    <div>
     
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Resume</h1>
                  <p className="mb-0">
                    Passionate about delivering high-quality work and constantly
                    striving to improve skills and expertise.
                  </p>
                  <p className="mb-0">
                    Committed to achieving goals and solving challenges with
                    innovative solutions. Experienced in various fields and
                    ready to contribute.
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
                <li className="current">Resume</li>
              </ol>
            </div>
          </nav> */}
        </div>

        <section id="resume" className="resume section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>

                <div className="resume-item pb-0">
                  <h4>Yogananth Balasekar</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven React Developer with 1+
                      years of experience designing and developing initial
                      concept to final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Karur, Tamilnadu</li>
                    <li>(+91) 8667224491</li>
                    <li>yogananth@novadot.co.uk</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Computer &amp; Science</h4>
                  <h5>2019 - 2021</h5>
                  <p>
                    <em>Erode Goverment Arts & Science College</em>
                  </p>
                  <p>Completed my M.Sc in First Class With Distinction</p>
                </div>

                <div className="resume-item">
                  <h4>Bachelor of Computer &amp; Application</h4>
                  <h5>2015 - 2018</h5>
                  <p>
                    <em>Kongu College Of Arts & Science </em>
                  </p>
                  <p>Completed my BCA in Second Class</p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>React Developer</h4>
                  <h5>2024 - Present</h5>
                  <p>
                    <em>Nova.Uk</em>
                  </p>
                  <ul>
                    <li>
                      Lead in the React, development, and implementation of the
                      graphic, layout, and production communication materials
                    </li>
                    <li>
                      Delegate tasks to the 3 members of the design team and
                      provide counsel on all aspects of the project.{" "}
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>React Developer</h4>
                  <h5>2022 - 2023</h5>
                  <p>
                    <em>AgilenSmart Technologies</em>
                  </p>
                  <ul>
                    <li>
                      Developed numerous marketing programs (logos,
                      brochures,infographics, presentations, and
                      advertisements).
                    </li>
                    <li>
                      Managed up to 5 projects or tasks at a given time while
                      under pressure
                    </li>
                    <li>
                      Recommended and consulted with clients on the most
                      appropriate graphic design
                    </li>
                    <li>
                      Created 4+ design presentations and proposals a month for
                      clients and account managers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
            <form class="php-email-form">
  <button type="submit" id="button" onClick={handleDownload}>
    Download Resume
  </button>
</form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
