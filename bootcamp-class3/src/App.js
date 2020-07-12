import React from 'react';

function App(props) {
  return (
    <div className="App">
      Name={props.name}<br></br>
      Age={props.age}<br></br>
      Address={props.address}<hr></hr>
    </div>
  );
}

export default App;
