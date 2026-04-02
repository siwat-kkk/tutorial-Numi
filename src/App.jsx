// src/App.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './style/App.css'; // Your existing App-specific styles
import Spotify_player from './Spotify_player'; // <-- Import the new component

// 1. Corrected Import: Change 'Link' to 'NavLink' here
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// 2. Import your new About component
import About from './About.jsx'; // Make sure the path is correct
import Introduce from './Introduce.jsx';
import Numi from './Numi.jsx'
import Album from './Album.jsx';

// --- START: Your original App.jsx content, now wrapped in a Home component ---
// This component will be rendered when the path is "/"
function Home() {
  const [count, setCount] = useState(0); // Keep state if it's specific to the Home page

  return (
    <>
       {/*<div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">  Added rel="noopener noreferrer" for security on target="_blank" links 
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
         <div>
      <h2 className='introduce-heading'>
        <span className="first-letter">S</span>
        <span className="rest-of-name">iwat</span>
        <br></br>
        <span className="first-letter">P</span>
        <span className="rest-of-name">hrommak</span> 
      </h2>
    </div>
    </>
  );
}
// --- END: Home component ---


// 3. Main App component now handles routing
function App() {
  return (
    // Wrap your entire application in the Router
    <Router>
      {/* Navigation bar to switch between pages */}
      <nav className="main-nav"> {/* Add a class name for easier targeting */}
        <ul>
          {/* <li> */}
            {/* CORRECTED: Add the className prop here */}
            {/* <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li> */}
          <li>
            {/* CORRECTED: Add the className prop here */}
            <NavLink
              to="/Introduce"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Introduce
            </NavLink>
          </li>
          <li>
            {/* CORRECTED: Add the className prop here */}
            <NavLink
              to="/Numi"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Akuma Nihmune
            </NavLink>
          </li>
          <li>
            {/* CORRECTED: Add the className prop here */}
            <NavLink
              to="/Album"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Album
            </NavLink>
          </li>
          <li>
            {/* CORRECTED: Add the className prop here */}
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              About Me
            </NavLink>
          </li>
          {/* Add more NavLink components for future pages */}
          {/* Example:
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Contact
            </NavLink>
          </li>
          */}
        </ul>
      </nav>

      {/* Use the component here  this is for spotify*/}
      {/* <Spotify_player/>   */}

      {/* Routes define which component to render for each URL */}

      <main className="page-content-wrapper"> {/* <--- ADD THIS WRAPPER */}
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the new Introduce page */}
        <Route path="/introduce" element={<Introduce />} /> {/* <-- ADD THIS ROUTE */}

        {/* Route for the About Us page */}
        <Route path="/Numi" element={<Numi />} />

        {/* Route for the About Us page */}
        <Route path="/Album" element={<Album />} />

        {/* Route for the About Us page */}
        <Route path="/about" element={<About />} />



        {/* Add more <Route> components for other pages */}
        {/* Example: <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </main>
    </Router>
  );
}

export default App;