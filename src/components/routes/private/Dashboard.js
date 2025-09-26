import { Input1 } from "../../utils/inputs";

import "./style.scss";

const Dashboard = () => {
  return (
    <div className="route dashboard">
      <div className="dashboard-column">
        <h2 className="dashboard-column-title">submit work</h2>
        <form className="dashboard-form">
          <Input1 label="app name" />
          <Input1 label="subtitle" />
        </form>
      </div>
      <div className="dashboard-column">
        <h2 className="dashboard-column-title">submit blog</h2>
        <form className="dashboard-form">
          <Input1 label="title" />
          <Input1 label="subtitle" />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
