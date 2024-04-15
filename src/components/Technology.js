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
        {/* Tools */}
        <div className="tech-listing">
          {/* <h2></h2> */}
          <div className="technology-list-container">
            <div>
              <div>
                <i className="devicon devicon-linux-plain"></i>
                <span className="devicon-label">Linux</span>
              </div>
              <div>
                <i className="devicon devicon-java-plain colored"></i>
                <span className="devicon-label">Java</span>
              </div>
              <div>
                <i className="devicon devicon-cplusplus-plain colored"></i>
                <span className="devicon-label">C++</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-c-plain colored"></i>
                <span className="devicon-label">C</span>
              </div>
              <div>
                <i className="devicon devicon-typescript-plain colored"></i>
                <span className="devicon-label">TypeScript</span>
              </div>
              <div>
                <i className="devicon devicon-bash-plain"></i>
                <span className="devicon-label">Bash</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-python-plain colored"></i>
                <span className="devicon-label">Python</span>
              </div>
              <div>
                <i className="devicon devicon-rust-original"></i>
                <span className="devicon-label">Rust</span>
              </div>

              <div>
                <i className="devicon devicon-ocaml-plain colored"></i>
                <span className="devicon-label">OCaml</span>
              </div>
            </div>
            <div>
              <div>
                <i className="devicon devicon-cmake-plain colored"></i>
                <span className="devicon-label">CMake</span>
              </div>
              <div>
                <i className="devicon devicon-git-plain colored"></i>
                <span className="devicon-label">Git</span>
              </div>
              <div>
                <i className="devicon devicon-docker-plain colored"></i>
                <span className="devicon-label">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
