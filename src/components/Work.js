import React from 'react';
import { Chrono } from 'react-chrono';
import work from '../data/work';

const Work = (props) => {
  const mode = 'VERTICAL_ALTERNATING';

  return (
    <section className='work' ref={props.reference}>
      <h1 className='work-title'>Work Experience</h1>
      <Chrono
        className='work-timeline'
        items={work}
        mode={mode}
        theme={{
          primary: '#00bc8c',
          secondary: '#00bc8c',
          cardBgColor: 'white',
          cardForeColor: 'white',
          titleColor: 'white',
          titleColorActive: 'white',
        }}
      />
    </section>
  );
};

export default Work;
