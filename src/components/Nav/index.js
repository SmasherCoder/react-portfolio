import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav(props) {
const [navClass, setnavClass]= useState("flex-row");
const [toggledNav, settoggledNav]= useState(true);

const addClass=() => {
  if (toggledNav){
    setnavClass("flex-row show");
    settoggledNav(false);
  }else {
    setnavClass("flex-row");
    settoggledNav(true);
  }

}

  return (
<header>

  <h2>
    <a href="/">
      Travis
    </a>
  </h2>

  <nav>
    <ul className={navClass} id='navul'>
      <li>
        <a href='/'><span>About</span></a>
      </li>
      <li>
        <span onClick={() => props.setmenuSelect(2)}>Portfolio</span>
      </li>
      <li>
        <span onClick={() => props.setmenuSelect(1)}>Contact</span>
      </li>
      <li>
        <span onClick={() => props.setmenuSelect(3)}>Resume</span>
      </li>
    </ul>
  </nav>
  <button onClick={addClass} className="hamburger" id="hamburger">
    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
  </button>
    </header>
  );
}

export default Nav;