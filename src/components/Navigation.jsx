import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            Carbon Calculator
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/ai-emissions" 
                className={isActive('/ai-emissions') ? 'active' : ''}
              >
                AI & GPU Emissions
              </Link>
            </li>
            <li>
              <Link 
                to="/global-emissions" 
                className={isActive('/global-emissions') ? 'active' : ''}
              >
                Global Emissions
              </Link>
            </li>
            <li>
              <Link 
                to="/calculator" 
                className={isActive('/calculator') ? 'active' : ''}
              >
                Personal Calculator
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation