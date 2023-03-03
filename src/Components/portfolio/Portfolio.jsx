import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MI Store Clone',
    github: 'https://github.com/iknlaxmi/mi-store-clone/tree/master',
    demo: 'https://mistore-miclone.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Country Quiz',
    github: 'https://github.com/iknlaxmi/CountryQuiz',
    demo: 'https://country-quiz-dev-app.netlify.app',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Windbnb (Airbnb clone)',
    github: 'https://github.com/iknlaxmi/wind-bnb-app/tree/master',
    demo: 'https://wind-bnb-app.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Random Quote Generator',
    github: 'https://github.com/iknlaxmi/RandomQuoteGenerator',
    demo: 'https://random-quote-generator-demo.netlify.app',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Weather App',
    github: 'https://github.com/iknlaxmi/WeatherApp',
    demo: 'https://weather-data-dev-app.netlify.app',
  },
  //   {
  //     id: 6,
  //     image: IMG6,
  //     title: 'Crypto Currency Dashboard & Financial Visualization',
  //     github: 'https://github.com',
  //     demo: 'https://dribbble.com/shots/18615479-Task-Management-Dashboard',
  //   },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="Imag-p1" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
