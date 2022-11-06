import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { Metaplex } from '@metaplex-foundation/js-next';
import { clusterApiUrl, Connection } from '@solana/web3.js';
function App() {
  const connection = new Connection(clusterApiUrl('devnet'));
  const mx = Metaplex.make(connection);
  console.log(mx);
  return (
    <div className="App" style={{ display: 'flex' }}>
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
