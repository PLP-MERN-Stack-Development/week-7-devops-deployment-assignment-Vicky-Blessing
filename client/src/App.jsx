import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    fetch(`${baseUrl}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('Error'));
  }, []);

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>MERN Deployment Assignment</h1>
      <p>Backend health: {status}</p>
    </main>
  );
}

export default App; 