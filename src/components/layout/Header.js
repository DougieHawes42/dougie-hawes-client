import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import { Link1 } from "../utils/links";

import logo from "../../display/media/layout/logo.png";

import "./style.scss";

const Header = ({ darkmode }) => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const url = window.location.href;
    const lastSegment = url.substring(url.lastIndexOf("/") + 1);

    setSelectedPage(lastSegment);
  }, [location]);

  return (
    <header className="header">
      <div
        className="header-title-container"
        onClick={() => setMenuOpen(false)}
      >
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
      <div className="header-links-compressed">
        <div
          className="header-links-compressed-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        {menuOpen && (
          <div
            className={`header-links-compressed-main ${
              darkmode && "header-links-compressed-main-darkmode"
            }`}
          >
            <Link1
              to="/work"
              text="work"
              onClick={() => setMenuOpen(false)}
              selected={selectedPage === "work"}
            />
            <Link1
              to="/skills"
              text="skills"
              onClick={() => setMenuOpen(false)}
              selected={selectedPage === "skills"}
            />
            <Link1
              to="/about"
              text="about"
              onClick={() => setMenuOpen(false)}
              selected={selectedPage === "about"}
            />
            <Link1
              to="/blog"
              text="blog"
              onClick={() => setMenuOpen(false)}
              selected={selectedPage === "blog"}
            />
            <Link1
              to="/cv"
              text="cv"
              onClick={() => setMenuOpen(false)}
              selected={selectedPage === "cv"}
            />
            <Link
              className="header-links-compressed-contact"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
