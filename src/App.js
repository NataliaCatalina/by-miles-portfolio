import React from 'react'
// import { Route, Routes } from 'react-router-dom'

// DATABASE 
// COMPONENTS 
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
