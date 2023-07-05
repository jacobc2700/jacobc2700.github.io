import React, { Fragment } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function createProjectCard(project) {
  return (
    <ProjectCard
      name={project.name}
      date={project.date}
      description={project.description}
      linkURL={project.linkURL}
      sourceURL={project.sourceURL}
      technologies={project.technologies}
    />
  );
}

const Projects = (props) => {
  return (
    <Fragment>
      <section className='projects' ref={props.reference}>
        <h1 className='project-title'>Projects</h1>
        {projects.map(createProjectCard)}
      </section>
    </Fragment>
  );
};

export default Projects;
