import { useState } from 'react';
import './App.css';

function App() {
  const [pstatus, setPatus] = useState(false);

  return (
    <div className="app-container">
      <div className="password-wrapper">
        <input 
          type={pstatus ? 'text' : 'password'} 
          className="password-input" 
          placeholder="Enter your password" 
        />
        <button 
          onClick={() => setPatus(!pstatus)} 
          className="toggle-button"
        >
          {pstatus ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}

export default App;
