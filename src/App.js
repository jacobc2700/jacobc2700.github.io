import React, { useState } from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRef } from "react";

import "./scss/main.scss";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const aboutReference = useRef(null);
  const linksReference = useRef(null);

  return (
    <div className={theme ? theme : "dark"}>
      <div className="App">
        <Landing
          aboutReference={aboutReference}
          linksReference={linksReference}
          theme={theme}
          setTheme={setTheme}
        ></Landing>
        <About reference={aboutReference}></About>
        {/* <Projects></Projects> */}
        <Footer reference={linksReference}></Footer>
      </div>
    </div>
  );
};

export default App;
