import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogForm from "./BlogForm";
import WorkForm from "./WorkForm";

import "./style.scss";

const Dashboard = () => {
  const [showBlog, setShowBlog] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="route dashboard">
      <div className="dashboard-toggle">
        <div
          className="dashboard-toggle-link"
          onClick={() => setShowBlog(false)}
        >
          WORK
        </div>
        <div
          className="dashboard-toggle-link"
          onClick={() => setShowBlog(true)}
        >
          BLOG
        </div>
      </div>
      {showBlog ? <BlogForm /> : <WorkForm />}
    </div>
  );
};

export default Dashboard;
