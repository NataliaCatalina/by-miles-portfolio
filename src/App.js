import { Route, Routes } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

// COMPONENTS
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbar />
      <div className="app-container">
        <div className="theme-toggle">
          <i onClick={switchTheme} className="fas fa-adjust"></i>
        </div>
      <About />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
