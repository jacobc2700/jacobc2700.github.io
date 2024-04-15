import React, { useState, useRef } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Work from "./components/Work";

import "./scss/main.scss";
import Technology from "./components/Technology";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const aboutReference = useRef(null);
  const projectsReference = useRef(null);
  const linksReference = useRef(null);
  const workReference = useRef(null);
  const techReference = useRef(null);

  return (
    <div className={theme ? theme : "dark"}>
      <div className="App">
        <Landing
          aboutReference={aboutReference}
          linksReference={linksReference}
          projectsReference={projectsReference}
          workReference={workReference}
          techReference={techReference}
          theme={theme}
          setTheme={setTheme}
        ></Landing>
        <About reference={aboutReference}></About>
        <Technology reference={techReference}></Technology>
        <Work reference={workReference}></Work>
        <Projects reference={projectsReference}></Projects>
        <Footer reference={linksReference}></Footer>
      </div>
    </div>
  );
};

export default App;
