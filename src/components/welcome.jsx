import { motion } from "framer-motion";
import CustomHeader from "./header";
import headshot from "../images/welcome/website_headshot.jpg";
import UCILogo from "../images/welcome/UCILogo.png";
import DSPLogo from "../images/experience/DSPLogo.png";
import PythonLogo from "../images/experience/technologies/PythonLogo.png";
import CPlusLogo from "../images/experience/technologies/C++Logo.png";
import CSharpLogo from "../images/experience/technologies/CSharpLogo.png";
import CLogo from "../images/experience/technologies/CLogo.png";
import JavaLogo from "../images/experience/technologies/JavaLogo.png";
import JavaScriptLogo from "../images/experience/technologies/JavaScriptLogo.png";
import HTMLLogo from "../images/experience/technologies/HTMLLogo.png";
import ReactLogo from "../images/experience/technologies/ReactLogo.png";
import CSSLogo from "../images/experience/technologies/CSSLogo.png";
import NodeLogo from "../images/experience/technologies/NodeLogo.png";
import PostgreSQLLogo from "../images/experience/technologies/PostgreSQLLogo.png";
import DjangoLogo from "../images/experience/technologies/PythonDjango.png";
import MySQLLogo from "../images/experience/technologies/MySQLLogo.png";
import FlaskLogo from "../images/experience/technologies/FlaskLogo.png";
import MongoDBLogo from "../images/experience/technologies/MongoDBLogo.png";
import TypeScriptLogo from "../images/experience/technologies/TypescriptLogo.png";
import AWSLogo from "../images/experience/technologies/AWSLogo.png";
import GitLogo from "../images/experience/technologies/GitLogo.png";
import TroicomAppScreens from "../images/experience/TroicomAppScreens.png";
import DataCleanerGIF from "../images/experience/DataCleanerGif.mov";
import EYLogo from "../images/experience/EYLogo.png";
import WaveAutomateLogo from "../images/experience/WaveAutomateLogo.png";
import WaveAutomateDashboard from "../images/experience/WaveAutomateDashboard.png";
import TroicomLogo from "../images/experience/TroicomLogo.png";
import DSPWebsite from "../images/experience/DSPWebsite.png";
import SCOUT_DASHBOARD from "../images/experience/ScoutDashboard.png";

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
            <motion.section 
              id="about_me"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="dark_header">About Me</div>
              <div className="dark_line"></div>
              <div className="row_container">
                <div className="image_wrapper">
                <motion.div 
                  className="rounded_wrapper"
                  whileInView={{ scale: 1.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={headshot} 
                    alt="Personal Headshot"
                    className="image"
                  />
                </motion.div>
                </div>
                <div className="about_text_content">
                  <p>
                    Hello world! My name is <b>Jessica Lin</b>, and welcome to my personal portfolio 
                    website. I coded this from scratch using JavaScript, React, HTML, and CSS, and deployed
                    it statically using Github pages. This website is best for desktop-sized screens, however it is
                    fully dynamic for screens of width 300 pixels and greater. Feel free to <b>reach out to me at&nbsp;
                    <a href="mailto:linjjessica@gmail.com" className="email-link">
                      linjjessica@gmail.com
                    </a>
                    !</b>
                  </p>
                  
                  <p>
                    I am a first-generation <b>software engineer</b> studying <b>computer science and business administration at the
                    University of California, Irvine</b>,  
                    and am currently based in Los Angeles, California.
                  </p>

                  <motion.div 
                    className="uci_container"
                    whileInView={{ scale: 1.05 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={UCILogo}
                      alt="UC Irvine Logo"
                      className="icon"
                    />
                    <div className="uci_text">
                      <b>University of California, Irvine</b><br />
                      <b>B.S. in Computer Science</b><br />
                      <b>B.A. in Business Administration</b>
                    </div>
                  </motion.div>
                  
                  <p>
                    I specialize in <b>full-stack mobile and web app development</b>, with a focus on 
                    sleek design and high-performance. I feel fortunate that I get to turn ideas into polished, 
                    intuitive products and <b>tackle complex problems through technical solutions. </b>
                    This website showcases the professional and personal projects that I have been working on.
                  </p>
                  
                  <p>
                    In my freetime, I enjoy keeping myself busy with new hobbies. The list consists of traveling, thrifting, skiing, 
                    working out, and gaming. Ask me about my crawl from Budapest to Prague!
                  </p>
                </div>
              </div>
            </motion.section >


            <motion.section 
              id="experience"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="dark_header">Experience</div>
              <div className="dark_line"></div>
              <p></p>
              <motion.div 
                className="experience_container"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container_20">
                  Jun-Aug 2026
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={WaveAutomateLogo} alt="Wave Automate" className="icon" /></div>
                    <div className="company_text">Wave Automate</div>
                  </div>
                  <div className="dark_large_text">Software Engineer Intern</div>
                  <p>
                    Architected a production-ready Stripe subscription system in a Next.js SaaS, 
                    implementing webhook features to manage plans. 
                    Migrated Postgres schema with Drizzle ORM and supported Cloudflare-tunneled 
                    webhook flows for local and production testing. 
                  </p>
                  
                  <motion.a 
                    href="#!" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-dashboard-wrapper"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{ 
                      display: 'block', 
                      position: 'relative', 
                      marginTop: '20px', 
                      textDecoration: 'none' 
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={WaveAutomateDashboard} 
                        alt="Wave Automate Dashboard" 
                        className="project-dashboard-image"
                        style={{ 
                          width: '100%', 
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          display: 'block'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        backgroundColor: 'rgba(73, 26, 55, 0.6)',
                        padding: '8px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffff',
                        transition: 'background-color 0.3s ease'
                      }}>
                        <svg 
                          xmlns="https://waveautomate.com/" 
                          width="18" 
                          height="18" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                  <div className="row_container_left_aligned2">
                    <div className="curved-outline-box">
                      <p> Next.js </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Postgres </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Drizzle ORM </p>
                    </div>
                    <div className="curved-outline-box">
                      <p> Cloudflare </p>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
              <motion.div 
                className="experience_container"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
              <motion.div 
                className="experience_container"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
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
                    Redesigned 11 mobile screens for Troicom's DropGO app, a LoRa-connected game. 
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
                
              </motion.div>
              
            </motion.section>



            <motion.section 
              id="skills"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="dark_header">Skills</div>
              <div className="dark_line"></div>
              <div className="skill_group">
                <div className="large_pink_text">Backend:</div>
                <div className="pink_line"></div>
              </div>
              <motion.div 
                className="row_container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={PythonLogo} alt="Python"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">Python</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CPlusLogo} alt="C++"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">C++</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CSharpLogo} alt="C#"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">C#</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CLogo} alt="C"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">C</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaScriptLogo} alt="JavaScript"/>
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">JavaScript</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaLogo} alt="Java"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">Java</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={NodeLogo} alt="Node"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">Node</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={PostgreSQLLogo} alt="PostgreSQL"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">PostgreSQL</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={DjangoLogo} alt="Django"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">MySQL</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={MySQLLogo} alt="MySQL"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">MySQL</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={FlaskLogo} alt="Flask"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">Flask</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={MongoDBLogo} alt="MongoDB"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">MongoDB</div>
                  </div>
                </div></motion.div>
                


              </motion.div>
              <div className="skill_group">
                <div className="large_pink_text">Frontend:</div>
                <div className="pink_line"></div>
              </div>
              <motion.div 
                className="row_container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={JavaScriptLogo} alt="JavaScript"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">JavaScript</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={ReactLogo} alt="React"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">React</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={HTMLLogo} alt="HTML"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">HTML</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={CSSLogo} alt="CSS"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">CSS</div>
                  </div>
                </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                    <img src={TypeScriptLogo} alt="TypeScript"  />
                  </div>
                  <div className="skill_back">
                    <div className="skill_back_text">TypeScript</div>
                  </div>
                </div></motion.div>
                
              </motion.div>

              <div className="skill_group">
                <div className="large_pink_text">Developer Tools:</div>
                <div className="pink_line"></div>
              </div>
              
              <motion.div 
                className="row_container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                      <img src={AWSLogo} alt="AWS"  />
                    </div>
                    <div className="skill_back">
                      <div className="skill_back_text">AWS</div>
                    </div>
                  </div></motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileInView={{ scale: 1.15 }} viewport={{ once: false, amount: 0.5 }} className="skill_card"><div className="skill_inner">
                  <div className="skill_front">
                      <img src={GitLogo} alt="Git"  />
                    </div>
                    <div className="skill_back">
                      <div className="skill_back_text">Git</div>
                    </div>
                  </div></motion.div>
              </motion.div>
                
                
                
            </motion.section>
            
            <motion.section 
              id="projects"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="dark_header">Projects</div>
                <div className="dark_line"></div>
                  <motion.div 
                    className="experience_container"
                    whileInView={{ scale: 1.05 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
  
                    <div className="container_20">Dec 2025–Jan 2026</div>
                      <div className="container_80">
                        <div className="row_container_left_aligned">
                          <div className="company_logo">
                            <img src={SCOUT_DASHBOARD} className="icon" alt="Scout Logo" style={{ borderRadius: '4px' }} />
                          </div>
                          <div className="company_text">Scout</div>
                        </div>

                        <div className="dark_large_text">Founding Engineer</div>

                        <motion.a 
                          href="https://scoutfinance.vercel.app/dashboard" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link-button"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          style={{ 
                            display: 'block',
                            position: 'relative', 
                            textDecoration: 'none',
                            marginTop: '20px'
                          }}
                        >
                          <div style={{ position: 'relative' }}>
                            <img 
                              src={SCOUT_DASHBOARD} 
                              alt="Scout Dashboard" 
                              className="project-dashboard-image"
                              style={{ 
                                width: '100%', 
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                display: 'block'
                              }}
                            />
                            <div style={{
                              position: 'absolute',
                              top: '15px',
                              right: '15px',
                              backgroundColor: 'rgba(73, 26, 55, 0.6)',
                              padding: '8px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffff'
                            }}>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </div>
                          </div>
                        </motion.a>

                        {/* <div className="dark_medium_text">By Jessica Lin and Isaias Gonzales</div> */}

                        <ul>
                          <li>Engineered end-to-end app with Next.js 15, TypeScript, and Tailwind CSS to analyze card transactions and suggest optimal card</li>
                          <li>Integrated Plaid Link to securely aggregate multi-bank data, handling OAuth redirects, enabling real-time transaction analysis</li>
                          <li>Developed a reward-optimization engine using GPT-4o that achieves 96% categorization accuracy across 26 spending categories</li>
                          <li>Evaluated cloud trade-offs and migrated from Dockerized AWS EC2 to Vercel, simplifying CI/CD and improving dev velocity by 25%</li>
                          <li>Built a responsive dashboard with glassmorphic UI with 3 pages for real-time reward analysis and a unified wallet for synced cards</li>
                          <li>Conducted transaction analysis for 20 test users, identifying ~1% average cashback leakage per user in real spending patterns</li>
                        </ul>
                    </div>
                  </motion.div>
            </motion.section>

            <motion.section 
              id="extracurriculars"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="dark_header">Extracurriculars</div>
              <div className="dark_line"></div>
              <p></p>
              <motion.div 
                className="experience_container"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container_20">
                  May 2023-Jan 2024
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={DSPLogo} alt="DSP" className="icon" /></div>
                    <div className="company_text">Delta Sigma Pi</div>
                  </div>
                  <div className="dark_large_text">Director of Technology</div>
                  <div className="experience_description">
                    <div className="rounded_wrapper">
                      <img 
                        src={DSPWebsite} 
                        alt="Personal Headshot"
                        className="image"
                      />
                    </div>
                    Modernized the website's architecture and automated the data input process. 
                    Managed digital operations for 45+ members, including website maintenance, 
                    email configuration, and domain management.
                  </div>
                </div>
                
              </motion.div>
              <motion.div 
                className="experience_container"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container_20">
                  Sept 2023-Dec 2023
                </div>
                <div className="container_80">
                  <div className="row_container_left_aligned">
                    <div className="company_logo"><img src={UCILogo} alt="DSP" className="icon" /></div>
                    <div className="company_text">Donald Bren School of Information and 
                    Computer Sciences</div>
                  </div>
                  <div className="dark_large_text">Learning Assistant - Introduction to Python</div>
                  <p>
                    Mentored 52 students in UCI’s essential intro to Python course by leading 
                    bi-weekly labs and resolving 85+ technical questions.
                  </p>
                </div>
                
              </motion.div>
            </motion.section>

          </div>
        </div>
    </div>
  );
}

export default Welcome;
