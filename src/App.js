import React from 'react'
import { Route, Routes } from 'react-router-dom'

// DATABASE 
// COMPONENTS 
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello, How are you?</h1>
      <Footer />
    </div>
  );
}

export default App;
