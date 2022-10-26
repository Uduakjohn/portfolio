import React from 'react';
import "./about.css"
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

function About() {
  return (
    <div className='about'>
      <h1 className='head'><LinearScaleIcon className='line'/> About Me</h1>

      <div className='body'>
      <div className='left'>
      <p>Hello! My name is Uduak and I enjoy creating things that live on the internet.</p>
       <p>My interest in web development started back in 2021 when i transitioned from fashion to tech </p>
      <p>I immediatly joined 100days of coding by Angela yu,turns out that i really do love tech</p>
      <p>Fast-forward to today,I’ve had the privilege of building a couple of websites and ecommerce apps, </p>
      <p> I'am a well organized person with attention to details,am passionate about digital products that enhances everyday living.</p>
      
      <p>I am interested in the entire frontend and backend spectrum and working on</p>
        <p>ambitious projects with positive people</p>
      <p>My main focus these days is building accessible, inclusive products and digital experiences.</p>

       <span>
      <div className='sp'>
        <p>Here are a few technoligies i enjoy working with:</p>
        <h2 className='s'><StarBorderPurple500Icon/> Frontend</h2>
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>Javascript</h3>
        <h3>React</h3>
        <h3>Node.js</h3>
        </div>
      
    <div >
        <h2 className='s'><StarBorderPurple500Icon/> Backend</h2>
        <h3>Node.js</h3>
        <h3>Express</h3>
    </div>
    <div>
        <h2><StarBorderPurple500Icon/> Databases</h2>
        <h3>MongoDB</h3>
        <h3>Firebase</h3>
    </div>
</span> 
      </div>
      <div className='right'>
        <img className='pim' src='/images/mypic.JPG' alt=""/>
      </div>
    </div>
    </div>
  )
}

export default About
