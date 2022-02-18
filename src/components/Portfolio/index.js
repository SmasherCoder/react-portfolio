import React from 'react';

function Portfolio() {



  return (
  <section id="my-work">
    <h2>My Work</h2>
    <div className="work1">
      <a href="https://smashercoder.github.io/hotel-raven/"><img src="./assets/images/hotelraven.jpg" class="responsive" alt="My Work 1"></img></a>
    </div>
    <div class="flex-row2">
      <div className="work2">
        <a href="https://smashercoder.github.io/password-generator/"><img src="./assets/images/PasswordGen.jpg" alt="My Work 2"></img></a>
      </div>
      <div className="work3">
        <a href="https://act-bank.herokuapp.com/"><img src="./assets/images/actbank.jpg" alt="My Work 3"></img></a>
      </div>
      <div className="work4">
        <a href="https://smashercoder.github.io/weatherdashboard/"><img src="./assets/images/weatherdashboard.jpg"alt="My Work 4"></img></a>
      </div>
    </div>
  </section>
  );
}

export default Portfolio;