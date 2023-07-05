import React, { Fragment } from 'react';
import { BsSun } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { useEffect } from 'react';

const Navigation = (props) => {
  // Scroll functions to scroll to part of page on navigation click.
  const scrollToAbout = (e) => {
    e.preventDefault();
    props.aboutReference.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    props.workReference.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToLinks = (e) => {
    e.preventDefault();
    props.linksReference.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    console.log('hello');
    props.projectsReference.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTech = (e) => {
    e.preventDefault();
    console.log('hello');
    props.techReference.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

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
              onClick={scrollToAbout}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='tech'
              data-target='.tech'
              onClick={scrollToTech}
            >
              Tech
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='work'
              data-target='.work'
              onClick={scrollToWork}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='projects'
              data-target='.projects'
              onClick={scrollToProjects}
            >
              Code
            </a>
          </li>
          <li>
            <a
              href='/#'
              className='nav-link'
              data-page='footer'
              data-target='.footer'
              onClick={scrollToLinks}
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
