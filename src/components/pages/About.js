import '../../dist/css/about-page.css'
import {useEffect, useState} from "react";

const About = () => {
    useEffect(() => {
        document.title = 'About Page';
    },[]);

    return (
      <div className='about'>
          <h1>About Us</h1>
          <div className='content'>
              <p>Your source for the lifestyle news. This demo is crafted specifically to exhibit the use of the theme as a lifestyle site. Visit our main page for more demos.</p>
              <p>We're accepting new partnerships right now.</p>
              <p>Email Us: info@example.com</p>
              <p>Contact: +1-320-0123-451</p>
          </div>
      </div>
    )
};

export default About;