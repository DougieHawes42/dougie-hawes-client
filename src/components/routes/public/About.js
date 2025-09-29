import { motion } from "framer-motion";

import "./style.scss";

// hard coding
import image from "../../../display/media/layout/home-photo.jpg";
// hard coding

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route about"
    >
      <div className="about-section about-section-left">
        <div className="about-section-image-container">
          <img className="about-section-image" src={image} alt="" />
        </div>
        <div className="about-section-text">
          <h3 className="about-section-header">about me</h3>
          <p className="about-section-text-body">
            I am recognised as a technical creative, with the technical skills
            and eye for design which rarely come together. I have been a gamer
            since Sonic the Hedgehog all the way till Grand Theft Auto. Born at
            the time when video games were in their infancy, and hitting
            adulthood when social media was first taking flight, I consider
            myself to have a perspective which sees the whole picture when it
            comes to seeing how much technology gives us control of our own
            lives.
          </p>
        </div>
      </div>
      <div className="about-section about-section-right">
        <div className="about-section-text">
          <h3 className="about-section-header">my coding story</h3>
          <p className="about-section-text-body">
            It's very simple, one day I was overcome with the burning question
            "how do websites work exactly?" Hours later I was on CodeCademy
            writing my very first HTML. This snowballed into FreeCodeCamp, and a
            plethora of YouTube tutorials. Months later I was perfecting my
            React.js, and my curiousity of MERN was encroaching. Within a year,
            I was the friend you went to if you had a band, business, or passion
            which needs a website to make visible to the world.
          </p>
        </div>
        <div className="about-section-image-container">
          <img className="about-section-image" src={image} alt="" />
        </div>
      </div>
      <div className="about-section about-section-left">
        <div className="about-section-image-container">
          <img className="about-section-image" src={image} alt="" />
        </div>
        <div className="about-section-text">
          <h3 className="about-section-header">my qualities</h3>
          <p className="about-section-text-body">
            My neurodiversity gives me a vast memory and ability to keep track
            of all the variables which need to be kept track of when assembling
            sites and apps. I have advanced communication skills from studying
            NLP and body language, which I put to use when communicating with
            clients and team-members. I can understand the needs of others, as
            well as making them feel understood, thus confident I am providing
            the best possible service and their needs are being met.
          </p>
        </div>
      </div>
      <div className="about-section about-section-right">
        <div className="about-section-text">
          <h3 className="about-section-header">my influences</h3>
          <p className="about-section-text-body">
            I owe an immessurable debt to many great online tutors who's sharing
            of knowledge has made me the programmer I am today.{" "}
            <a
              className="about-section-text-body-link"
              href="https://www.youtube.com/@aniakubow"
              target="_blank"
            >
              Ania Kubow
            </a>{" "}
            was just what I needed when I wanted to go from knowing about
            React.js to being able to think in the component based layout with
            her accesible and very informative videos. The tutorials of{" "}
            <a
              className="about-section-text-body-link"
              href="https://www.youtube.com/@TraversyMedia"
              target="_blank"
            >
              Brad Traversy
            </a>{" "}
            got the ball rolling when I moved from being a frontend React.js
            programmer, to a fully stacked MERN programmer.{" "}
            <a
              className="about-section-text-body-link"
              href="https://www.youtube.com/@codecontinue"
              target="_blank"
            >
              Ryan Dhungel
            </a>{" "}
            not only has been a great teacher, but a great friend conversing
            with me on social media when I had very niche questions.{" "}
            <a
              className="about-section-text-body-link"
              href="https://www.youtube.com/@WebDevSimplified"
              target="_blank"
            >
              Kyle from Web Dev Simplified
            </a>{" "}
            provided the knowledge of the industry, giving me the confidence to
            send out my first applications.
          </p>
        </div>
        <div className="about-section-image-container">
          <img className="about-section-image" src={image} alt="" />
        </div>
      </div>
      <div className="about-section about-section-left">
        <div className="about-section-image-container">
          <img className="about-section-image" src={image} alt="" />
        </div>
        <div className="about-section-text">
          <h3 className="about-section-header">when I'm not programming</h3>
          <p className="about-section-text-body">
            I feel very home when at the screen, but we all need to feel fresh
            and sun on my skin. I am a long distance runner, and what some will
            call loneliness I call a calm solitude which cleans out my mind in
            readiness to code again with fresh ideas and sharpened focus. I flex
            my creativity by making art pieces which I also sell in local craft
            markets. Though I find nothing more fulfilling than spending time
            with my nieces and nephews who are worth every penny I spoil them
            with (with interest).
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
