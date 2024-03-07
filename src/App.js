import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleSidebar}>Open Sidebar</button>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      {/* Other components */}
    </div>
  );
}

export default App;