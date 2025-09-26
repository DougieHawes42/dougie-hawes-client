import { Link } from "react-router-dom";

import "./style.scss";

export const Button1 = ({ to, text }) => (
  <a className="button button1" href={to} target="_blank">
    {text}
  </a>
);

export const Button2 = ({ to }) => (
  <a className="button button2" href={to} target="_blank">
    VIEW SITE
  </a>
);
