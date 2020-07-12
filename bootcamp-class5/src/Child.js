import React from 'react';
import { useContext } from 'react'
import counter from './CounterContext'

const Child = () => {
    let  counterValue = useContext(counter);
    return(
        <div>
        <h1>Counter</h1>
        <hr></hr>
        <h3>Using ContextApi</h3>
        <p>value of counter is : {counterValue[0]}</p>
        <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>

        <button onClick={() => {counterValue[1](--counterValue[0])}}>Decrement</button>

    </div> 
    );
}

export default Child;