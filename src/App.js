import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Nav />
      <main>
        <Main />
        <Contact />
      </main>
    </div>
  );
}

export default App;