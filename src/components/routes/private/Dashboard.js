import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BlogForm from "./BlogForm";
import WorkForm from "./WorkForm";

import "./style.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="route dashboard">
      <WorkForm />
      <BlogForm />
    </div>
  );
};

export default Dashboard;
