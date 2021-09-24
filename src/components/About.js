import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <section className='about'>
        <h1>About Me</h1>
        <div className='biography'>
          <div>
            <p>
              Hello :) My name is Jacob Chang and I'm a student at UIUC studying
              Computer Science. Welcome to my website.
            </p>
          </div>
        </div>

        <div className='technology-list-container'>
          <div>
            <div>
              <i className='devicon devicon-mongodb-plain colored'></i>
              <span className='devicon-label'>MongoDB</span>
            </div>
            <div>
              <i className='devicon devicon-python-plain colored'></i>
              <span className='devicon-label'>Python</span>
            </div>
            <div>
              <i className='devicon devicon-html5-plain colored'></i>
              <span className='devicon-label'>HTML</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-express-original colored'></i>
              <span className='devicon-label'>Express</span>
            </div>
            <div>
              <i className='devicon devicon-java-plain colored'></i>
              <span className='devicon-label'>Java</span>
            </div>
            <div>
              <i className='devicon devicon-css3-plain colored'></i>
              <span className='devicon-label'>CSS</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-react-original colored'></i>
              <span className='devicon-label'>React</span>
            </div>
            <div>
              <i className='devicon devicon-sass-original colored'></i>
              <span className='devicon-label'>Sass</span>
            </div>
            <div>
              <i className='devicon devicon-javascript-plain colored'></i>
              <span className='devicon-label'>JavaScript</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-nodejs-plain colored'></i>
              <span className='devicon-label'>Node.js</span>
            </div>
            <div>
              <i className='devicon devicon-github-plain colored'></i>
              <span className='devicon-label'>GitHub</span>
            </div>
            <div>
              <i className='devicon devicon-heroku-plain colored'></i>
              <span className='devicon-label'>Heroku</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
