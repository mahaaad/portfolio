import {React, useEffect} from 'react';
import './App.css';
import './style/About.css';
import './style/Projects.css';
import './style/Footer.css';
import NavBar from './components/NavBar';
import Bar from './components/Bar';
import Project from "./components/Project"
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import NavIcons from './components/NavIcons';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
  return (
    <div className="App">
        <NavBar />
        <div className="navicons">
                <NavIcons
                    scroll={0}
                    id="mricon"
                    icon="images/icons/mrlogo.svg"
                />
                <NavIcons
                    scroll={ [document.documentElement.clientWidth] * 0.455}
                    id="abouticon"
                    icon="images/icons/abouticon.svg"
                />
                <NavIcons
                    scroll={ [document.documentElement.clientWidth] * 1}
                    id="projectsicon"
                    icon="images/icons/projectsicon.svg"
                />
                <NavIcons 
                    scroll={ [document.documentElement.clientWidth] * 2.075}
                    id="portfolioicon"
                    icon="images/icons/portfolioicon.svg"
                />

            </div>
        <section className="hero">
            <div className="info">
                <FadeIn>
                <h1 style={{marginBottom: '0.5rem'}}>
                    <span style={{fontWeight: 'lighter', fontSize: '5.5rem'}}>{"<"}</span><span className="name-grey">Mahad</span>Rehan /<span className="name-grey" style={{fontWeight: 'lighter', fontSize: '5.5rem'}}>{">"}</span><span><img className="blink" src="/images/graphics/blinking-cursor-gif.gif" /></span>
                </h1>
                </FadeIn>

                <div className="titles">
                <FadeIn delay={250} duration={1500}>
                    <p><span className="main-green">Software</span> Developer</p>
                    <img src="/images/icons/computericon.svg"/>
                    <p><span className="main-green">User Interface</span> Designer</p>
                    <img src="/images/icons/usericon.svg"/>
                    <p><span className="main-green">CS</span> @Queen's University</p>
                    <img src="/images/icons/educationicon.svg"/>
                    </FadeIn>
                </div>
        
                <FadeIn delay={1500}>
                <p className="info-paragraph">
                I am a developer and designer based in the Toronto area passionate about bringing design to life
                by crafting unique interfaces. See my work in freelancing, development, design, and more.
                </p>
                </FadeIn>
            </div>
            <img className="mahad-1" src="/images/graphics/mahad-2024.svg"/>
        </section>

        <section className="about"  data-aos="fade-up" data-aos-once>
            <div style={{display: 'flex', gap: '0.5rem', width: '75%'}} >
                <div className="headshot-container">
                    <img className="headshot" src="/images/photos/venice2023.jpg" />
                    {/* <img className="headshot-2" src="/images/photos/venice2023.jpg" /> */}
                </div>

                <div className="about-info-container">
                    <h2 style={{textAlign: "center", fontSize: "2.25vw", opacity: "80%", fontWeight: "600"}}>
                    Seeing the world from a designer's perspective.
                    </h2>
                    <p className="about-info">
                        I am a recent computer science graduate from Queen's University looking for entry level
                        software roles particularly in front-end web and mobile. 
                        <br/>
                    Also taking freelance web development
                        clients, feel free to reach out if you have a small business or personal brand.
                        <br/>
                        Passionate about bringing a design to life by building interactive interfaces. Love working on 
                        creative design projects, and trying to build interesting and aesthetic UIs, using that as 
                        a main driver for a number of my personal projects.
                        <br/>
                        Design is everywhere we look and surrounds every part of our life after all. Big believer in using design 
                        to make an impact, and constantly seeing the world from a designer's perspective.
                    </p>

            
                    </div>
                </div>
                {/* Skills */}
                {/*<h1 style={{textAlign: "center", fontSize: "1.5vw", opacity: "70%", fontWeight: "400"}}>Skills </h1>*/}
            
                <div style={{display: 'flex', width: '80%', justifyContent: 'space-evenly', padding: '3rem'}}>
                    <div>
                        <h1 style={{fontSize: "1.5vw", opacity: "70%", fontWeight: "600"}}>Tools & Software </h1>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>HTML/CSS/JavaScript</h1>
                        <Bar width="24vw"/>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>React.js</h1>
                        <Bar width="23vw"/>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Node.js</h1>
                        <Bar width="20vw"/>        
                    </div>
                    
                    <div >
                        <h1 style={{fontSize: "1.5vw", opacity: "70%", fontWeight: "600"}}>Design </h1>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Adobe Illustrator</h1>
                        <Bar width="24.5vw"/>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Adobe Photoshop</h1>
                        <Bar width="24vw"/>
                        <h1 style={{opacity: "80%", fontSize: "1vw", fontWeight: "lighter"}}>Figma</h1>
                        <Bar width="20vw"/>

                    </div>
                </div>
        </section>

        <SectionTitle
            data-aos="fade-up"
            title="Projects"
            icon="/images/icons/projectsgreenicon.svg"
        />

        <section className="projects">
        <Project
                float="left"
                projectName="FloatPOS"
                imgUrl="images/graphics/FloatPOS.png"
                tech4 = "React.js/"
                tech3 = "React Native"
                tech2 = "Stripe API"
                tech1 = ""
                description="All in one restaurant management and POS system app. Handles table management,
                employees, inventory, bill splitting, and more.
                "
                githublink="https://github.com/mahaaad/FloatPOS"
            />
        <Project
                float="right"
                imgFloat="left"
                projectName="Chess Maps"
                imgUrl="images/graphics/chessmaps.png"
                tech1 = "React.js"
                tech2 = "Mongo.js"
                tech3 = "Express.js"
                tech4 = "chess-web API"
                description="React Native app which allows users to find local Chess players, clubs, 
                parks, and common meet up spots using Google Maps API in order to meet in person 
                and play over the board games. Includes clock, scorekeeper, Chess engine, and more.
                "
                githublink="https://github.com/mahaaad/chess-maps"
            />
            <Project
                float="left"
                imgFloat="right"
                projectName="Youtube Data Profile App"
                imgUrl="images/graphics/youtube2 - Copy.png"
                tech4 = "React.js"
                tech3 = "Youtube Data API"
                tech2 = "d3.js/Chart.js"
                tech1 = "Node.js"
                description="React.js web app which extracts user watch data from web-scraping and Youtube Data API V3
                to visualize data and display top channels, genres, e.t.c. Utilized d3.js and chart.js for displaying statistics
                "
                githublink="https://github.com/mahaaad/youtube-data-app"
            />
        <Project
                float="right"
                imgFloat="left"
                projectName="Water Drink Reminder App"
                imgUrl="images/graphics/waterdrinkreminder - Copy.png"
                tech2 = "React Native"
                tech3 = "FireBase"
                tech4= "JavaScript"
                description="React Native mobile app which reminds user to drink water. Tracks
                water consumption and provides feedback based on how much the user has drank.
                "
                githublink="https://github.com/mahaaad/water-drink-app"
            />

            <Project
                float="left"
                imgFloat="right"
                projectName="Messenger App"
                imgUrl="images/graphics/messengerapp.png"
                tech1 = "React.js"
                tech2 = "Mongo.js"
                tech3 = "Express.js"
                tech4 = "Node.js"
                description="Snapchat and Facebook Messenger inspired messaging full-stack app featuring real time chat functionality between user accounts. Features location sharing similar to Snapchat Maps with Google Maps API along with Snapchat API
                "
                githublink="https://github.com/mahaaad/messenger-app"
            />
        </section>

      {/*Design Portfolio Section*/}
      <SectionTitle
            data-aos="fade-up"
            data-aos-once
            title="Design Portfolio"
            icon="/images/icons/portfoliogreenicon.svg"
        />
    
        <section  data-aos="fade-up" data-aos-once className ="portfoliosection" style={{marginLeft: "20vw",width: "70vw", height: "60vw"}}>
            <Portfolio
              height="25vw"
              title="Illustration" 
              img="/images/illustration/imad.png"
              imgWidth = "26vw"
              description="
              View a collection of my illustration and vector art work done in Adobe Creative Suite Software
              such as Photoshop and Illustrator
              "
            />
            <Portfolio 
              height="25vw"
              title="UI Design"
              img="/images/graphics/waterdrinkreminder2.png"
              imgWidth = "26vw"
              description="
              My portfolio of website and mobile app interface designs and mockups
              "
            />
            <Portfolio 
              height="20vw"
              title="Advertising" 
              img="/images/graphics/x.png"
              imgWidth = "26vw"
              description="
                Collection of posters, cards, logos, and other promotional content meant for advertising
              "
            />
            <Portfolio
              height="22.5vw"
              title="Miscellaneous" 
              img="/images/graphics/vscode - Copy.png"
              imgWidth = "26vw"
              description="
                View other relevant design work, IDE/code editor themes, and personal projects
              "
            />
        </section>
        
        {/*Get In Touch Section*/}
        <section className="get-in-touch" data-aos="fade-up" data-aos-once >
            <hr style={{ opacity: "0.35", width: '100%', marginBottom: '3rem'}} />
            <h2 className="get-in-touch-title">{"<"}<span className="name-grey">Get In</span> Touch /<span className="name-grey">{">"}</span></h2>
            <p style={{ marginBottom: "10vw", fontWeight: "lighter", fontSize: "1.75vw", opacity: "50%"}}>
                I am currently seeking software roles, freelancing opportunities, and open to collaborate as well .
                Feel free to reach out me or if you have any questions at <a href="mahad.rehan@gmail.com">mahad.rehan@gmail.com </a>
                or at <a href="https://linkedin.com/in/mahadrehan">https://linkedin.com/in/mahadrehan</a>
            </p>
        </section>
        <Footer />
    </div>
  );
}

export default App;
