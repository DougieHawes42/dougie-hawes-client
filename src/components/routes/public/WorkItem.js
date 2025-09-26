import { Button1, Button2 } from "../../utils/buttons";

import "./style.scss";

const WorkItem = () => {
  return (
    <div className="route work-item">
      <div className="work-item-title-container">
        <h3 className="work-item-title">FreeDevCoop</h3>
        <p className="work-item-subtitle">
          A networking site for passionate developers
        </p>
      </div>
      <div className="work-item-grid">
        <div className="work-item-image-container">
          <div className="work-item-image-slideshow">
            {/* <img className="work-item-image" src={} alt="" /> */}
          </div>
          <div className="work-item-links">
            <Button1 text="VIEW FRONTEND CODE" />
            <Button1 text="VIEW BACKEND CODE" />
            <Button2 TEXT="VIEW SITE" />
          </div>
        </div>
        <div
          className="work-item-description"
          dangerouslySetInnerHTML={{
            __html: "",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WorkItem;
