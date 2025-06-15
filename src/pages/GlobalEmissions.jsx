import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts'
import { Globe, Leaf, Zap, TrendingDown } from 'lucide-react'

const GlobalEmissions = () => {
  const energyMixData = [
    { name: 'Coal', value: 35.4, color: '#2c3e50' },
    { name: 'Gas', value: 22.5, color: '#95a5a6' },
    { name: 'Hydropower', value: 14.3, color: '#3498db' },
    { name: 'Wind', value: 7.8, color: '#27ae60' },
    { name: 'Solar', value: 5.5, color: '#f39c12' },
    { name: 'Nuclear', value: 9.4, color: '#9b59b6' },
    { name: 'Other', value: 5.1, color: '#e74c3c' }
  ]

  const renewableGrowthData = [
    { year: '2019', solar: 2.7, wind: 5.9 },
    { year: '2020', solar: 3.1, wind: 6.6 },
    { year: '2021', solar: 3.7, wind: 7.3 },
    { year: '2022', solar: 4.5, wind: 7.6 },
    { year: '2023', solar: 5.5, wind: 7.8 }
  ]

  const emissionsData = [
    { region: 'China', emissions: 4200, color: '#e74c3c' },
    { region: 'United States', emissions: 1800, color: '#3498db' },
    { region: 'India', emissions: 950, color: '#f39c12' },
    { region: 'Europe', emissions: 850, color: '#27ae60' },
    { region: 'Rest of World', emissions: 6350, color: '#95a5a6' }
  ]

  const carbonIntensityData = [
    { year: '2019', intensity: 494 },
    { year: '2020', intensity: 486 },
    { year: '2021', intensity: 491 },
    { year: '2022', intensity: 486 },
    { year: '2023', intensity: 480 }
  ]

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Global Carbon Emissions & Energy</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Comprehensive overview of worldwide electricity generation, renewable energy trends, and carbon emissions
        </p>
      </div>

      <div className="grid grid-3">
        <div className="stat-card">
          <div className="stat-value">29,471 TWh</div>
          <div className="stat-label">Global Electricity Demand 2023</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)' }}>
          <div className="stat-value">30%</div>
          <div className="stat-label">Renewable Energy Share</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' }}>
          <div className="stat-value">480</div>
          <div className="stat-label">gCO₂/kWh Carbon Intensity</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={24} />
            Global Energy Mix 2023
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={energyMixData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={140}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {energyMixData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Leaf size={24} />
            Renewable Energy Growth
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={renewableGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Area type="monotone" dataKey="solar" stackId="1" stroke="#f39c12" fill="#f39c12" />
              <Area type="monotone" dataKey="wind" stackId="1" stroke="#27ae60" fill="#27ae60" />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#f39c12', borderRadius: '2px' }}></div>
              <span>Solar: +23% growth in 2023</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: '#27ae60', borderRadius: '2px' }}></div>
              <span>Wind: +9.8% growth in 2023</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={24} />
          Global CO₂ Emissions by Region (Million Tonnes)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={emissionsData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="region" type="category" />
            <Tooltip formatter={(value) => [`${value} Mt CO₂`, 'Emissions']} />
            <Bar dataKey="emissions" fill="#e74c3c" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingDown size={24} />
            Carbon Intensity Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={carbonIntensityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} gCO₂/kWh`, 'Carbon Intensity']} />
              <Line type="monotone" dataKey="intensity" stroke="#27ae60" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="result-card" style={{ marginTop: '1rem' }}>
            <div className="result-value">-1.2%</div>
            <p>Record low carbon intensity reduction in 2023</p>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Key Climate Insights</h3>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>Positive Trends:</h4>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Wind and solar met 82% of global electricity demand growth</li>
              <li>Clean electricity (renewables + nuclear): 39.4%</li>
              <li>Record low carbon intensity at 480 gCO₂/kWh</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>Challenges:</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Total power sector emissions: 14,153 Mt CO₂ (record high)</li>
              <li>Coal generation still dominates at 35.4%</li>
              <li>Electricity demand grew 2.2% (+649 TWh)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>Regional Energy Transition</h3>
        <div className="grid grid-3">
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50' }}>United States</h4>
            <p>Leading in renewable capacity additions</p>
            <div className="stat-value" style={{ fontSize: '1.5rem', color: '#3498db' }}>540 kWh</div>
            <p style={{ fontSize: '0.9rem' }}>Per capita datacenter consumption</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50' }}>China</h4>
            <p>Largest absolute emissions but rapid clean energy growth</p>
            <div className="stat-value" style={{ fontSize: '1.5rem', color: '#e74c3c' }}>4,200 Mt</div>
            <p style={{ fontSize: '0.9rem' }}>Annual CO₂ emissions</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
            <h4 style={{ color: '#2c3e50' }}>Europe</h4>
            <p>Advanced renewable integration and efficiency</p>
            <div className="stat-value" style={{ fontSize: '1.5rem', color: '#27ae60' }}>42%</div>
            <p style={{ fontSize: '0.9rem' }}>Renewable electricity share</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalEmissions