import React, { useState, useEffect } from 'react';
import './App.css';
import LateN from './LateN';
import Latenight from './Latenight';
import Notify from './Notify';

function App() {
  const [showLateN, setShowLateN] = useState(false);
  const [showNotify, setShowNotify] = useState(false); 

  useEffect(() => {
    let timer;
    if (showNotify) {
      timer = setTimeout(() => {
        setShowNotify(false);
        window.location.href = '/latenight'; // Redirect to Latenight component after 3 seconds
      }, 3000);
    }return () => clearTimeout(timer);
  }, [showNotify]);

  return (
    <div className="App">
      {/* Conditional rendering based on showLateN and showNotify states */}
      {showLateN ? (showNotify ? <Notify /> : <LateN setShowLateN={setShowLateN} setShowNotify={setShowNotify} />)
      : <Latenight setShowLateN={setShowLateN} />}
    </div>
  );
}

export default App;
