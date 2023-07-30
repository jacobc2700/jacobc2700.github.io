import React, { Fragment } from 'react';
import InfoIcon from '@mui/icons-material/Info';

const Footer = (props) => {
  return (
    <Fragment>
      <footer className='footer' ref={props.reference}>
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
          href='https://www.linkedin.com/in/jechang3/'
          data-tooltip='LinkedIn'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-linkedin'></i>
        </a>
        <a
          href='https://drive.google.com/file/d/1G_l-9W58LfUbNqPZK8-0Y9tuLXjxdz6t/view'
          data-tooltip='Resume'
          data-tooltip-location='top'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='footer-icon fa fa-file'></i>
        </a>
        <a
          href='mailto:jacobchang124@gmail.com'
          data-tooltip='Gmail'
          data-tooltip-location='top'
        >
          <i className='footer-icon fa fa-envelope'></i>
        </a>

        {/* Last updated... */}
        <div className='last-updated'>
          <span>Last updated on 7/30/2023.</span>
        </div>

        <p className='footer-text'>Designed by Jacob with ❤️</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
