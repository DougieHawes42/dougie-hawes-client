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
  const [files, setFiles] = useState([]);

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

  const handleFilesChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]); // append instead of replace
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    for (let i = 0; i < files.length; i++) {
      data.append("images", files[i]);
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/work`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

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
      setFiles([]);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
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
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFilesChange}
          className="border p-2"
        />
        <div className="flex gap-2 flex-wrap">
          {files.length > 0 &&
            Array.from(files).map((file, idx) => (
              <span key={idx} className="text-sm bg-gray-100 p-1 rounded">
                {file.name}
              </span>
            ))}
        </div>
        <Button3 />
      </form>
    </div>
  );
};

export default WorkForm;
