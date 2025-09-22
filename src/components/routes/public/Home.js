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

import "./style.scss";

const Home = () => {
  return (
    <div className="route home">
      <div className="home-sm-links">
        <Link2 to="www.github.com" icon={<FaGithub />} />
        <Link2 to="www.linkedin.com" icon={<FaLinkedin />} />
        <Link2 to="www.dev.to" icon={<FaDev />} />
        <Link2 to="www.hashnode.com" icon={<SiHashnode />} />
        <Link2 to="www.medium.com" icon={<FaMedium />} />
        <Link2 to="www.instagram.com" icon={<FaInstagram />} />
        <Link2 to="www.tiktok.com" icon={<FaTiktok />} />
        <Link2 to="www.youtube.com" icon={<FaYoutube />} />
      </div>
    </div>
  );
};

export default Home;
