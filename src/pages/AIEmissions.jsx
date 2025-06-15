import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { Server, Zap, TrendingUp } from 'lucide-react'

const AIEmissions = () => {
  const datacenterGrowthData = [
    { year: '2023', power: 49 },
    { year: '2024', power: 62 },
    { year: '2025', power: 78 },
    { year: '2026', power: 96 }
  ]

  const energyBreakdownData = [
    { name: 'Servers', value: 60, color: '#3498db' },
    { name: 'Cooling', value: 20, color: '#e74c3c' },
    { name: 'Networking', value: 5, color: '#f39c12' },
    { name: 'Other', value: 15, color: '#95a5a6' }
  ]

  const globalConsumptionData = [
    { year: '2024', consumption: 415 },
    { year: '2026', consumption: 620 },
    { year: '2028', consumption: 780 },
    { year: '2030', consumption: 945 }
  ]

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>AI & GPU Carbon Emissions</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Understanding the environmental impact of artificial intelligence and datacenter operations
        </p>
      </div>

      <div className="grid grid-3">
        <div className="stat-card">
          <div className="stat-value">415 TWh</div>
          <div className="stat-label">Global Datacenter Consumption 2024</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' }}>
          <div className="stat-value">1.5%</div>
          <div className="stat-label">Of Global Electricity</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f39c12 0%, #d35400 100%)' }}>
          <div className="stat-value">96 GW</div>
          <div className="stat-label">Projected Power by 2026</div>
        </div>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={24} />
            Datacenter Power Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datacenterGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} GW`, 'Power Consumption']} />
              <Bar dataKey="power" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Server size={24} />
            Datacenter Energy Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energyBreakdownData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
              >
                {energyBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem' }}>
            {energyBreakdownData.map((item) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: item.color, borderRadius: '2px' }}></div>
                <span>{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={24} />
          Global AI Energy Consumption Projection
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={globalConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} TWh`, 'Energy Consumption']} />
            <Line type="monotone" dataKey="consumption" stroke="#e74c3c" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>GPU Energy Specifications</h3>
          <div style={{ marginBottom: '1rem' }}>
            <strong>NVIDIA H100 DGX Server:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Total IT Power: 10.2 kW</li>
              <li>Power per GPU: ~1,275W</li>
              <li>System Power (with networking): ~1,389W per GPU</li>
            </ul>
          </div>
          <div>
            <strong>Efficiency Metrics:</strong>
            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
              <li>Target PUE for AI datacenters: &lt;1.3</li>
              <li>Typical enterprise PUE: 1.5-1.6</li>
              <li>Hyperscale datacenter PUE: &lt;1.4</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Environmental Impact</h3>
          <div className="result-card">
            <div className="result-value">4.5%</div>
            <p>Projected share of global energy generation by AI datacenters by 2030</p>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Growth Rate:</strong> 25% CAGR for datacenter power capacity</p>
            <p><strong>Regional Impact:</strong> US and China account for 80% of consumption growth</p>
            <p><strong>Per Capita (US):</strong> From 540 kWh in 2024 to 1,200+ kWh by 2030</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIEmissions