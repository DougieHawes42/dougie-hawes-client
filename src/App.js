import { useState } from "react";

import Header from "./components/layout/Header";

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
    </div>
  );
};

export default App;
