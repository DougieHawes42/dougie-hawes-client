import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./components/routes/public/Home";

import "./display/style/style.scss";
import DarkmodeToggle from "./components/layout/DarkmodeToggle";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header />
      <DarkmodeToggle
        darkmode={darkmode}
        onClick={() => setDarkmode(!darkmode)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
