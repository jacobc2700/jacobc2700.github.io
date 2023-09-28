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
              of Illinois at Urbana-Champaign (UIUC) majoring in Computer
              Science with a minor in Statistics. I am a computer programmer who
              is interested in developing scalable & optimized system software.
              I'm primarily based in Boston, Massachusetts. My focus area is
              operating systems, networking, and security. However, I have
              experience with full-stack web development, machine learning, and
              data science too. Other hobbies I've had include playing the{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLts6Hfh7zIYthSGU38ZxyQMrtRlzyQHqd"
              >
                piano
              </a>
              , making videos about my{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/playlist?list=PLts6Hfh7zIYs0-wPDHam0TwG25oWJ7qq2"
              >
                life
              </a>
              , and solving{" "}
              <a target="_blank" href="https://youtu.be/8TQSZfqI7lU">
                cubes
              </a>
              . My favorite video games are{" "}
              <a target="_blank" href="https://youtu.be/05911JYU2L4">
                Counter-Strike: Global Offensive
              </a>
              ,{" "}
              <a target="_blank" href="https://youtu.be/fDyRTEFM-C8">
                Minecraft
              </a>
              , and{" "}
              <a target="_blank" href="https://youtu.be/kVqXXhPiMj4">
                Clash Royale
              </a>
              . Check out my experiences below and please feel free to reach out
              to me. I am always open to new opportunities, project ideas, or
              just to chat.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
