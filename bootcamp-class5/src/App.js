import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import counter from './CounterContext';


function App() {
  let countState = useState(0);
  return (
    <counter.Provider value={countState}>
    <div className="App">
      <Parent />
    </div>
    </counter.Provider>
   );
}

export default App;
