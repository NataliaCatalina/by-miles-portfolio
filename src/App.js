import React from 'react'
import { Route, Routes } from 'react-router-dom'

// DATABASE 
// COMPONENTS 
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <Routes >
          <Route path='/' element={<Portfolio />} />  
          <Route path='/about' element={<About />} />  
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
