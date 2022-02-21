import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className='flex-row3'>
      <h2 data-testid="h1tag">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <div>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
        </div>
        <div className='lbl'>
            <label htmlFor="email">Email address:</label>
          <div>  
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
        </div>
        <div className='lbl'>
          <label htmlFor="message">Message:</label>
          <div>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
        </div>
        {errorMessage && (
          <div className='lbl'>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
