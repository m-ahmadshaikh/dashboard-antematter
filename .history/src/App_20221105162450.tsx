import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Content />

      <SideBar />
    </div>
  );
}

export default App;
