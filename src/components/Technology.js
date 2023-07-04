// List out fields of interest and specific technologies.
import React from 'react';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const Technology = (props) => {
  return (
    <section className='tech' ref={props.reference}>
      <h1>Technologies</h1>
      <div className='courses'>
        <h2>JavaScript</h2>
        <div className='technology-list-container'>
          <div>
            <div>
              <i className='devicon devicon-react-original colored'></i>
              <span className='devicon-label'>React</span>
            </div>
            <div>
              <i className='devicon devicon-javascript-plain colored'></i>
              <span className='devicon-label'>JavaScript</span>
            </div>
            <div>
              <i className='devicon devicon-mongodb-plain colored'></i>
              <span className='devicon-label'>MongoDB</span>
            </div>
          </div>
          <div>
            <div>
              <i className='devicon devicon-nodejs-plain colored'></i>
              <span className='devicon-label'>Node.js</span>
            </div>
            <div>
              <i className='devicon devicon-html5-plain colored'></i>
              <span className='devicon-label'>HTML</span>
            </div>
            <div>
              <i className='devicon devicon-sass-original colored'></i>
              <span className='devicon-label'>SASS</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
          React
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
          Angular
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <SubdirectoryArrowRightIcon></SubdirectoryArrowRightIcon>
          Vue
        </div>
      </div> */}
    </section>
  );
};

export default Technology;
