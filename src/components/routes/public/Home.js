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

import { Link2 } from "../../utils/links";

import Photo from "../../../display/media/layout/home-photo.jpg";

import "./style.scss";

const Home = () => {
  return (
    <div className="route home">
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
    </div>
  );
};

export default Home;
