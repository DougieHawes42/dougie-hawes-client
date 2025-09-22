import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaPhoneSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";

import { Link3 } from "../../utils/links";

import QR from "../../../display/media/layout/qr-code.png";

import "./style.scss";

const Contact = () => {
  return (
    <div className="route contact">
      <h2 className="route-title">contact</h2>
      <div className="contact-main-links">
        <a className="contact-main-link">
          <FaSquareEnvelope />
        </a>
        <a className="contact-main-link">
          <FaPhoneSquare />
        </a>
        <a
          className="contact-main-link"
          href="https://www.linkedin.com/in/dougie-hawes"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="contact-main-link"
          href="https://github.com/DougieHawes42"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
      <div className="qr-container">
        <img className="qr-code" src={QR} alt="" />
      </div>
      <div className="contact-links">
        <Link3 to="https://dev.to/dougiehawes" icon={<FaDev />} text="Dev.To" />
        <Link3
          to="https://hashnode.com/@dougiehawes"
          icon={<SiHashnode />}
          text="Hashnode"
        />
        <Link3
          to="https://medium.com/@dougiehawes"
          icon={<FaMedium />}
          text="Medium"
        />
        <Link3
          to="https://www.instagram.com/dougiestylecoding"
          icon={<FaInstagram />}
          text="Instagram"
        />
        <Link3
          to="https://www.tiktok.com/@dougiestylecoding"
          icon={<FaTiktok />}
          text="TikTok"
        />
        <Link3
          to="https://www.youtube.com/@dougiestylecoding"
          icon={<FaYoutube />}
          text="YouTube"
        />
      </div>
    </div>
  );
};

export default Contact;
