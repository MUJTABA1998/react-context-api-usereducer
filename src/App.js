import React, { useState } from 'react';
import './App.css';
import CounterContext from './CounterContext';
import Parent from './Parent'

function App() {

  let counter = useState(0); // [count, setCount]
  return (
    <CounterContext.Provider value={counter}>
      <div className="App">
        <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
