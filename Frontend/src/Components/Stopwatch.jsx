import React, { useState, useEffect } from 'react';
import './Stopwatch.css';


const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(3600); // 60 minutes = 3600 seconds

  useEffect(() => {
    let intervalId;
    if (isRunning && elapsedTime > 0) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setIsRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, elapsedTime]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setElapsedTime(3600);
  };

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  };

  return (
    <div>
      <h1  className={isRunning ?'stopwatch': 'notstopwatch'}> {formatTime(elapsedTime)}</h1>
      {/* <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
};

export default Stopwatch;
