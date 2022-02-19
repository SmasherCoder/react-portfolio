import React from 'react';
import actBank from '../../assets/images/actbank.jpg';
import hotelRaven from '../../assets/images/hotelraven.jpg';
import passGen from '../../assets/images/PasswordGen.jpg';
import weather from '../../assets/images/weatherdashboard.jpg';

function Portfolio() {



  return (
  <section id="my-work">
    <h2 id='resheader'>My Work</h2>
    <div className="work1">
      <a href="https://smashercoder.github.io/hotel-raven/"><img src={hotelRaven} className="responsive" alt="My Work 1"></img></a>
    </div>
    <div className='row flex-row'>
      <div className="column">
        <a href="https://smashercoder.github.io/password-generator/"><img src={passGen} className="workImg" alt="My Work 2"></img></a>
      </div>
      <div className="column">
        <a href="https://act-bank.herokuapp.com/"><img src={actBank} className="workImg" alt="My Work 3"></img></a>
      </div>
      <div className="column">
        <a href="https://smashercoder.github.io/weatherdashboard/"><img src={weather} className="workImg" alt="My Work 4"></img></a>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;