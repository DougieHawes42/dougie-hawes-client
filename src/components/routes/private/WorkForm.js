import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subtitle", formData.subtitle);
      data.append("html", formData.html);
      data.append("hashtags", formData.hashtags);
      data.append("siteLink", formData.siteLink);
      data.append("clientCodeLink", formData.clientCodeLink);
      data.append("serverCodeLink", formData.serverCodeLink);
      data.append("category", formData.category);
      // if (file) data.append("image", file);

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/work`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("✅ Work submitted:", res.data);

      setFormData({
        title: "",
        subtitle: "",
        html: "",
        hashtags: "",
        siteLink: "",
        clientCodeLink: "",
        serverCodeLink: "",
        category: "",
      });
      setFile(null);
    } catch (error) {
      console.error(
        "❌ Error submitting work:",
        error.response?.data || error.message
      );
    }
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
        <div onClick={() => setFormData({ ...formData, category: "app" })}>
          APP
        </div>
        <div onClick={() => setFormData({ ...formData, category: "site" })}>
          SITE
        </div>
        <div onClick={() => setFormData({ ...formData, category: "game" })}>
          GAME
        </div>
        <Button3 />
      </form>
    </div>
  );
};

export default WorkForm;
