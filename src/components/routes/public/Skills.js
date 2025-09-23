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
  SiVisualstudiocode,
  SiWebpack,
  SiNpm,
} from "react-icons/si";

import { Card2 } from "../../utils/cards";

import "./style.scss";

const Skills = () => {
  const skills = [
    // Frontend
    { name: "HTML5", icon: <SiHtml5 />, level: "Expert" },
    { name: "CSS3", icon: <SiCss3 />, level: "Advanced" },
    { name: "JavaScript", icon: <SiJavascript />, level: "Proficient" },
    { name: "SCSS", icon: <SiSass />, level: "Intermediate" },
    { name: "React.js", icon: <SiReact />, level: "Intermediate" },
    { name: "Redux", icon: <SiReact />, level: "Intermediate" },
    { name: "TypeScript", icon: <SiJavascript />, level: "Intermediate" },
    { name: "Node.js", icon: <SiNodedotjs />, level: "Intermediate" },
    { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
    { name: "SQL", icon: <SiMongodb />, level: "Basic" },
    { name: "Git", icon: <SiNodedotjs />, level: "Proficient" },
    { name: "GitHub", icon: <SiNodedotjs />, level: "Proficient" },
    { name: "VS Code", icon: <SiNodedotjs />, level: "Proficient" },
    { name: "REST APIs", icon: <SiExpress />, level: "Proficient" },
    { name: "Webpack", icon: <SiJavascript />, level: "Intermediate" },
    { name: "npm", icon: <SiNodedotjs />, level: "Proficient" },
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
