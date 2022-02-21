import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
  return (
    <section>
        <nav>
        <a href='https://github.com/SmasherCoder' className='varlight'><FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon></a>
        <a href='https://www.linkedin.com/in/travishelms/' className='varlight'><FontAwesomeIcon icon={faLinkedinIn} size="3x"></FontAwesomeIcon></a>
        <a href='https://www.facebook.com/tqhelms' className='varlight'><FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon></a>
        </nav>
    </section>
  );
}

export default Footer;