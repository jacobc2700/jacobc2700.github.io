// List out fields of interest and specific technologies.
import React from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const Technology = (props) => {
  return (
    <section className="tech" ref={props.reference}>
      <h1>Technologies</h1>
      {/* JavaScript, Python */}
      {/* C/C++, Java */}
      {/* Tools */}
      {/* Courses, Fields */}
      <div class="adjacent-tech-listings">
        {/* JavaScript */}
        <div className="tech-listing">
          <h2>JavaScript</h2>
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-react-original colored"></i>
                <span className="devicon-label">React</span>
              </div>
              <div>
                <i className="devicon devicon-nodejs-plain colored"></i>
                <span className="devicon-label">Node.js</span>
              </div>
              <div>
                <i className="devicon devicon-mongodb-plain colored"></i>
                <span className="devicon-label">MongoDB</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-express-original colored"></i>
                <span className="devicon-label">Express</span>
              </div>
              <div>
                <i className="devicon devicon-nextjs-original"></i>
                <span className="devicon-label">Next.js</span>
              </div>
              <div>
                <i className="devicon devicon-sass-original colored"></i>
                <span className="devicon-label">Sass</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-html5-plain colored"></i>
                <span className="devicon-label">HTML</span>
              </div>
              <div>
                <i className="devicon devicon-typescript-plain colored"></i>
                <span className="devicon-label">TypeScript</span>
              </div>
              <div>
                <i className="devicon devicon-redux-original colored"></i>
                <span className="devicon-label">Redux</span>
              </div>
            </div>
          </div>
        </div>
        {/* Python */}
        <div className="tech-listing">
          <h2>Python</h2>
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-numpy-original colored"></i>
                <span className="devicon-label">NumPy</span>
              </div>
              <div>
                <i className="devicon devicon-tensorflow-original colored"></i>
                <span className="devicon-label">TensorFlow</span>
              </div>
              <div>
                <i className="devicon devicon-pytorch-original colored"></i>
                <span className="devicon-label">PyTorch</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-pandas-original"></i>
                <span className="devicon-label">Pandas</span>
              </div>
              <div>
                <i className="devicon devicon-jupyter-plain colored"></i>
                <span className="devicon-label">Jupyter</span>
              </div>
              <div>
                <i className="devicon devicon-pytest-plain colored"></i>
                <span className="devicon-label">Pytest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="adjacent-tech-listings">
        {/* C/C++ */}
        <div className="tech-listing">
          <h2>C & C++</h2>
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-cplusplus-plain colored"></i>
                <span className="devicon-label">C++</span>
              </div>
              <div>
                <i className="devicon devicon-c-plain colored"></i>
                <span className="devicon-label">C</span>
              </div>
              <div>
                <i className="devicon devicon-bash-plain"></i>
                <span className="devicon-label">Bash</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-react-original colored"></i>
                <span className="devicon-label">CMake</span>
              </div>
              <div>
                <i className="devicon devicon-docker-plain colored"></i>
                <span className="devicon-label">Docker</span>
              </div>
              <div>
                <i className="devicon devicon-gcc-plain colored"></i>
                <span className="devicon-label">GCC</span>
              </div>
            </div>
          </div>
        </div>
        {/* Java */}
        <div className="tech-listing">
          <h2>Java</h2>
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-android-plain colored"></i>
                <span className="devicon-label">Android</span>
              </div>
              <div>
                <i className="devicon devicon-spring-plain colored"></i>
                <span className="devicon-label">Spring</span>
              </div>
              <div>
                <i className="devicon devicon-mysql-plain colored"></i>
                <span className="devicon-label">MySQL</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-oracle-original colored"></i>
                <span className="devicon-label">Oracle</span>
              </div>
              <div>
                <i className="devicon devicon-androidstudio-plain colored"></i>
                <span className="devicon-label">Android Studio</span>
              </div>
              <div>
                <i className="devicon devicon-gradle-plain"></i>
                <span className="devicon-label">Gradle</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-postgresql-plain colored"></i>
                <span className="devicon-label">PostgreSQL</span>
              </div>
              <div>
                <i className="devicon devicon-apache-plain colored"></i>
                <span className="devicon-label">Apache</span>
              </div>
              <div>
                <i className="devicon devicon-java-plain colored"></i>
                <span className="devicon-label">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="adjacent-tech-listings">
        {/* Tools */}
        <div className="tech-listing">
          <h2>Tools</h2>
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-anaconda-original colored"></i>
                <span className="devicon-label">Anaconda</span>
              </div>
              <div>
                <i className="devicon devicon-npm-original-wordmark colored"></i>
                <span className="devicon-label">NPM</span>
              </div>
              <div>
                <i className="devicon devicon-markdown-original"></i>
                <span className="devicon-label">Markdown</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-git-plain colored"></i>
                <span className="devicon-label">Git</span>
              </div>
              <div>
                <i className="devicon devicon-github-original"></i>
                <span className="devicon-label">GitHub</span>
              </div>
              <div>
                <i className="devicon devicon-vscode-plain colored"></i>
                <span className="devicon-label">Visual Studio Code</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-linux-plain"></i>
                <span className="devicon-label">Linux</span>
              </div>
              <div>
                <i className="devicon devicon-redis-plain colored"></i>
                <span className="devicon-label">Redis</span>
              </div>
              <div>
                <i className="devicon devicon-heroku-original colored"></i>
                <span className="devicon-label">Heroku</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-amazonwebservices-original colored"></i>
                <span className="devicon-label">AWS</span>
              </div>
              <div>
                <i className="devicon devicon-ubuntu-plain colored"></i>
                <span className="devicon-label">Ubuntu</span>
              </div>
              <div>
                <i className="devicon devicon-googlecloud-plain colored"></i>
                <span className="devicon-label">Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="adjacent-tech-listings">
        {/* Courses */}
        <div className="tech-listing last-tech-listing">
          <h2>Courses</h2>

          {/* Make a loop for this instead... */}
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 124: Introduction to Computer Science (Java)
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 128: Introduction to Computer Science (C++)
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 173: Discrete Structures
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 211: Ethics for Computer Science
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 222: Software Design Lab
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 225: Data Structures
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 233: Computer Architecture
          </div>

          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 357: Numerical Methods I
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 361: Probability and Statistics
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 374: Algorithms and Models of Computation
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 411: Database Systems
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            CS 440: Artificial Intelligence
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            MATH 241: Multivariable Calculus
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            MATH 257: Linear Algebra
          </div>
        </div>
        <div className="tech-listing fields-tech-listing">
          <h2>Fields</h2>

          {/* Make a loop for this instead... */}
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Front-End Web Development
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Back-End Web Development
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Full-Stack Web Development
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Data Science
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Data Analysis
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Machine Learning
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Artificial Intelligence
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Software Engineering
          </div>
          <div className="single-course-container">
            <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
            Systems Programming
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
