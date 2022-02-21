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
    <div className='topmargin'>
      <a href="https://smashercoder.github.io/hotel-raven/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/hotel-raven"><p id='resheader'>Github Repo</p></a>
      <img src={hotelRaven} alt="My Work 1"></img>
      </div>
      <div className='topmargin'>
      <a href="https://notetaker0960.herokuapp.com/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/note-taker"><p id='resheader'>Github Repo</p></a>
      <img src={noteTaker} alt="My Work 2"></img>
      </div>
      <div className='topmargin'>
      <a href="https://glacial-hamlet-24067.herokuapp.com/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/Budget-Tracker"><p id='resheader'>Github Repo</p></a>
      <img src={budgetTrack}  alt="My Work 3"></img>
      </div>
    </div>
    <div className='flex-row2'>
      <div className='topmargin'>
      <a href="https://smashercoder.github.io/password-generator/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/password-generator"><p id='resheader'>Github Repo</p></a>
      <img src={passGen} alt="My Work 4"></img>
      </div>
      <div className='topmargin'>
      <a href="https://act-bank.herokuapp.com/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/bank"><p id='resheader'>Github Repo</p></a>
      <img src={actBank} alt="My Work 5"></img>
      </div>
      <div className='topmargin'>
      <a href="https://smashercoder.github.io/weatherdashboard/"><p id='resheader'>Deployed App</p></a>
      <a href="https://github.com/SmasherCoder/weatherdashboard"><p id='resheader'>Github Repo</p></a>
      <img src={weather} alt="My Work 6"></img>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;