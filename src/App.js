import React, { useState } from 'react'
import './App.css';
import LateN from './LateN';
import Latenight from './Latenight';


function App() {
  const [showLateN, setShowLateN] = useState(false);

  return (
    <div className="App">
      {showLateN ? <LateN Open={setShowLateN} /> : <Latenight Open={setShowLateN} />}
    </div>
  );
}



export default App;
