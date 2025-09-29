import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import { Card1 } from "../../utils/cards";
import { Link2 } from "../../utils/links";

import Photo from "../../../display/media/layout/home-photo.jpg";

// hard coding
import Site from "../../../display/media/site.png";
// hard coding

import "./style.scss";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route home"
    >
      <div className="home-title-container">
        <img className="home-title-photo" src={Photo} alt="" />
        <h1 className="home-title">Dougie Hawes</h1>
        <p className="home-subtitle">FullStack Web Developer</p>
      </div>
      <div className="home-sm-links">
        <Link2
          to="https://github.com/DougieHawes42"
          icon={<FaGithub />}
          text="GitHub"
        />
        <Link2
          to="https://www.linkedin.com/in/dougie-hawes"
          icon={<FaLinkedin />}
          text="LinkedIn"
        />
        <Link2 to="https://dev.to/dougiehawes" icon={<FaDev />} text="Dev.To" />
        <Link2
          to="https://hashnode.com/@dougiehawes"
          icon={<SiHashnode />}
          text="Hashnode"
        />
        <Link2
          to="https://medium.com/@dougiehawes"
          icon={<FaMedium />}
          text="Medium"
        />
        <Link2
          to="https://www.instagram.com/dougiestylecoding"
          icon={<FaInstagram />}
          text="Instagram"
        />
        <Link2
          to="https://www.tiktok.com/@dougiestylecoding"
          icon={<FaTiktok />}
          text="TikTok"
        />
        <Link2
          to="https://www.youtube.com/@dougiestylecoding"
          icon={<FaYoutube />}
          text="YouTube"
        />
      </div>
      <p className="home-work-intro">
        Some of my work, more to see on my{" "}
        <Link className="home-work-intro-link" to="/work">
          WORK
        </Link>{" "}
        page.
      </p>
      <div className="home-work-examples">
        <Card1
          image={Site}
          title="FreeDevCoop"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"
        />
        <Card1
          image={Site}
          title="Beedies"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"
        />
        <Card1
          image={Site}
          title="DevStones"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
"
        />
      </div>
    </motion.div>
  );
};

export default Home;
