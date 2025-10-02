import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const isFormValid = isValidEmail(email) && message.trim().length > 0;

  const handleFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]); // append instead of replace
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      console.log(email);
      console.log(message);
      console.log(files);
    } else {
      console.log("incomplete form");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route contact"
    >
      <h2 className="route-title">contact me</h2>
      <div className="contact-body">
        <section className="contact-body-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-section">
              <label className="contact-form-label" htmlFor="email">
                Your Email
              </label>
              <input
                className="contact-form-input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-section">
              <label className="contact-form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact-form-input contact-form-textarea"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="contact-form-section">
              <label className="contact-form-label" htmlFor="file">
                Attach a file (optional)
              </label>
              <input
                className="contact-form-file-input"
                type="file"
                name="file"
                id="file"
                onChange={handleFilesChange}
              />
            </div>
            <button
              className="contact-form-button"
              type="submit"
              disabled={!isFormValid}
            >
              SEND
            </button>
          </form>
          <div className="contact-links">
            <div className="contact-links-section">
              <h3 className="contact-links-section-title">Other Ways</h3>
              <Link3
                to="mailto:doughawes42@gmail.com"
                icon={<FaSquareEnvelope />}
                text="Email"
              />
              <Link3
                to="tel:+447742148280"
                icon={<FaPhoneSquare />}
                text="Phone"
              />
              <Link3
                to="https://www.linkedin.com/in/dougie-hawes"
                icon={<FaLinkedin />}
                text="LinkedIn"
              />
              <Link3
                to="https://github.com/DougieHawes42"
                icon={<FaGithub />}
                text="GitHub"
              />
            </div>
            <div className="contact-links-section">
              <h3 className="contact-links-section-title">Find Me Elsewhere</h3>
              <Link3
                to="https://dev.to/dougiehawes"
                icon={<FaDev />}
                text="Dev.To"
              />
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
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
