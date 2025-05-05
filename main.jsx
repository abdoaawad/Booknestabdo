import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>Welcome to Mindtales</h1>
      <p>Books, stories, and personal experiences in Arabic and English.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);