import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { Metaplex } from '@metaplex-foundation/js';
import { clusterApiUrl, Connection } from '@solana/web3.js';
function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
