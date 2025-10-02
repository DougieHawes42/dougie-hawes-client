import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { Button1, Button2 } from "../../utils/buttons";

import "./style.scss";

const WorkItem = () => {
  const [workItem, setWorkItem] = useState(null);
  const [slideShowIndex, setSlideShowIndex] = useState(0);

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

  return (
    <div className="route work-item">
      {workItem ? (
        <>
          <div className="work-item-title-container">
            <h3 className="work-item-title">{workItem.title}</h3>
            <p className="work-item-subtitle">{workItem.subtitle}</p>
          </div>
          <div className="work-item-grid">
            <div className="work-item-image-container">
              <div className="work-item-image-slideshow">
                <img
                  className="work-item-image"
                  src={`${process.env.REACT_APP_BACKEND_URL}${workItem.images[slideShowIndex].url}`}
                  alt=""
                />
                <FaChevronCircleLeft
                  className="work-item-image-chevron work-item-image-chevron-left"
                  onClick={() => {
                    if (slideShowIndex !== 0) {
                      setSlideShowIndex(slideShowIndex - 1);
                    } else {
                      setSlideShowIndex(workItem.images.length - 1);
                    }
                  }}
                />
                <FaChevronCircleRight
                  className="work-item-image-chevron work-item-image-chevron-right"
                  onClick={() => {
                    if (slideShowIndex !== workItem.images.length - 1) {
                      setSlideShowIndex(slideShowIndex + 1);
                    } else {
                      setSlideShowIndex(0);
                    }
                  }}
                />
              </div>
              <div className="work-item-links">
                <Button1
                  text="VIEW FRONTEND CODE"
                  to={workItem.clientCodeLink}
                />
                <Button1
                  text="VIEW BACKEND CODE"
                  to={workItem.serverCodeLink}
                />
                <Button2 text="VIEW SITE" to={workItem.siteLink} />
              </div>
            </div>
            <div
              className="work-item-description"
              dangerouslySetInnerHTML={{
                __html: workItem.html,
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
