import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <p className='title'>{props.language}</p>
      <p>{props.description}</p>
      <div className='card-links'>
        <a href={props.linkURL}>Link</a>
        <a href={props.sourceURL}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
