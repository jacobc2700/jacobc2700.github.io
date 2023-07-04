import React, { useState } from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Work from './components/Work';
import { useRef } from 'react';

import './scss/main.scss';
import Technology from './components/Technology';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const aboutReference = useRef(null);
  const projectsReference = useRef(null);
  const linksReference = useRef(null);
  const workReference = useRef(null);

  return (
    <div className={theme ? theme : 'dark'}>
      <div className='App'>
        <Landing
          aboutReference={aboutReference}
          linksReference={linksReference}
          projectsReference={projectsReference}
          workReference={workReference}
          theme={theme}
          setTheme={setTheme}
        ></Landing>
        <About reference={aboutReference}></About>
        <Technology></Technology>
        <Work reference={workReference}></Work>
        <Projects reference={projectsReference}></Projects>
        <Footer reference={linksReference}></Footer>
      </div>
    </div>
  );
};

export default App;
