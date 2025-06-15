import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart, ComposedChart } from 'recharts'
import { Globe, Leaf, Zap, TrendingDown, TrendingUp, Server, Factory, Home, Car } from 'lucide-react'

const GlobalEmissions = () => {
  // Top-down energy flow: 650 EJ total global energy
  const globalEnergyBreakdown = [
    { name: 'Buildings', value: 30, color: '#3498db' },
    { name: 'Industry', value: 35, color: '#e74c3c' },
    { name: 'Transport', value: 25, color: '#f39c12' },
    { name: 'Other', value: 10, color: '#95a5a6' }
  ]

  // Energy source mix 2024 (from IEA 2025)
  const energySourceMix2024 = [
    { name: 'Renewables', value: 38, color: '#27ae60' },
    { name: 'Natural Gas', value: 28, color: '#95a5a6' },
    { name: 'Coal', value: 15, color: '#2c3e50' },
    { name: 'Oil', value: 11, color: '#34495e' },
    { name: 'Nuclear', value: 8, color: '#9b59b6' }
  ]

  // Electricity generation mix (Updated with 2024 data)
  const electricityMix2024 = [
    { name: 'Fossil Fuels', value: 60, color: '#e74c3c' },
    { name: 'Renewables', value: 33, color: '#27ae60' },
    { name: 'Nuclear', value: 9, color: '#9b59b6' }
  ]

  // Renewable breakdown within electricity
  const renewableElectricityBreakdown = [
    { name: 'Hydropower', value: 14, color: '#3498db' },
    { name: 'Wind', value: 8, color: '#27ae60' },
    { name: 'Solar PV', value: 7, color: '#f39c12' },
    { name: 'Bioenergy', value: 3, color: '#229954' },
    { name: 'Other', value: 1, color: '#95a5a6' }
  ]

  // Electricity consumption growth 2024
  const electricityGrowthData = [
    { year: '2020', consumption: 27500 },
    { year: '2021', consumption: 28200 },
    { year: '2022', consumption: 28800 },
    { year: '2023', consumption: 29400 },
    { year: '2024', consumption: 30480 }
  ]

  // Regional electricity consumption 2024
  const regionalElectricityData = [
    { region: 'China', consumption: 8500, growth: 7.0 },
    { region: 'United States', consumption: 4200, growth: 3.2 },
    { region: 'India', consumption: 1800, growth: 8.5 },
    { region: 'Europe', consumption: 3200, growth: 1.8 },
    { region: 'Rest of World', consumption: 12780, growth: 4.1 }
  ]

  // Electricity consumption by sector 2024
  const electricitySectorData = [
    { sector: 'Buildings', consumption: 60, growth: 5.0, color: '#3498db' },
    { sector: 'Industry', consumption: 40, growth: 4.0, color: '#e74c3c' },
    { sector: 'Transport', consumption: 8, growth: 8.0, color: '#f39c12' }
  ]

  // Data center electricity consumption
  const dataCenterData = [
    { year: '2018', consumption: 200 },
    { year: '2019', consumption: 220 },
    { year: '2020', consumption: 240 },
    { year: '2021', consumption: 260 },
    { year: '2022', consumption: 290 },
    { year: '2024', consumption: 340 }
  ]

  // Regional data center growth
  const dataCenterRegionalData = [
    { region: 'Ireland', share: 18, growth: 200 },
    { region: 'Denmark', share: 8, growth: 500 },
    { region: 'United States', share: 2, growth: 150 },
    { region: 'China', share: 2.5, growth: 180 },
    { region: 'Global Average', share: 1.3, growth: 140 }
  ]

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Global Energy & Emissions Analysis 2024</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Top-down analysis from 650 exajoules total global energy consumption to electricity and digital infrastructure
        </p>
      </div>

      {/* Top-level energy statistics */}
      <div className="grid grid-3">
        <div className="stat-card">
          <div className="stat-value">650 EJ</div>
          <div className="stat-label">Total Global Energy 2024</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)' }}>
          <div className="stat-value">30,480 TWh</div>
          <div className="stat-label">Global Electricity Consumption</div>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)' }}>
          <div className="stat-value">4.3%</div>
          <div className="stat-label">Electricity Growth 2024</div>
        </div>
      </div>

      {/* Energy flow visualization */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={24} />
          Global Energy Flow: From 650 EJ to End Uses
        </h3>
        <div className="grid grid-2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={globalEnergyBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {globalEnergyBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ padding: '1rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Energy Consumption Breakdown</h4>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Buildings:</strong> ~195 EJ (heating, cooling, lighting)
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Industry:</strong> ~228 EJ (manufacturing, steel, cement)
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Transport:</strong> ~163 EJ (cars, trucks, aviation, shipping)
            </div>
            <div>
              <strong>Other:</strong> ~65 EJ (agriculture, services)
            </div>
          </div>
        </div>
      </div>

      {/* Energy source mix */}
      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <TrendingUp size={24} />
            Energy Source Mix Growth 2024
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={energySourceMix2024}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={120}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {energySourceMix2024.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}% of growth`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={24} />
            Electricity Generation Mix 2024
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={electricityMix2024}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="value" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            <p><strong>Key Insight:</strong> Renewables + Nuclear = 42% of electricity generation</p>
          </div>
        </div>
      </div>

      {/* Electricity consumption trends */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp size={24} />
          Global Electricity Consumption Growth (TWh)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={electricityGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value} TWh`, 'Consumption']} />
            <Line type="monotone" dataKey="consumption" stroke="#3498db" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <div className="result-card" style={{ marginTop: '1rem' }}>
          <div className="result-value">+1,080 TWh</div>
          <p>Electricity consumption increase in 2024 - nearly double the past decade's annual average</p>
        </div>
      </div>

      {/* Regional electricity breakdown */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={24} />
          Regional Electricity Consumption & Growth 2024
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={regionalElectricityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="consumption" fill="#3498db" name="Consumption (TWh)" />
            <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#e74c3c" strokeWidth={3} name="Growth %" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Renewable electricity breakdown */}
      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Leaf size={24} />
            Renewable Electricity Sources (33% of total)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={renewableElectricityBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={100}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {renewableElectricityBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}% of electricity`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Factory size={24} />
            Electricity Consumption by Sector 2024
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={electricitySectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip formatter={(value, name) => 
                name === 'consumption' ? [`${value}% share`, 'Sector Share'] : [`${value}%`, 'Growth Rate']
              } />
              <Bar dataKey="consumption" fill="#3498db" name="consumption" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Buildings:</strong> 60% of growth (+600 TWh, 5% increase)</p>
            <p><strong>Industry:</strong> 40% of growth (4% increase)</p>
            <p><strong>Transport:</strong> 8% growth (EVs driving electrification)</p>
          </div>
        </div>
      </div>

      {/* Data center focus */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Server size={24} />
          Data Center Electricity Consumption: The Digital Infrastructure Layer
        </h3>
        <div className="grid grid-2">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dataCenterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} TWh`, 'Data Center Consumption']} />
              <Area type="monotone" dataKey="consumption" stroke="#9b59b6" fill="#9b59b6" />
            </AreaChart>
          </ResponsiveContainer>
          <div style={{ padding: '1rem' }}>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)', marginBottom: '1rem' }}>
              <div className="stat-value">340 TWh</div>
              <div className="stat-label">Data Center Consumption 2024</div>
            </div>
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)' }}>
              <div className="stat-value">1.1%</div>
              <div className="stat-label">Share of Global Electricity</div>
            </div>
          </div>
        </div>
      </div>

      {/* Regional data center impact */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Server size={24} />
          Regional Data Center Electricity Impact
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={dataCenterRegionalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Bar yAxisId="left" dataKey="share" fill="#9b59b6" name="Share of National Electricity %" />
            <Line yAxisId="right" type="monotone" dataKey="growth" stroke="#e74c3c" strokeWidth={3} name="Growth Since 2015 %" />
          </ComposedChart>
        </ResponsiveContainer>
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Ireland:</strong> 18% of national electricity consumption (tripled since 2015)</p>
          <p><strong>Denmark:</strong> Projected to reach 15% by 2030 (6x increase)</p>
          <p><strong>Global trend:</strong> Large data centers seeing 20-40% annual growth</p>
        </div>
      </div>

      {/* Key insights summary */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>Key Energy Transition Insights 2024</h3>
        <div className="grid grid-2">
          <div>
            <h4 style={{ color: '#27ae60', marginBottom: '0.5rem' }}>Accelerating Trends:</h4>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Electricity growing 4.3% - faster than total energy (2.2%)</li>
              <li>Renewables + Nuclear = 42% of electricity generation</li>
              <li>Emerging markets drive 80% of energy demand growth</li>
              <li>China leads with 550 TWh electricity increase (7%)</li>
              <li>Buildings sector: 60% of electricity growth (+600 TWh)</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>Challenges & Opportunities:</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Fossil fuels still 60% of electricity generation</li>
              <li>Data centers: 1.1% of electricity but rapidly growing</li>
              <li>Transport electrification: 8% growth in EV consumption</li>
              <li>Regional variations: Ireland 18% DC consumption</li>
              <li>Digital infrastructure becoming major electricity consumer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Energy transition pathway */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>The Energy Transition Pathway</h3>
        <div className="grid grid-3">
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
            <Leaf size={32} style={{ color: '#27ae60', margin: '0 auto 0.5rem' }} />
            <h4 style={{ color: '#27ae60' }}>Renewable Growth</h4>
            <p>38% of total energy growth from renewables</p>
            <div className="stat-value" style={{ fontSize: '1.2rem', color: '#27ae60' }}>33%</div>
            <p style={{ fontSize: '0.9rem' }}>of electricity generation</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
            <Zap size={32} style={{ color: '#f39c12', margin: '0 auto 0.5rem' }} />
            <h4 style={{ color: '#f39c12' }}>Electrification</h4>
            <p>4.3% electricity growth vs 2.2% total energy</p>
            <div className="stat-value" style={{ fontSize: '1.2rem', color: '#f39c12' }}>+1,080</div>
            <p style={{ fontSize: '0.9rem' }}>TWh increase in 2024</p>
          </div>
          <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f3e5f5', borderRadius: '8px' }}>
            <Server size={32} style={{ color: '#9b59b6', margin: '0 auto 0.5rem' }} />
            <h4 style={{ color: '#9b59b6' }}>Digitalization</h4>
            <p>Data centers and AI driving new demand</p>
            <div className="stat-value" style={{ fontSize: '1.2rem', color: '#9b59b6' }}>340</div>
            <p style={{ fontSize: '0.9rem' }}>TWh data center consumption</p>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>Data Sources & References</h3>
        <div style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
          <h4 style={{ color: '#2c3e50', marginBottom: '0.75rem' }}>Primary Sources:</h4>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>
              <strong>IEA Global Energy Review 2025:</strong>{' '}
              <a 
                href="https://www.iea.org/reports/global-energy-review-2025" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#3498db', textDecoration: 'none' }}
              >
                Global Trends & Electricity Analysis
              </a>
            </li>
            <li>
              <strong>IEA Data Centers & Networks:</strong>{' '}
              <a 
                href="https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#3498db', textDecoration: 'none' }}
              >
                Data Center Energy Consumption
              </a>
            </li>
            <li>
              <strong>Ember Global Electricity Review 2024:</strong>{' '}
              <a 
                href="https://ember-energy.org/latest-insights/global-electricity-review-2024/electricity-transition-in-2023/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#3498db', textDecoration: 'none' }}
              >
                Renewable Energy Statistics
              </a>
            </li>
          </ul>
          
          <h4 style={{ color: '#2c3e50', marginBottom: '0.75rem' }}>Key Figures Sources:</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>650 EJ Global Energy:</strong> IEA Global Energy Review 2025 - Global Trends
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>30,480 TWh Electricity:</strong> IEA Global Energy Review 2025 - Electricity Chapter
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>340 TWh Data Centers:</strong> IEA Data Centers & Networks Analysis 2024
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>4.3% Electricity Growth:</strong> IEA Global Energy Review 2025 - Key Findings
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>Regional Data:</strong> IEA country-specific electricity consumption reports
            </div>
            <div style={{ padding: '0.75rem', backgroundColor: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem' }}>
              <strong>Renewable Mix:</strong> Combined IEA & Ember Energy 2024 data
            </div>
          </div>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#e8f4fd', borderRadius: '6px', borderLeft: '4px solid #3498db' }}>
            <p style={{ margin: 0, fontStyle: 'italic', color: '#2c3e50' }}>
              <strong>Note:</strong> All data represents the most recent available figures from 2024 reports. 
              Regional data center consumption figures for Ireland (18%) and Denmark (8%) sourced from 
              IEA regional analysis and national energy statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalEmissions