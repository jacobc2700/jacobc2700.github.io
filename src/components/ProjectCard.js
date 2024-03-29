import React from 'react';
import Chip from '@mui/material/Chip';

const ProjectCard = (props) => {
  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <p className='title'>{props.date}</p>
      <p>{props.description}</p>
      <div className='card-links chip-container'>
        {props.technologies.map((data) => {
          return <Chip className='chip' label={data} />;
        })}
      </div>
      {/* Only render each one if it exists (conditional rendering). */}
      <div className='card-links'>
        {props.linkURL == '#' ? null : (
          <a target='_blank' href={props.linkURL}>
            Demo
          </a>
        )}
        {props.sourceURL == '#' ? null : (
          <a target='_blank' href={props.sourceURL}>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
