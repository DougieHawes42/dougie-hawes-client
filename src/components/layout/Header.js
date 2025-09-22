import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Link1 } from "../utils/links";

import logo from "../../display/media/layout/logo.png";

import "./style.scss";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("work");
  const location = useLocation();

  useEffect(() => {
    const url = window.location.href;
    const lastSegment = url.substring(url.lastIndexOf("/") + 1);

    setSelectedPage(lastSegment);
  }, [location]);

  return (
    <header className="header">
      <div className="header-title-container">
        <Link className="header-title" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="header-links">
        <div className="header-main-links">
          <Link1 to="/work" text="work" selected={selectedPage === "work"} />
          <Link1
            to="/skills"
            text="skills"
            selected={selectedPage === "skills"}
          />
          <Link1 to="/about" text="about" selected={selectedPage === "about"} />
          <Link1 to="/blog" text="blog" selected={selectedPage === "blog"} />
          <Link1 to="/cv" text="cv" selected={selectedPage === "cv"} />
        </div>
        <div className="header-contact-container">
          <Link className="header-contact-link" to="/contact">
            contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
