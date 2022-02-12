import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Nav() {

  return (
<header>
<FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
  <h2>
    <a href="/">
      Travis Helms
    </a>
  </h2>
  <nav>
    <button class="hamburger" id="hamburger">

    </button>

    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Portfolio</span>
      </li>
      <li>
        <span>Contact</span>
      </li>
      <li>
        <span>Resume</span>
      </li>
    </ul>
  </nav>
    </header>
  );
}

export default Nav;