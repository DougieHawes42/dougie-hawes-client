import axios from "axios";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Card1 } from "../../utils/cards";

// hard coding
import Site from "../../../display/media/site.png";
// hard coding

import "./style.scss";

const Work = () => {
  const [workItems, setWorkItems] = useState([]);
  const [selectedLinks, setSelectedLinks] = useState({
    apps: true,
    sites: true,
    games: true,
  });

  const { apps, sites, games } = selectedLinks;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/work`
        );
        setWorkItems(res.data);
      } catch (err) {
        console.error("Error fetching work items:", err);
        setError("Failed to fetch work items");
      }
    };

    fetchWorks();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="route work"
    >
      <h2 className="route-title">work</h2>
      <div className="work-links">
        <div
          className={`work-link ${
            apps && sites && games && "work-link-selected"
          }`}
          onClick={() =>
            setSelectedLinks({ apps: true, sites: true, games: true })
          }
        >
          all
        </div>
        <div
          className={`work-link ${
            apps && !sites && !games && "work-link-selected"
          }`}
          onClick={() =>
            setSelectedLinks({ apps: true, sites: false, games: false })
          }
        >
          apps
        </div>
        <div
          className={`work-link ${
            !apps && sites && !games && "work-link-selected"
          }`}
          onClick={() =>
            setSelectedLinks({ apps: false, sites: true, games: false })
          }
        >
          sites
        </div>
        <div
          className={`work-link ${
            !apps && !sites && games && "work-link-selected"
          }`}
          onClick={() =>
            setSelectedLinks({ apps: false, sites: false, games: true })
          }
        >
          games
        </div>
      </div>
      <div className="work-grid">
        {workItems ? (
          workItems.map((w) => (
            <Card1 key={w._id} image={Site} title={w.title} description="" />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </motion.div>
  );
};

export default Work;
