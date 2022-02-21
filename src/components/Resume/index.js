import React from 'react';
import resume from '../../assets/images/Profile.pdf';

function Resume() {

  return (
    <section>
        <h1 id='resheader'>
            Resume
        </h1>
        <a href={resume} id='tabheader'><h3 className='varlight underline'>Download my resume</h3></a>
    <div className='row'>
    <h5 id='tabheader'>
            Technologies I have worked with:
    </h5>
    <div className="column" >
        <ul>
            <li>Git</li>
            <li>HTML</li>
            <li>NodeJS</li>
            <li>Bootstrap</li>
            <li>Advanced CSS</li>
            <li>JavaScript</li>
            <li>Web APIs</li>
            <li>Third-Party APIs</li>
        </ul>
    </div>
    <div className="column" >
        <ul>
            <li>Squelize</li>
            <li>Bcrypt</li>
            <li>Heroku</li>
            <li>GraphQL</li>
            <li>Handlebars</li>
            <li>Model-View-Controller</li>
            <li>Object-Relational Mapping</li>
            <li>Progressive Web Applications</li>
        </ul>
    </div>
    <div className="column" >
        <ul>    
            <li>SQL</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Mern Stack</li>
            <li>ExpressJS</li>
            <li>IndexedDB</li>
            <li>Working with State</li>
        </ul>
    </div>
    </div>
    </section>
  );
}

export default Resume;