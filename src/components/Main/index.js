import React from 'react';
import travis from "../../assets/images/travis3.jpg";

function Main() {
  return (
    <section>
    <h2 id='resheader'>About Me</h2>
    <div className="flex-row3">
      <div className="card about-me-img">
        <img src={travis} alt="Travis"></img>
      </div>
      <div className="card">
        <h3>Travis Helms</h3>
        <h4>Web Developer</h4>
        <p>Hi, my name is Travis Helms and I am a web developer with a knack for attention to details. I am someone that is a independant thinker and can thrive in a remote
          environment.</p>
      </div>
    </div>
    </section>
  );
}

export default Main;