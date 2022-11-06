import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';

function App() {
  return (
    <div style={{ display: 'flex' }} className="App">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
