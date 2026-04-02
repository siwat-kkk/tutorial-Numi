// src/Introduce.jsx
// This file only contains the content for your Introduce page

import React from 'react'; // Don't forget to import React if you're using JSX
import './style/Introduce.css'; // Don't forget this!

function Introduce() {
  return (
    <div>
      <h2 className='introduce-heading'>
        <span className="first-letter">S</span>
        <span className="rest-of-name">iwat</span>
        <br></br>
        <span className="first-letter">P</span>
        <span className="rest-of-name">hrommak</span> 
      </h2>
      
    </div>
    
  );
}

export default Introduce;