import { Link } from "react-router-dom";

import "./style.scss";

export const Link1 = ({ to, text, selected }) => (
  <Link
    className={`link link1 ${selected ? "link1-selected" : "link1-unselected"}`}
    to={to}
  >
    {text}
  </Link>
);

export const Link2 = ({ to, icon }) => (
  <a href={to} target="_blank">
    {icon}
  </a>
);
