import '../../dist/css/about-page.css'
import {useEffect, useState} from "react";

const About = () => {
    useEffect(() => {
        document.title = 'About Page';
    },[]);

    return (
      <div className='about'>
          <h1>About Page</h1>
          <div className='content'>
              <h3>What?</h3>
              <p>Lorem </p>
          </div>
      </div>
    )
};

export default About;