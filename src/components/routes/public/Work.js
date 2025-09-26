import { useState } from "react";

import { Card1 } from "../../utils/cards";

import "./style.scss";

const Work = () => {
  const [selectedLinks, setSelectedLinks] = useState({
    apps: true,
    sites: true,
    games: true,
  });

  const { apps, sites, games } = selectedLinks;

  return (
    <div className="route work">
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
        {/* <Card1
          image={}
          title=""
          description=""
        /> */}
      </div>
    </div>
  );
};

export default Work;
