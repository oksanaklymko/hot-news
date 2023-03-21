import { Link } from "react-router-dom";
import '../../dist/css/about-page.css'
import {useEffect, useState} from "react";
import "../../dist/css/var.css";

const About = () => {
    useEffect(() => {
        document.title = 'About Page';
    },[]);

    return (
      <div className='about font-link'>
          <h1>About Us</h1>
          <div className='content'>
              <p>Our news site is an online resource where you can find current events from around the world. News from the world of politics, show business, culture, sports, science and other spheres of life are posted here. In addition, on the site you can find original recipes, learn about new fashion trends, see concert and movie posters.
                  On our site, you can find information from over 80,000 news sources and blogs over the past 5 years.</p>
              <Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:info@example.com'}>
                  Email Us: hotnews@example.com
              </Link>
              <a href="tel:+13200123451"> Contact: +1-320-0123-451 </a>
          </div>
      </div>
    )
};

export default About;