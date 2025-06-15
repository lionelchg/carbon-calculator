import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AIEmissions from './pages/AIEmissions'
import GlobalEmissions from './pages/GlobalEmissions'
import Calculator from './pages/Calculator'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-emissions" element={<AIEmissions />} />
        <Route path="/global-emissions" element={<GlobalEmissions />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App