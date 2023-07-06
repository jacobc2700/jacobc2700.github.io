const projects = [
  {
    name: 'Flexer',
    date: 'May 2023 - June 2023',
    description:
      'Flexer is a platform for software engineers to build their professional portfolio, keep track of their job applications, connect with other engineers, and more. Built with React, Next.js, MySQL.',
    linkURL: '#',
    sourceURL: '#',
    technologies: ['Next.js', 'Django', 'MySQL', 'Supabase'],
  },
  {
    name: 'Steam Game Recommender',
    date: 'May 2023 - June 2023',
    description:
      'Built a full-stack Express/Node.js web application for users to maintain a Steam video game collection and receive game recommendations. Obtained data from a public Kaggle dataset with 10,000+ Steam games. Conceptualized the database design by drawing ER and UML diagrams. Wrote SQL queries that interacted with a MySQL database instance hosted on Google Cloud Platform (GCP). Implemented user authentication, CRUD operations, and advanced SQL queries including transactions, triggers, and stored procedures. Developed as part of CS 411 semester-long project.',
    linkURL: 'https://www.youtube.com/watch?v=zBsQd0mRvZM',
    sourceURL: '#',
    technologies: ['MySQL', 'GCP', 'Express', 'Node.js', 'EJS', 'Bootstrap'],
  },
  {
    name: 'Bike New York City',
    date: 'May 2023 - June 2023',
    description:
      'Utilized Pandas to clean and process bike routes from NYC Open Data. Represented NYC’s bike routes as an undirected weighted graph and plotted the implementation on a Folium leaflet map with Python. Implemented Dijkstra’s algorithm to find the shortest bike path between locations in NYC.',
    linkURL: '#',
    sourceURL: 'https://github.com/pillious/bike-nyc',
    technologies: ['Python', 'Jupyter', 'Anaconda'],
  },
  {
    name: 'Music Genre Classifier',
    date: 'May 2023 - June 2023',
    description:
      'Trained & optimized machine learning models (CNNs/RNNs) for the multiclass classification (10+ genres) of any audio file. Extracted MFCC features, reduced overfitting, & tuned hyperparameters to increase model accuracy. Converted user file uploads provided from the front-end into model inputs and displayed the predictions on a web interface built with React, Flask, and CSS.',
    linkURL: '#',
    sourceURL: 'https://github.com/CS222-UIUC/course-project-group-73',
    technologies: ['PyTorch', 'Python', 'Machine Learning'],
  },
  {
    name: 'SPIMBot',
    date: 'May 2023 - June 2023',
    description:
      'Translated C to MIPS assembly to control virtual robots with memory-mapped I/O. Handled interrupts/exceptions and used VMWare/QtSpim for development. Competed in tournament against 300+ students in CS 233 course.',
    linkURL: '#',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Handwritten Digits Classifier',
    date: 'May 2023 - June 2023',
    description:
      'Learned how to train a feed-forward neural network to classify handwritten digits from the MNIST dataset with 90%+ accuracy on the Google Colab platform. Compared model accuracies with GD, SGD, and ADAM optimizers. Plotted test losses & documented results with LaTeX as part of CS 361 course final project.',
    linkURL: '#',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Poker Hand Analyzer',
    date: 'May 2023 - June 2023',
    description:
      'Wrote custom algorithms for determining win likelihoods of players, determining highest hands, & validating sets of hands with C++. Created high-coverage unit tests with the Catch2 framework & debugged code with Valgrind/GDB. Handled file I/O & CLI commands for typical Poker rounds and followed the Object-Oriented Programming (OOP) paradigm for class designs.',
    linkURL: '#',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Smart Documentation',
    date: 'May 2022 - August 2022',
    description:
      'Wrote scripts for automatic Python codebase documentation with Python, Sphinx, and GitHub Actions. Automatically generated RST files by scraping text content on Python files in a given source directory. Configured automatic deployment to the web on GitHub Pages with a YAML file workflow configuration. Utilized the Python OS module for automatically running a collection of scripts.',
    linkURL: 'https://amerenicenter.github.io/smart_documentation/',
    sourceURL: 'https://github.com/AmerenICenter/smart_documentation',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Ameren Innovation Center Website',
    date: 'May 2022 - August 2022',
    description:
      "Developed a responsive website for the Ameren Innovation Center located at UIUC's Research Park. Utilized React.js, HTML, CSS, JavaScript, jQuery, and various front-end React libaries including Material UI and React Chrono. Deployed the website on GitHub Pages for public viewing on Ameren's internal network.",
    linkURL: 'https://amerenicenter.github.io/#/',
    sourceURL: 'https://github.com/AmerenICenter/AmerenICenter.github.io',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Rate My General Education Courses',
    date: 'January 2022 - April 2022',
    description:
      'Developed a Node.js web application for UIUC students to browse and rate general education courses. Received course information from public GitHub datasets & imported the data into MongoDB Atlas. Presented and demoed at Engineering Open House (EOH) 2022.',
    linkURL: '#',
    sourceURL: 'https://github.com/inolasv/dev-ada-ratemygeneds',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'COVID-19 Data Dashboard',
    date: 'May 2023 - June 2023',
    description:
      'Built a web dashboard for browsing COVID-19 statistics with Express.js, Node.js, MongoDB, NumPy, and CSS/SASS. Deployed on Heroku with a MongoDB Atlas database. Wrote REST API routes for handling JSON data from public COVID-19 data APIs. Enabled country/county/state level views for the data & presented it in graphs/charts on the UI.',
    linkURL: 'https://www.youtube.com/watch?v=8eJRk9nEbwI',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Newton Pavements',
    date: 'May 2023 - June 2023',
    description:
      'Recruited by City Councilor & Representative Jake Auchincloss to develop city website for viewing pavement conditions in Newton, MA. Used by Newton residents to track city construction projects spanning 8 years (2017 - 2025). Created with Bootstrap, jQuery, JS/HTML/CSS, and the Google Maps API.',
    linkURL: 'https://www.jacobechang.com/newton-pavements/',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
  {
    name: 'Newton Employee Salaries',
    date: 'May 2023 - June 2023',
    description:
      'Created a Node.js web application for viewing salaries of Newton Public Schools employees. Public data spanning years 2007 to 2016 was pulled from the Newton City Hall website. Previously deployed on Amazon RDS for PostreSQL. Wrote SQL queries which operated on 100,000+ rows. Prevented SQL injection attacks with prepared statements.',
    linkURL: 'https://www.youtube.com/watch?v=eYor5dEHkTI',
    sourceURL: '#',
    technologies: ['a', 'b', 'c'],
  },
];

export default projects;
