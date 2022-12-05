import React, { Fragment } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function createProjectCard(project) {
  return (
    <ProjectCard
      name={project.name}
      language={project.language}
      description={project.description}
      linkURL={project.linkURL}
      sourceURL={project.sourceURL}
    />
  );
}

const Projects = () => {
  return (
    <Fragment>
      <section className="projects">
        <h1 className="project-title">Projects</h1>
        {projects.map(createProjectCard)}
        {/* <div className='card'>
          <h1>Project Name</h1>
          <p className='title'>Language</p>
          <p>Description of project goes here.</p>
          <div className='card-links'>
            <a href='#'>Link</a>
            <a href='#'>Source</a>
          </div>
        </div>
        <div className='card'>
          <h1>Project Name</h1>
          <p className='title'>Language</p>
          <p>Description of project goes here.</p>
          <div className='card-links'>
            <a href='#'>Link</a>
            <a href='#'>Source</a>
          </div>
        </div>
        <div className='card'>
          <h1>Project Name</h1>
          <p className='title'>Language</p>
          <p>Description of project goes here.</p>
          <div className='card-links'>
            <a href='#'>Link</a>
            <a href='#'>Source</a>
          </div>
        </div> */}
        {/* <div className='card'>
          <h1>Flexer</h1>
          <p className='title'>JavaScript</p>
          <p>Flexer is a social media website for aspiring developers.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div>
        <div className='card'>
          <h1>Split</h1>
          <p className='title'>Java</p>
          <p>Java version of the Split board game by Hasbro Toys.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div>
        <div className='card'>
          <h1>Choicy</h1>
          <p className='title'>Python</p>
          <p>The college that you attend should be your choice.</p>
          <div className='card-links'>
            <a href='/#'>Website</a>
            <a href='/#'>GitHub</a>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
};

export default Projects;
