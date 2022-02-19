import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import actBank from '../../assets/images/actbank.jpg';
import hotelRaven from '../../assets/images/hotelraven.jpg';
import passGen from '../../assets/images/PasswordGen.jpg';
import weather from '../../assets/images/weatherdashboard.jpg';
import budgetTrack from '../../assets/images/budgettracker.jpg';
import noteTaker from '../../assets/images/notetaker.jpg';

function Portfolio() {



  return (
  <section id="my-work">
    <h2 id='resheader'>My Work</h2>
    <div className='flex-row2'>
      <div>
      <a href="https://smashercoder.github.io/hotel-raven/"><img src={hotelRaven} alt="My Work 1"></img></a>
      </div>
      <div>
        <a href="https://notetaker0960.herokuapp.com/"><img src={noteTaker} alt="My Work 2"></img></a>
      </div>
      <div>
        <a href="https://glacial-hamlet-24067.herokuapp.com/"><img src={budgetTrack}  alt="My Work 3"></img></a>
      </div>
    </div>
    <div className='flex-row2'>
      <div>
        <a href="https://smashercoder.github.io/password-generator/"><img src={passGen} alt="My Work 4"></img></a>
      </div>
      <div>
        <a href="https://act-bank.herokuapp.com/"><img src={actBank} alt="My Work 5"></img></a>
      </div>
      <div>
        <a href="https://smashercoder.github.io/weatherdashboard/"><img src={weather} alt="My Work 6"></img></a>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;