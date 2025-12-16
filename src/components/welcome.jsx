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
import Background from "../images/welcome/Background.jpg";

import "../styles/containers.css"
import "../styles/text.css"
import "../styles/images.css"
import "../styles/text.css"
import "../styles/html_elements.css"

function Welcome() {
  return (
    <div>
      <CustomHeader />
        <div className="right-side">
          <div className="home_background">
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
                    website. I coded this from scratch using JavaScript, React, HTML, and CSS and deployed
                    it statically using Github pages. This website is best for desktop-sized screens, however it is
                    fully dynamic for screens of width 150 pixels and greater. 
                    <br />
                    <br />
                    I’m a first-generation <b>software engineer</b> studying <b>computer science and business administration at the
                    University of California, Irvine</b>,  
                    and am currently based in Los Angeles, California.
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
                <div className="row_container">
                  <div className="logo_container">
                    <img
                      src={UtahIcon}
                      alt="Salt Lake City, Utah"
                      className="icon"
                    />
                    Salt Lake City, Utah
                  </div>
                  <div className="logo_container">
                    <img src={LAIcon} alt="Los Angeles" className="icon" />
                    Los Angeles Metrapolitan Area
                  </div>
                  <div className="pink_subtitle">Programming Languages:</div>
                  <div className="container_for_welcome_logo_container">
                    <div className="welcome_logo_container">
                      <div className="logo_container">
                        <img src={PythonIcon} alt="Python" className="icon" />
                        Python
                      </div>
                      <div className="logo_container">
                        <img src={CIcon} alt="C++" className="icon" />
                        C++
                      </div>
                      <div className="logo_container">
                        <img
                          src={JavaScriptIcon}
                          alt="JavaScript"
                          className="icon"
                        />
                        JavaScript
                      </div>
                    </div>
                    
                    <div className="welcome_logo_container">
                      <div className="logo_container">
                        <img src={HTMLIcon} alt="HTML" className="icon" />
                        HTML
                      </div>
                      <div className="logo_container">
                        <img src={ReactIcon} alt="React" className="icon" />
                        React
                      </div>
                      <div className="logo_container">
                        <img src={CSSIcon} alt="CSS" className="icon" />
                        CSS
                      </div>
                    </div>
                    
                    <br />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="subtitle">Work Experience:</div>
                  <p>• Director of Technology - Delta Sigma Pi</p>
                  <p>
                    • Introduction to Python Learning Assistant - Donald Bren School
                    of I&CS
                  </p>
                  <p>• Accounting Intern - Restaurant and Family Mart</p>
                  <div className="row_container">
                  <p>
                    In my freetime, I enjoy thrifting, gaming, working out, playing
                    poker, and finding new music! Feel free to reach out to me
                    anytime at{" "}
                    <a href="mailto:linjjessica@gmail.com" className="email-link">
                      linjjessica@gmail.com
                    </a>
                    .
                    <br />
                    <br />
                    </p>
                  </div>
                </div>
              </section>




              <section id="projects">
                <div className="dark_header">Projects</div>
                <div className="line"></div>
              </section>
              
              <section id="contact_me">
                <div className="dark_header">Contact Me</div>
                <div className="line"></div>
              </section>
            </div>
          </div>
          
        </div>
        
      <Footer />
    </div>
  );
}

export default Welcome;
