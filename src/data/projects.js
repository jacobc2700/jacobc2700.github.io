const projects = [
  {
    name: "Flexer",
    date: "January 2023 - July 2023",
    description:
      "Flexer is a platform for software engineers to manage their professional portfolio and connect with other engineers. Registered users can also keep track of their favorite companies, compare compensation packages, track solved interview problems, and write private notes. The back-end is built with Django & MySQL, while the front-end is built with React.js, Material UI, and Next.js.",
    linkURL: "#",
    sourceURL: "https://github.com/jacobc2700/flexer",
    technologies: ["TypeScript", "Django", "MySQL", "Next.js", "Supabase"],
  },
  {
    name: "Poker Hand Analyzer",
    date: "December 2022 - January 2023",
    description:
      "Wrote custom algorithms for determining win likelihoods of players, determining highest hands, & validating sets of hands with C++. Created high-coverage unit tests with the Catch2 framework and debugged code with Valgrind & GDB. Handled file I/O & CLI commands for typical Poker rounds and followed the Object-Oriented Programming (OOP) paradigm for class designs.",
    linkURL: "#",
    sourceURL: "#",
    technologies: ["C++", "Valgrind", "Make", "GDB"],
  },
  {
    name: "Bike New York City",
    date: "December 2022 - January 2023",
    description:
      "Utilized Pandas to clean and process bike routes from NYC Open Data. Represented NYC’s bike routes as an undirected weighted graph and plotted the implementation on a Folium leaflet map with Python. Implemented Dijkstra’s algorithm to find the shortest bike path between locations in NYC.",
    linkURL: "#",
    sourceURL: "https://github.com/pillious/bike-nyc",
    technologies: ["Pandas", "Jupyter", "Folium"],
  },
  {
    name: "Smart Documentation",
    date: "May 2022 - August 2022",
    description:
      "Wrote scripts for automatic Python codebase documentation with Python, Sphinx, and GitHub Actions. Automatically generated RST files. Configured automatic deployment on GitHub Pages with a YAML file workflow. Utilized Python OS module for automatically running various scripts.",
    linkURL: "https://amerenicenter.github.io/smart_documentation/",
    sourceURL: "https://github.com/AmerenICenter/smart_documentation",
    technologies: ["Sphinx", "GitHub Pages", "GitHub Actions", "YAML"],
  },
  {
    name: "Ameren Innovation Center Website",
    date: "May 2022 - August 2022",
    description:
      "Developed a responsive website for the Ameren Innovation Center located at UIUC's Research Park. Utilized React.js, HTML, CSS, JavaScript, jQuery, and various front-end React libaries including Material UI and React Chrono. Deployed the website on GitHub Pages for public viewing on Ameren's internal network.",
    linkURL: "https://amerenicenter.github.io/#/",
    sourceURL: "https://github.com/AmerenICenter/AmerenICenter.github.io",
    technologies: ["React", "Material UI", "CSS"],
  },
  {
    name: "Rate My General Education Courses",
    date: "January 2022 - April 2022",
    description:
      "Developed a Node.js web application for UIUC students to browse and rate general education courses. Received course information from public GitHub datasets & imported the data into MongoDB Atlas. Presented and demoed at Engineering Open House (EOH) 2022.",
    linkURL: "#",
    sourceURL: "https://github.com/inolasv/dev-ada-ratemygeneds",
    technologies: ["MongoDB", "Node.js", "Mongo Atlas"],
  },
  {
    name: "COVID-19 Data Dashboard",
    date: "March 2020 - June 2020",
    description:
      "Built a web dashboard for browsing COVID-19 statistics with Express.js, Node.js, MongoDB, NumPy, CSS, and SASS. Deployed on Heroku with a MongoDB Atlas database. Wrote REST API routes for handling JSON data from public COVID-19 data APIs. Enabled country, county, & state level views for the data. Presented data within graphs & charts on the user interface.",
    linkURL: "https://www.youtube.com/watch?v=8eJRk9nEbwI",
    sourceURL: "#",
    technologies: ["MongoDB", "JavaScript", "Node.js"],
  },
  {
    name: "Newton Pavements",
    date: "August 2019 - December 2019",
    description:
      "Recruited by City Councilor & Representative Jake Auchincloss to develop city website for viewing pavement conditions in Newton, MA. Used by Newton residents to track city construction projects spanning 8 years (2017 - 2025). Created with Bootstrap, jQuery, JavaScript, HTML, CSS and the Google Maps API.",
    linkURL: "https://www.jacobechang.com/newton-pavements/",
    sourceURL: "#",
    technologies: ["jQuery", "Google Maps", "Bootstrap", "HTML", "CSS"],
  },
  {
    name: "Newton Employee Salaries",
    date: "May 2019 - August 2019",
    description:
      "Created a Node.js web application for viewing salaries of Newton Public Schools employees. Public data spanning years 2007 to 2016 was pulled from the Newton City Hall website. Previously deployed on Amazon RDS for PostreSQL. Wrote SQL queries which operated on 100,000+ rows.",
    linkURL: "https://www.youtube.com/watch?v=eYor5dEHkTI",
    sourceURL: "#",
    technologies: ["Node.js", "AWS", "PostgreSQL"],
  },
  {
    name: "Flask Audio Player",
    date: "December 2018 - August 2019",
    description:
      "Built a web application for playing audio files from YouTube. Users can save videos from YouTube to their library and organize videos into playlists. There are also options for shuffle play, downloading videos, and viewing video statistics. Utilized the YouTube API for video data.",
    linkURL: "#",
    sourceURL: "https://github.com/jacobc2700/audio-player",
    technologies: ["Flask", "Python", "SQLite", "JavaScript", "jQuery"],
  },
];

export default projects;
