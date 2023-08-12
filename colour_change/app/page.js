"use client"
import React, { useState } from 'react';
import Button from './Components/Button';

function App() {
  const [boxColor, setBoxColor] = useState('white');
  const [colorCounts, setColorCounts] = useState({
    grey: 0,
    teal: 0,
    red: 0,
    blue: 0,
  });

  const handleCount = (color) => {
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
    setBoxColor(color);
  };

  return (
    <center>
      <div className='box' style={{ backgroundColor: boxColor }}></div>
      <Button count={(value) => handleCount(value)} />
      <p className='pG'>Grey: {colorCounts.grey}</p>
      <p className='pT'>Teal: {colorCounts.teal}</p>
      <p className='pR'>Red: {colorCounts.red}</p>
      <p className='pB'>Blue: {colorCounts.blue}</p>
    </center>
  );
}

export default App;
