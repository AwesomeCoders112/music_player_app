import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
    setIsOpen(!isOpen);
 };

 return (
    <div className="App">
      <button className="mybtn" onClick={toggleSidebar}>Open Sidebar</button>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='C:\Users\Ankith Hebbar\clone\src\unnamed.png' alt='logo' style={{ width: '800px', height: 'auto' }} />
        <h1 style={{ color: 'black', textAlign: 'center', paddingTop: '5%', fontSize: '2.5em' }}>Welcome to Music Player</h1>
      </div>
      {/* Other components */}
    </div>
 );
}

export default App;
