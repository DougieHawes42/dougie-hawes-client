import axios from "axios";

import { useState } from "react";

import { Button3 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.scss";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "title1",
    subtitle: "subtitle1",
    html: "<h3>subtitle1</h3><p>lorem ipsum...</p>",
  });
  const [file, setFile] = useState(null);

  const { title, subtitle, html } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("subtitle", formData.subtitle);
      data.append("html", formData.html);
      if (file) data.append("image", file);

      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/blog`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("✅ Blog submitted:", res.data);

      setFormData({ title: "", subtitle: "", html: "" });
      setFile(null);
    } catch (error) {
      console.error(
        "❌ Error submitting blog:",
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="dashboard-column">
      <h2 className="dashboard-column-title">submit blog</h2>
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
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <Button3 />
      </form>
    </div>
  );
};

export default BlogForm;
