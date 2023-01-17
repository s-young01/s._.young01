import './App.css';
// import React, {useState} from 'react';
// import Timer from './components/Timer';
import EffectSample from './components/EffectSample';

function App() {
  //const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="App">
      <EffectSample />
      {/* {showTimer && <Timer/>}
      <button onClick={() => setShowTimer(!showTimer)}>타이머 시작 / 종료</button> */}
    </div>
  );
}

export default App;
