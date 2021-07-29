import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer'>
        <a
          href='https://github.com/jacobc2700'
          data-tooltip='GitHub'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-github'></i>
        </a>
        <a
          href='https://www.youtube.com/c/Humboo'
          data-tooltip='YouTube'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-youtube-play'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/jacob-chang-94a695191/'
          data-tooltip='LinkedIn'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-linkedin'></i>
        </a>
        <a
          href='mailto:jechang3@illinois.edu'
          data-tooltip='Email'
          data-tooltip-location='top'
        >
          <i className='footer-icon fa fa-envelope'></i>
        </a>

        <p className='footer-text'>Designed by Jacob</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
