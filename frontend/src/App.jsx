import React from 'react';
import './index.css';

function App() {
  const handleReveal = () => {
    window.location.href = 'https://supportbydv.com';
  };

  return (
    <div className="faceless-container">
      <div className="content">
        <h1 className="title">The site has shifted face.</h1>
        <p className="subtitle">No One is here.</p>
        <button className="reveal-btn" onClick={handleReveal}>
          Reveal the New Face
        </button>
      </div>
    </div>
  );
}

export default App;
