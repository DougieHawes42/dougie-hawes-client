import { Link } from "react-router-dom";

import { Button1, Button2 } from "./buttons";

import "./style.scss";

export const Card1 = ({ codeLink, siteLink, image, title, description }) => (
  <div className="card card1">
    <img className="card1-image" src={image} alt="" />
    <div className="card1-hover-text">
      <Link to={`/work/${title}`}>
        <h3 className="card1-hover-text-title">{title}</h3>
        <p className="card1-hover-text-description">{description}</p>
      </Link>
      <div className="card1-hover-text-buttons">
        <Button1 to={siteLink} />
        <Button2 to={codeLink} />
      </div>
    </div>
  </div>
);
