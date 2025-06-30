import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = ['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+','C'];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React Calculator</h2>
      <input value={input} readOnly style={{ width: '200px', height: '40px', fontSize: '20px' }} />
      <br /><br />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '10px', justifyContent: 'center' }}>
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
