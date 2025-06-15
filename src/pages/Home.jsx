import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Globe, Calculator } from 'lucide-react'

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
          Carbon Emissions Dashboard
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem', color: '#666' }}>
          Understand and track carbon emissions from AI, global energy systems, and personal activities
        </p>
      </div>

      <div className="grid grid-3">
        <Link to="/ai-emissions" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s', ':hover': { transform: 'translateY(-5px)' } }}>
            <Cpu size={48} style={{ color: '#3498db', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>AI & GPU Emissions</h3>
            <p style={{ color: '#666' }}>
              Explore carbon footprint of artificial intelligence, GPU usage, and datacenter energy consumption
            </p>
          </div>
        </Link>

        <Link to="/global-emissions" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s' }}>
            <Globe size={48} style={{ color: '#27ae60', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Global Emissions</h3>
            <p style={{ color: '#666' }}>
              Visualize worldwide carbon emissions, energy generation, and renewable energy trends
            </p>
          </div>
        </Link>

        <Link to="/calculator" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s' }}>
            <Calculator size={48} style={{ color: '#e74c3c', margin: '0 auto 1rem' }} />
            <h3 style={{ marginBottom: '1rem' }}>Personal Calculator</h3>
            <p style={{ color: '#666' }}>
              Calculate your personal carbon footprint from travel, diet, and daily activities
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home