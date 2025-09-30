import { useState } from "react";

import { Button3 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.scss";

const WorkForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    html: "",
    hashtags: "",
    siteLink: "",
    clientCodeLink: "",
    serverCodeLink: "",
    category: "",
  });
  const [file, setFile] = useState(null);

  const {
    title,
    subtitle,
    html,
    hashtags,
    siteLink,
    clientCodeLink,
    serverCodeLink,
    category,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="dashboard-column">
      <h2 className="dashboard-column-title">submit work</h2>
      <form onSubmit={handleSubmit}>
        <Input1
          label="title"
          name="title"
          onChange={handleTextChange}
          value={title}
        />
        <Input1
          label="subtitle"
          name="subtitle"
          onChange={handleTextChange}
          value={subtitle}
        />
        <Input2
          label="html"
          name="html"
          onChange={handleTextChange}
          value={html}
        />
        <Input1
          label="hashtags"
          name="hashtags"
          onChange={handleTextChange}
          value={hashtags}
        />
        <Input1
          label="siteLink"
          name="siteLink"
          onChange={handleTextChange}
          value={siteLink}
        />
        <Input1
          label="clientCodeLink"
          name="clientCodeLink"
          onChange={handleTextChange}
          value={clientCodeLink}
        />
        <Input1
          label="serverCodeLink"
          name="serverCodeLink"
          onChange={handleTextChange}
          value={serverCodeLink}
        />
        <Button3 />
      </form>
    </div>
  );
};

export default WorkForm;
