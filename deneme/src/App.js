import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Göster</button>
      <p>{displayText}</p>
    </div>
  );
}

export default App;
