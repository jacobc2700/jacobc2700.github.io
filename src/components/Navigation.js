import React, { Fragment } from 'react';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { useEffect } from 'react';

const Navigation = (props) => {
  useEffect(() => {
    props.setTheme(localStorage.getItem('theme'));
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (props.theme === 'light') {
      localStorage.setItem('theme', 'dark');
      props.setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      props.setTheme('light');
    }
  };

  const icon =
    localStorage.getItem('theme') === 'light' ? <BsSun /> : <FiMoon />;

  return (
    <Fragment>
      <nav className='navbar'>
        <h1>
          <a href='/#'>Jacob</a>
          <button className={'toggleThemeButton'} onClick={handleClick}>
            {icon}
          </button>
        </h1>
        <ul>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='landing'
              data-target='.landing'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='about'
              data-target='.about'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='projects'
              data-target='.projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='footer'
              data-target='.footer'
            >
              Links
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
