import React from 'react';
import Sidebar from './components/Sidebar';


function App() {
 return (
    <div className="App">
      <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='./Back.jpg' alt='logo' style={{ width: '800px', height: 'auto' }} />
        <h1 style={{ color: 'black', textAlign: 'center', paddingTop: '5%', fontSize: '2.5em' }}>Welcome to Music Player</h1>
      </div>
      {/* Other components */}
    </div>
 );
}

export default App;