import React from 'react';
import Child from './Child'
import Child2 from './Child2'

const Parent = () => {
    return(
        <div>
        <Child />
        <hr></hr>
        <Child2 />
        <hr></hr>
        </div>
    )
}

export default Parent;