import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button2 } from "./buttons";

import "./style.scss";

export const Card1 = ({ siteLink, image, title, description }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.6, ease: "easeIn" }}
    viewport={{ once: true, amount: 0.3 }}
    className="card card1"
  >
    <img className="card1-image" src={image} alt="" />
    <div className="card1-hover-text">
      <Link to={`/work/${title}`}>
        <h3 className="card1-hover-text-title">{title}</h3>
        <p className="card1-hover-text-description">{description}</p>
      </Link>
      <div className="card1-hover-text-buttons">
        <Button2 to={siteLink} />
      </div>
    </div>
  </motion.div>
);

export const Card2 = ({ icon, name, level }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.6, ease: "easeIn" }}
    viewport={{ once: true, amount: 0.3 }}
    className="card card2"
  >
    <div className="card2-icon">{icon}</div>
    <h3 className="card2-name">{name}</h3>
    <p className="card2-level">{level}</p>
  </motion.div>
);

export const Card3 = ({ id, image, title, date, text }) => (
  <Link to={`/blog/${id}`}>
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.3 }}
      className="card card3"
    >
      <div className="card3-image-container">
        <img className="card3-image" src={image} alt="" />
      </div>
      <div className="card3-text-container">
        <h3 className="card3-title">{title}</h3>
        <p className="card3-date">{date}</p>
        <div
          className="card3-text"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></div>
      </div>
    </motion.div>
  </Link>
);
