import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiReact,
  SiRedux,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiWebpack,
  SiNpm,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbApi } from "react-icons/tb";
import { VscVscodeInsiders } from "react-icons/vsc";

import { Card2 } from "../../utils/cards";

import "./style.scss";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 />, level: "Expert" },
    { name: "CSS3", icon: <SiCss3 />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Proficient" },
    { name: "SCSS", icon: <SiSass />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
    { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
    { name: "React.js", icon: <SiReact />, level: "Intermediate" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Intermediate" },
    { name: "Redux", icon: <SiRedux />, level: "Intermediate" },
    { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate" },
    { name: "SQL", icon: <AiOutlineConsoleSql />, level: "Basic" },
    { name: "Git", icon: <SiGit />, level: "Proficient" },
    { name: "GitHub", icon: <SiGithub />, level: "Proficient" },
    { name: "VS Code", icon: <VscVscodeInsiders />, level: "Proficient" },
    { name: "REST APIs", icon: <TbApi />, level: "Proficient" },
    { name: "Webpack", icon: <SiWebpack />, level: "Intermediate" },
    { name: "npm", icon: <SiNpm />, level: "Proficient" },
  ];

  return (
    <div className="route skills">
      <h2 className="route-title">skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <Card2 name={skill.name} icon={skill.icon} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
