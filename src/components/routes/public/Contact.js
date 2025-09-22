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

import { Link3 } from "../../utils/links";

import QR from "../../../display/media/layout/qr-code.png";

import "./style.scss";

const Contact = () => {
  return (
    <div className="route contact">
      <div className="contact-sm-links">
        <Link3
          to="https://dev.to/dougiehawes"
          icon={<FaDev />}
          text="Dev.To"
          details="dougiehawes"
        />
      </div>
      <div className="qr-container">
        <img className="qr-code" src={QR} alt="" />
      </div>
    </div>
  );
};

export default Contact;
