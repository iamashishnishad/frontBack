import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5001/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const result = await response.json();
      setNames(result.data);
    } catch (error) {
      console.error("Error submitting name:", error);
    }
  };

  const fetchNames = async () => {
    try {
      const response = await fetch('http://localhost:5001/names');
      const result = await response.json();
      setNames(result.data);
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Name Collector</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={fetchNames}>Refresh Names</button>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
