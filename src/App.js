import React,{ useState, useEffect } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  useEffect(() => {
    document.title = "Travis' Portfolio";  
  }, []);

  const [menuSelect, setmenuSelect]= useState(0);
  const navSelect= () => {
    if (menuSelect === 0) {
      return <Main />
      }if (menuSelect === 1) {
        return <Contact />
      }if (menuSelect === 2) {
        return <Portfolio />
      }if (menuSelect === 3) {
        return <Resume />
      }
  }
  return (
    <div>
      <Nav setmenuSelect={setmenuSelect}/>
      <main>
        {navSelect()}
      </main>
    </div>
  );
}

export default App;