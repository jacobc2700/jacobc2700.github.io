import React, { Fragment } from "react";

const About = (props) => {
  return (
    <Fragment>
      <section className="about" ref={props.reference}>
        <h1>About Me</h1>
        <div className="biography">
          <div>
            <p>
              Hello! My name is Jacob Chang and I'm a Junior at the University
              of Illinois at Urbana-Champaign studying Computer Science. I'm
              currently working on a project called{" "}
              <a
                id="projectName"
                href="https://github.com/jacobc2700/[untitled]"
              >
                [untitled]
              </a>
              , which will hopefully provide a platform for software engineers
              to learn, network, and practice their software development skills.
              Check out my resume below and feel free to reach out to me. I am
              always open to new opportunities or just to chat.
            </p>
          </div>
        </div>

        <div className="technology-list-container">
          <div>
            <div>
              <i className="devicon devicon-react-original colored"></i>
              <span className="devicon-label">React</span>
            </div>
            <div>
              <i className="devicon devicon-javascript-plain colored"></i>
              <span className="devicon-label">JavaScript</span>
            </div>
            <div>
              <i className="devicon devicon-mongodb-plain colored"></i>
              <span className="devicon-label">MongoDB</span>
            </div>
          </div>
          <div>
            <div>
              <i className="devicon devicon-nodejs-plain colored"></i>
              <span className="devicon-label">Node.js</span>
            </div>
            <div>
              <i className="devicon devicon-python-plain colored"></i>
              <span className="devicon-label">Python</span>
            </div>
            <div>
              <i className="devicon devicon-html5-plain colored"></i>
              <span className="devicon-label">HTML</span>
            </div>
          </div>
          <div>
            <div>
              <i className="devicon devicon-cplusplus-plain colored"></i>
              <span className="devicon-label">C++</span>
            </div>
            <div>
              <i className="devicon devicon-numpy-original colored"></i>
              <span className="devicon-label">NumPy</span>
            </div>
            <div>
              <i className="devicon devicon-sass-original colored"></i>
              <span className="devicon-label">SASS</span>
            </div>
          </div>
          <div>
            <div>
              <i className="devicon devicon-java-plain colored"></i>
              <span className="devicon-label">Java</span>
            </div>
            <div>
              <i className="devicon devicon-postgresql-plain colored"></i>
              <span className="devicon-label">PostgreSQL</span>
            </div>
            <div>
              <i className="devicon devicon-tensorflow-original colored"></i>
              <span className="devicon-label">TensorFlow</span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
