import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button1, Button2 } from "../../utils/buttons";

import "./style.scss";

const WorkItem = () => {
  const [workItem, setWorkItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchWorkItem = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/work/${id}`
        );

        setWorkItem(res.data);
      } catch (error) {
        console.error("Error fetching work item:", error);
      }
    };

    if (id) {
      fetchWorkItem();
    }
  }, [id]);

  console.log(workItem);

  return (
    <div className="route work-item">
      {workItem ? (
        <>
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
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default WorkItem;
