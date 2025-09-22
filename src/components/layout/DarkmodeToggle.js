import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";

import "./style.scss";

const DarkmodeToggle = ({ darkmode, onClick }) => {
  return (
    <div className="darkmode-toggle" onClick={onClick}>
      {darkmode ? <LuLightbulb /> : <LuLightbulbOff />}
    </div>
  );
};

export default DarkmodeToggle;
