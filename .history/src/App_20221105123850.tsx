import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka'],
      },
    });
  }, []);

  return <div className="App">app</div>;
}

export default App;
