import React, {useState} from 'react';
import './App.css';

import Counter from './counter';

function App() {
  let [count , setCount] = useState(0);
  let [isMorning,  setMorning] = useState(false);
        

  return (
    <div className={`morning ${isMorning ? 'morning' : 'night'}`}>
      <h1>Day time = {isMorning ? 'Morning' : 'Night'} <button onClick={() => setMorning(!isMorning)}>change day</button></h1>

      <Counter counter={count} />
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>

      


    </div>
  );
}

export default App;
