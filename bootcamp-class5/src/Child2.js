import React,{ useReducer } from 'react'
import counterReducer from './CounterReducer'
const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer, 0);

    return(
        <div>
            <h3> Using Reducers</h3>
    <p>value of counter is: {state}</p>
    <button onClick={() =>dispatch('INCREMENT')}>Increment</button>
    <button onClick={() =>dispatch('Decrement')}>Decrement</button>

        </div>

    )
}

export default Child2;