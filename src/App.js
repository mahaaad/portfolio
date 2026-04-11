import React, { useEffect } from 'react';
import './App.css';
import './style/About.css';
import './style/Projects.css';
import './style/Footer.css';
import './style/Portfolio.css';
import './style/Experience.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import WorkExperience from './components/WorkExperience';
import NavIcons from './components/NavIcons';
import FadeIn from './components/FadeIn';
import InfoWindowChrome from './components/InfoWindowChrome';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 48,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  const experiences = [
    {
      title: 'Software Development Engineer I',
      company: 'Amazon',
      employmentType: 'Full-time',
      dateRange: 'Dec 2024 – Nov 2025',
      location: 'Vancouver, BC',
      logo: 'images/logos/amazon.png',
      bullets: [
        'Worked on core Amazon fulfillment systems: large-scale fulfillment optimization services for governance and trade-off evaluation; contributed to design, development, testing, and deployment of production microservices supporting Amazon’s global delivery network and cost-efficient routing (impact on the order of ~$70M annually).',
        'Led initiatives for the customer orders network density optimizer (re-evaluating carrier assignments to reduce last-mile costs): shipped new business-driven features; designed and deployed a simulation framework using point-in-time shipment snapshots in S3 for consistent inputs across parallel runs; improved scalability, observability, and metrics so PMs and scientists could experiment with delivery-station- and regional-level cost and density configurations.',
        'Built on a distributed AWS stack (Lambda, Step Functions, S3, DynamoDB, event-driven microservices): strengthened reliability through alarms, CloudWatch metrics, and operational practices—supporting experimentation across millions of daily shipments.',
      ],
    },
    {
      title: 'Front-End Developer Intern',
      company: 'Activision',
      employmentType: 'Internship',
      dateRange: 'May 2023 – Dec 2023',
      location: 'Los Angeles, CA',
      logo: 'images/logos/activision.png',
      bullets: [
        'Contributed to marketing and franchise sites for Call of Duty, Crash Bandicoot, Diablo, and more; maintained and shipped updates during high-traffic launch windows.',
        'Partnered with stakeholders, QA, and UI/UX in Adobe Experience Manager using HTML/CSS/Less and JavaScript; implemented an accessibility widget to improve on-page experience.',
      ],
    },
    {
      title: 'UI Engineer Intern',
      company: 'UserTesting',
      employmentType: 'Internship',
      dateRange: 'Sep 2022 – Dec 2022',
      location: 'San Francisco, CA',
      logo: 'images/logos/usertesting.png',
      bullets: [
        'Implemented front- and back-end features for internal services, including an A/B testing platform that notifies teams of experiment changes via the Slack API.',
        'Designed intuitive UIs and reusable front-end components using Stencil.js, improving engineering efficiency and resulting in a 20% increase in code maintainability.',
        'Enhanced internal design-system documentation UX, leading to a 30% reduction in support requests and greater usability for engineers across teams.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Klipfolio',
      employmentType: 'Internship',
      dateRange: 'May 2022 – Sep 2022',
      location: 'Ottawa, ON',
      logo: 'images/logos/klipfolio.png',
      bullets: [
        'Built reusable UI components with React, Redux, JavaScript, HTML, and CSS for Klipfolio’s cloud-based business dashboard so customers could visualize and track KPIs in real time.',
      ],
    },
    {
      title: 'Developer Intern',
      company: 'Critical Mass',
      employmentType: 'Internship',
      dateRange: 'Sep 2021 – Dec 2021',
      location: 'Toronto, ON',
      logo: 'images/logos/critical-mass.png',
      bullets: [
        'Developed dynamic, client-facing pages with React.js, Gatsby.js, and GraphQL for brands including AT&T and BMW, and contributed to campaigns such as digital advertising for the Dallas Mavericks.',
      ],
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <aside className="navicons" aria-label="Section navigation">
        <NavIcons sectionId="top" icon="images/icons/mrlogo.svg" label="Scroll to top" />
        <NavIcons sectionId="about" icon="images/icons/abouticon.svg" label="About section" />
        <NavIcons sectionId="projects" icon="images/icons/projectsicon.svg" label="Projects section" />
        <NavIcons sectionId="design" icon="images/icons/portfolioicon.svg" label="Design portfolio section" />
      </aside>

      <section id="top" className="hero">
        <div className="hero__grid">
          <div className="info-wrap">
            <div className="info">
              <InfoWindowChrome />
              <FadeIn>
                <h1 className="name-title">
                  <span className="title-tags">{'<'}</span>
                  <span className="name-grey">Mahad</span>
                  Rehan /
                  <span className="title-tags">{'>'}</span>
                  <span className="blink-cursor" aria-hidden="true" />
                </h1>
              </FadeIn>

              <div className="titles">
                <FadeIn className="titles__inner" delay={250} duration={1500}>
                  <p>
                    <span className="main-green">Software</span> Engineer
                  </p>
                  <img src="images/icons/computericon.svg" alt="" />
                  <p>
                    <span className="main-green">User Interface</span> Designer
                  </p>
                  <img src="images/icons/usericon.svg" alt="" />
                  <p>
                    <span className="main-green">CS</span> @ Queen&apos;s University
                  </p>
                  <img src="images/icons/educationicon.svg" alt="" />
                </FadeIn>
              </div>

              <p className="info-paragraph">
                <FadeIn delay={1500} duration={1500}>
                  Toronto-based developer and designer passionate about bringing ideas to life through interactive web
                  experiences. Let&apos;s build something amazing together.
                </FadeIn>
              </p>
            </div>

            {/* Paint drips beneath the info card */}
            <div className="info-drips" aria-hidden="true">
              <img className="info-drip info-drip--1" src="images/icons/paint-drop.svg" alt="" />
              <img className="info-drip info-drip--2" src="images/icons/paint-drop.svg" alt="" />
              <img className="info-drip info-drip--3" src="images/icons/paint-drop.svg" alt="" />
            </div>
          </div>

          <div className="mahad-container">
            <div className="mahad-container2">
              <div className="mahad-scene" aria-hidden="true">
                <img className="mahad-1" src="images/graphics/mahad-2024.svg" alt="" />
                <img className="paint-drip" src="images/icons/paint-drop.svg" alt="" />
                <img className="paint-drip2" src="images/icons/paint-drop.svg" alt="" />
              </div>
              <img className="bucket" src="images/graphics/bucketsvg.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <SectionTitle data-aos="fade-up" title="About" icon="" />
      <section id="about" className="about" data-aos="fade-up" data-aos-once>
        <div className="about-content-container">
          <h2 className="about-title-mobile">Seeing the world from a designer&apos;s perspective.</h2>
          <div className="headshot-container">
            <img
              className="headshot"
              src="images/photos/mahad-sf.png"
              alt="Mahad Rehan"
              loading="lazy"
            />
          </div>

          <div className="about-info-container">
            <h2 className="about-title">Seeing the world from a designer&apos;s perspective.</h2>
            <p className="about-info">
              Most recently I was a Software Development Engineer I at Amazon in Vancouver, working on large-scale fulfillment
              optimization on AWS. I hold an Honours B.Comp. in Computer Science from Queen&apos;s University (2019–2024). I also
              have front-end and full-stack experience from internships at Activision, UserTesting, Klipfolio, and Critical Mass.
              I&apos;m interested in software engineering roles—especially front-end and full-stack—and I take on freelance web
              projects for small businesses and personal brands. I care about clear UI, solid engineering practices, and design
              that makes complex systems feel approachable.
            </p>
          </div>
          <div className="experience-container">
            <WorkExperience experiences={experiences} />
          </div>
        </div>
      </section>

      <SectionTitle data-aos="fade-up" title="Projects" icon="images/icons/projectsgreenicon.svg" />
      <section id="projects" className="projects">
        <Project
          float="left"
          projectName="FloatPOS"
          imgUrl="images/graphics/floatpos.png"
          tech4="React.js"
          tech3="React Native"
          tech2="Stripe API"
          tech1=""
          description="All in one restaurant management and POS system app. Handles table management,
                employees, inventory, bill splitting, and more."
          githublink="https://github.com/mahaaad/FloatPOS"
        />
        <Project
          float="right"
          imgFloat="left"
          projectName="Chess Maps"
          imgUrl="images/graphics/chessmaps.png"
          tech1="React.js"
          tech2="Mongo.js"
          tech3="Express.js"
          tech4="chess-web API"
          description="React Native app which allows users to find local Chess players, clubs,
                parks, and common meet up spots using Google Maps API in order to meet in person
                and play over the board games. Includes clock, scorekeeper, Chess engine, and more."
          githublink="https://github.com/mahaaad/chess-maps"
        />
        <Project
          float="left"
          imgFloat="right"
          projectName="Youtube Data Profile App"
          imgUrl="images/graphics/youtube2 - Copy.png"
          tech4="React.js"
          tech3="Youtube Data API"
          tech2="d3.js / Chart.js"
          tech1="Node.js"
          description="React.js web app which extracts user watch data from web-scraping and Youtube Data API V3
                to visualize data and display top channels, genres, etc. Utilized d3.js and chart.js for displaying statistics."
          githublink="https://github.com/mahaaad/youtube-data-app"
        />
        <Project
          float="right"
          imgFloat="left"
          projectName="Water Drink Reminder App"
          imgUrl="images/graphics/waterdrinkreminder - Copy.png"
          tech2="React Native"
          tech3="FireBase"
          tech4="JavaScript"
          tech1=""
          description="React Native mobile app which reminds user to drink water. Tracks
                water consumption and provides feedback based on how much the user has drank."
          githublink="https://github.com/mahaaad/water-drink-app"
        />
        <Project
          float="left"
          imgFloat="right"
          projectName="Messenger App"
          imgUrl="images/graphics/messengerapp.png"
          tech1="React.js"
          tech2="Mongo.js"
          tech3="Express.js"
          tech4="Node.js"
          description="Snapchat and Facebook Messenger inspired messaging full-stack app featuring real time chat functionality between user accounts. Features location sharing similar to Snapchat Maps with Google Maps API along with Snapchat API."
          githublink="https://github.com/mahaaad/messenger-app"
        />
      </section>

      <SectionTitle
        data-aos="fade-up"
        data-aos-once
        title="Design Portfolio"
        icon="images/icons/portfoliogreenicon.svg"
      />
      <section id="design" data-aos="fade-up" data-aos-once className="portfoliosection">
        <Portfolio
          title="Illustration"
          img="images/illustration/imad.png"
          description="View a collection of my illustration and vector art work done in Adobe CC. Usually making
              vector art portraits for personal websites and brands."
        />
        <Portfolio
          title="UI Design"
          img="images/graphics/waterdrinkreminder2.png"
          description="My portfolio of website and mobile app interface designs and mockups."
        />
        <Portfolio
          title="Advertising"
          img="images/graphics/x.png"
          description="Collection of posters, cards, logos, and other promotional content meant for advertising."
        />
        <Portfolio
          title="Miscellaneous"
          img="images/graphics/vscode - Copy.png"
          description="View other relevant design work, IDE/code editor themes, and personal projects."
        />
      </section>

      <section id="contact" className="get-in-touch" data-aos="fade-up" data-aos-once>
        <div className="contact-header">
          <hr className="contact-header__rule" />
          <h2 className="get-in-touch-title">
            {'<'}
            <span className="name-grey">Get In</span> Touch /<span className="name-grey">{'>'}</span>
          </h2>
          <p className="contact-subtitle">
            Open to software engineering opportunities (especially front-end and full-stack). Let&apos;s connect and build
            something great together.
          </p>
        </div>

        <div className="contact-cards-container">
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-card-inner">
              <img src="images/icons/mail-green.svg" alt="" className="contact-icon" />
              <h3>Email</h3>
              <p>Get in touch directly</p>
              <a href="mailto:mahad.rehan@gmail.com" className="contact-button">
                <span>Send Email</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-card-inner">
              <img src="images/icons/linkedin-green.svg" alt="" className="contact-icon" />
              <h3>LinkedIn</h3>
              <p>Professional network</p>
              <a
                href="https://linkedin.com/in/mahadrehan"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <span>Connect</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-card-inner">
              <img src="images/icons/github-green.svg" alt="" className="contact-icon" />
              <h3>GitHub</h3>
              <p>View my code</p>
              <a href="https://github.com/mahaaad" target="_blank" rel="noopener noreferrer" className="contact-button">
                <span>Explore</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-card" data-aos="fade-up" data-aos-delay="400">
            <div className="contact-card-inner">
              <img src="images/icons/resume-green.svg" alt="" className="contact-icon" />
              <h3>Resume</h3>
              <p>Download my CV</p>
              <a
                href={`${process.env.PUBLIC_URL || ''}/files/Mahad Rehan Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <span>Download</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M12 10V16M9 13L12 16L15 13M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12L19 10V19C19 20.1046 18.1046 21 17 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <img className="mahad-footer" src="images/graphics/mahad-2024.svg" alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
