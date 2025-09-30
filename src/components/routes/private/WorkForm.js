import { useState } from "react";

import { Button3 } from "../../utils/buttons";

import "./style.scss";

const WorkForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };
  return (
    <div className="dashboard-column">
      <h2 className="dashboard-column-title">submit work</h2>
      <form onSubmit={handleSubmit}>
        <Button3 />
      </form>
    </div>
  );
};

export default WorkForm;
