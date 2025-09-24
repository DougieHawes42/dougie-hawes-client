import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import DarkmodeToggle from "./components/layout/DarkmodeToggle";

import Home from "./components/routes/public/Home";
import Work from "./components/routes/public/Work";
import WorkItem from "./components/routes/public/WorkItem";
import Skills from "./components/routes/public/Skills";
import About from "./components/routes/public/About";
import Blog from "./components/routes/public/Blog";
import BlogItem from "./components/routes/public/BlogItem";
import CV from "./components/routes/public/CV";
import Contact from "./components/routes/public/Contact";

import "./display/style/style.scss";

const App = () => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`app ${darkmode ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmode} />
      <DarkmodeToggle
        darkmode={darkmode}
        onClick={() => setDarkmode(!darkmode)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkItem />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} darkmode={darkmode} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
