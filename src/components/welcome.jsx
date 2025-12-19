import React from "react";
import CustomHeader from "./header";
import Footer from "./footer";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";
import UtahIcon from "../images/welcome/Utah.jpg";
import LAIcon from "../images/welcome/LA.png";
import PythonIcon from "../images/welcome/PythonLogo.png";
import CIcon from "../images/welcome/C++Logo.png";
import JavaScriptIcon from "../images/welcome/JavaScriptLogo.png";
import HTMLIcon from "../images/welcome/HTMLLogo.png";
import ReactIcon from "../images/welcome/ReactLogo.png";
import CSSIcon from "../images/welcome/CSSLogo.png";
import Background from "../images/welcome/SmallerBackgroundWithButterly.jpg";
import TroicomAppScreens from "../images/experience/TroicomAppScreens.png";
import DataCleanerGIF from "../images/experience/DataCleanerGif.mov";
import EYLogo from "../images/experience/EYLogo.png";
import TroicomLogo from "../images/experience/TroicomLogo.png";
import DSPWebsite from "../images/experience/DSPWebsite.png";

import "../styles/containers.css"
import "../styles/text.css"
import "../styles/images.css"
import "../styles/text.css"
import "../styles/html_elements.css"
import "../styles/experience.css"

function Welcome() {
  return (
    <div>
      <CustomHeader />
        <div className="right-side">
          <div className="main-content">
            <section id="about_me">
              <div className="dark_header">About Me</div>
              <div className="line"></div>
              <div className="row_container">
                <div className="image_wrapper">
                  <div className="rounded_wrapper">
                    <img 
                      src={headshot} 
                      alt="Personal Headshot"
                      className="image"
                    />
                  </div>
                </div>
                <p>
                  Hello world! My name is <b>Jessica Lin</b>, and welcome to my personal portfolio 
                  website. I coded this from scratch using JavaScript, React, HTML, and CSS, and deployed
                  it statically using Github pages. This website is best for desktop-sized screens, however it is
                  fully dynamic for screens of width 300 pixels and greater. Feel free to <b>reach out to me at&nbsp;
                  <a href="mailto:linjjessica@gmail.com" className="email-link">
                    linjjessica@gmail.com
                  </a>
                  .</b>
                  <br />
                  <br />
                  I am a first-generation <b>software engineer</b> studying <b>computer science and business administration at the
                  University of California, Irvine</b>,  
                  and am currently based in Los Angeles, California.
                  <br />
                  <br />
                  <div className="uci_container">
                    <img
                      src={UCILogo}
                      alt="UC Irvine Logo"
                      className="icon"
                    />
                    <div className="row_container">
                      <p>
                        <b>University of California, Irvine<br />
                        B.S. in Computer Science<br />
                        B.A. in Business Administration<br /></b>
                      </p>
                    </div>
                  </div>
                  <br />
                  <br />
                  I specialize in <b>full-stack mobile and web app development</b>, with a focus on 
                  sleek design and high-performance. I feel fortunate that I get to turn ideas into polished, 
                  intuitive products and <b>tackle complex problems through technical solutions. </b>
                  This website showcases the professional and personal projects that I have been working on.
                  <br />
                  <br />
                  In my freetime, I enjoy keeping myself busy with new hobbies. The list consists of traveling, thrifting, skiing, 
                  working out, and gaming. Ask me about my crawl from Budapest to Prague!
                  <br />
                  <br />
                </p>
              </div >
            </section>


            <section id="experience">
              <div className="dark_header">Experience</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="container_20">
                  Jun-Aug 2026
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={EYLogo} alt="HTML" className="icon" /></div>
                    <div className="company_text">Ernst & Young</div>
                  </div>
                  <div className="dark_large_text">Technology Consulting Intern</div>
                  <p>
                    Built a Python/Pandas data-validation tool that automated 
                    the data validation process across 500+ inconsistent CSV files. 
                    Designed and implemented a Streamlit UI that let users upload files, 
                    view reports, and download results.
                  </p>
                  <video autoPlay loop muted playsInline style={{ width: "100%",}}>
                    <source src={DataCleanerGIF} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="row_container_left_aligned2">
                    <div className="curved-outline-box">
                      <p> Python </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Pandas </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Streamlit </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="experience_container">
                <div className="container_20">
                  Oct 2025-Jun 2026
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={TroicomLogo} alt="Troicom Logo" className="icon" /></div>
                    <div className="company_text">Troicom</div>
                  </div>
                  <div className="dark_large_text">Software Engineering Intern</div>
                  <p>
                    Redesigned 11 mobile screens for Troicom's DropGO, a LoRa-connected game. 
                    Authored 5 C# scripts to connect UI/UX to backend logic, including a secure 
                    sign-out flow and Bluetooth device toggling page. Oversaw the end-to-end
                    app deployment process, including producing and editing 7 app store previews and  
                    2 professional app demo videos.
                  </p>
                  <img 
                    src={TroicomAppScreens} 
                    alt="Personal Headshot"
                    className="image"
                  />
                  <div className="row_container_left_aligned2">
                    <div className="curved-outline-box">
                      <p> C# </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> AWS </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Unity </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Canva </p>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <div className="row_container">
              </div>
            </section>



            <section id="skills">
              <div className="dark_header">Skills</div>
              <div className="line"></div>
              <p></p>
              <div className="row_container"><b>Backend: </b></div>
              <div className="row_container">
                <div className="skill_icon_container">
                  <img src={PythonIcon} alt="Python" className="icon" />
                  Python
                </div>
                <div className="skill_icon_container">
                  <img src={CIcon} alt="C++" className="icon" />
                  C++
                </div>
                <div className="skill_icon_container">
                  <img
                    src={JavaScriptIcon}
                    alt="JavaScript"
                    className="icon"
                  />
                  JavaScript
                </div>
              </div>
              <div className="row_container"><b>Frontend: </b></div>
              <div className="row_container">
                <div className="skill_icon_container">
                  <img src={HTMLIcon} alt="HTML" className="icon" />
                  HTML
                </div>
                <div className="skill_icon_container">
                  <img src={ReactIcon} alt="React" className="icon" />
                  React
                </div>
                <div className="skill_icon_container">
                  <img src={CSSIcon} alt="CSS" className="icon" />
                  CSS
                </div>
                <div className="skill_icon_container">
                  <img src={PythonIcon} alt="Python" className="icon" />
                  Python
                </div>
                <div className="skill_icon_container">
                  <img src={CIcon} alt="C++" className="icon" />
                  C++
                </div>
                <div className="skill_icon_container">
                  <img
                    src={JavaScriptIcon}
                    alt="JavaScript"
                    className="icon"
                  />
                  JavaScript
                </div>
              </div>
                
                
                
                
            </section>
            
            <section id="projects">
              <div className="dark_header">Projects</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="row_container">
                  Redesigned 11 mobile screens for Troicom's DropGO, a LoRa-connected game. 
                    Authored 5 C# scripts to connect UI/UX to backend logic, including a secure 
                    sign-out flow and Bluetooth device toggling page. Oversaw the end-to-end
                    app deployment process, including producing and editing 7 app store previews and  
                    2 professional app demo videos.
                </div>
              </div>
              <p></p>
            </section>

            <section id="extracurriculars">
              <div className="dark_header">Extracurriculars</div>
              <div className="line"></div>
              <p></p>
              <div className="experience_container">
                <div className="container_20">
                  May 2023-Jan 2024
                </div>
                <div className="container_80">
                  <div className="dark_large_text">Delta Sigma Pi</div>
                  <div className="dark_large_text">Director of Technology</div>
                  <p>
                    <div className="rounded_wrapper">
                      <img 
                        src={DSPWebsite} 
                        alt="Personal Headshot"
                        className="image"
                      />
                    </div>
                    <p></p>
                    Modernized the website's architecture and automated the data input process. 
                    Managed digital operations for 45+ members, including website maintenance, 
                    email configuration, and domain management.
                  </p>
                </div>
                
              </div>
              <div className="experience_container">
                <div className="container_20">
                  Oct 2025-Jun 2026
                </div>
                <div className="container_80">
                  <div className="dark_large_text">Donald Bren School of Information and 
                    Computer Sciences</div>
                  <div className="dark_large_text">Learning Assistant - Introduction to Python</div>
                  <p>
                    Redesigned 11 mobile screens for Troicom's DropGO, a LoRa-connected game. 
                    Authored 5 C# scripts to connect UI/UX to backend logic, including a secure 
                    sign-out flow and Bluetooth device toggling page. Oversaw the end-to-end
                    app deployment process, producing and editing 7 app store previews and  
                    2 professional app demo videos.
                  </p>
                  <img 
                    src={TroicomAppScreens} 
                    alt="Personal Headshot"
                    className="image"
                  />
                </div>
                
              </div>
            </section>

          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Welcome;
