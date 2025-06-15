# Carbon Calculator

A comprehensive carbon emissions application that allows you to synthesize all figures related to carbon emissions from artificial intelligence, global energy systems, and personal activities.

## Features

### 🖥️ AI & GPU Emissions Page
Interactive charts and visualizations showing:
- Global datacenter power growth (49 GW to 96 GW by 2026)
- Energy breakdown (servers 60%, cooling 20%, networking 5%, other 15%)
- AI energy consumption projections (415 TWh to 945 TWh by 2030)
- GPU specifications and efficiency metrics (NVIDIA H100 DGX servers)
- Environmental impact projections (4.5% of global energy by 2030)

### 🌍 Global Emissions Page
Comprehensive infographics with real-world data including:
- Global energy mix visualization (30% renewable, 35.4% coal, 22.5% gas)
- Renewable growth trends (solar +23%, wind +9.8% in 2023)
- Regional CO₂ emissions breakdown by country
- Carbon intensity improvements (record low at 480 gCO₂/kWh)
- Key climate insights and transition statistics

### 🧮 Personal Calculator
Interactive carbon footprint calculator featuring:
- **Transportation tracking**: Calculate emissions from car trips (200km), plane flights (1000km), and train travel
- **Diet impact calculation**: Track weekly consumption of beef, pork, chicken, fish, or vegetarian meals
- **Real-time totals**: See your carbon footprint update as you add activities
- **Environmental context**: Understand your impact with tree planting equivalents and coal burning comparisons
- **Reference data**: Built-in carbon factors for accurate calculations

## Technology Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **Visualizations**: Recharts for interactive charts and graphs
- **Icons**: Lucide React
- **Styling**: CSS with responsive grid layouts

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carbon-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

## Data Sources

This application is built using the latest research and data from:

- **[Ember Energy Global Electricity Review 2024](https://ember-energy.org/latest-insights/global-electricity-review-2024/electricity-transition-in-2023/)** - Global electricity generation and renewable energy statistics
- **[IEA Energy and AI Report](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)** - AI energy consumption and datacenter projections
- **[SemiAnalysis AI Datacenter Analysis](https://semianalysis.com/2024/03/13/ai-datacenter-energy-dilemma-race/)** - Technical details about AI datacenter energy consumption and GPU specifications

## Key Statistics Highlighted

### Global Energy (2023)
- Total electricity demand: 29,471 TWh (+2.2% growth)
- Renewable electricity share: 30%
- Clean electricity (renewables + nuclear): 39.4%
- CO₂ intensity: 480 gCO₂/kWh (record low)

### AI & Datacenters
- Global datacenter consumption: 415 TWh (1.5% of global electricity)
- Projected growth to 945 TWh by 2030
- AI workloads: 40 GW by 2026
- NVIDIA H100 servers: 10.2 kW IT power per server

### Carbon Footprint References
- Car travel: 0.21 kg CO₂/km
- Plane travel: 0.255 kg CO₂/km
- Beef consumption: 27 kg CO₂/kg
- Vegetarian meals: 2.3 kg CO₂/meal

## Project Structure

```
src/
├── components/
│   └── Navigation.jsx       # Main navigation component
├── pages/
│   ├── Home.jsx            # Landing page with feature overview
│   ├── AIEmissions.jsx     # AI & GPU emissions visualization
│   ├── GlobalEmissions.jsx # Global energy and emissions data
│   └── Calculator.jsx      # Personal carbon footprint calculator
├── App.jsx                 # Main app component with routing
├── main.jsx               # React app entry point
└── index.css              # Global styles and responsive design
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Data sources: Ember Energy, IEA, and SemiAnalysis
- Built with modern web technologies for optimal performance
- Designed for environmental awareness and education