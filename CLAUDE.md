# Carbon Calculator - Technical Documentation

## Project Overview

A comprehensive React-based web application for analyzing carbon emissions across three key domains:
- **AI & GPU Emissions**: Datacenter energy consumption and AI infrastructure impact
- **Global Energy Analysis**: Top-down energy flow from 650 EJ global consumption to electricity
- **Personal Carbon Calculator**: Individual footprint tracking for travel and diet

## Repository Structure

```
carbon-calculator/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   └── Navigation.jsx      # Main navigation component
│   ├── pages/
│   │   ├── Home.jsx           # Landing page with feature overview
│   │   ├── AIEmissions.jsx    # AI/GPU emissions analysis
│   │   ├── GlobalEmissions.jsx # Global energy & emissions data
│   │   └── Calculator.jsx     # Personal carbon footprint tool
│   ├── App.jsx                # Main app component with routing
│   ├── main.jsx              # React app entry point
│   └── index.css             # Global styles and responsive design
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite build configuration
├── README.md                # Project documentation
└── CLAUDE.md               # Technical documentation (this file)
```

## Technology Stack & Rationale

### Core Technologies
- **React 18**: Modern component-based architecture with hooks
- **Vite**: Fast development server and build tool (chosen over Create React App for speed)
- **React Router DOM**: Client-side routing for single-page application
- **Recharts**: Data visualization library (chosen for React integration and chart variety)
- **Lucide React**: Modern icon library (lightweight, tree-shakable)

### Why These Choices?

1. **React + Vite**: Provides fast development experience with hot module replacement
2. **Recharts**: Offers comprehensive chart types (PieChart, BarChart, LineChart, ComposedChart, AreaChart) needed for diverse data visualization
3. **CSS-only styling**: Avoids framework dependencies, keeps bundle size small, ensures full design control
4. **Lucide icons**: Modern, consistent iconography that's performant

## Architectural Decisions

### Component Structure
- **Pages as top-level components**: Each major feature is a separate page component
- **Navigation component**: Centralized routing logic with active state management
- **Data co-location**: Chart data defined within components for simplicity (could be extracted to services later)
- **Responsive design**: CSS Grid and Flexbox for mobile-first responsive layouts

### Data Visualization Strategy
- **Multiple chart types**: Pie charts for composition, bar charts for comparisons, line charts for trends
- **Dual-axis charts**: ComposedChart for showing related metrics (consumption vs growth)
- **Color consistency**: Semantic color scheme across all visualizations
- **Interactive tooltips**: Enhanced user experience with detailed hover information

### State Management
- **Local component state**: React hooks (useState) for form inputs and UI state
- **No external state management**: Application complexity doesn't justify Redux/Zustand
- **Computed values**: Real-time calculations for carbon footprint totals

## Key Features Implementation

### 1. AI Emissions Page (`AIEmissions.jsx`)
- **Data Sources**: IEA Energy and AI Report, SemiAnalysis datacenter analysis
- **Visualizations**: 
  - Datacenter power growth projection (49 GW → 96 GW)
  - Energy breakdown pie chart (servers 60%, cooling 20%)
  - Global AI energy consumption timeline
- **Key Metrics**: GPU specifications, PUE efficiency, regional projections

### 2. Global Emissions Page (`GlobalEmissions.jsx`)
- **Top-down approach**: Starts with 650 EJ global energy, flows to electricity and datacenters
- **Data Sources**: IEA Global Energy Review 2025, Ember Energy 2024
- **Advanced Charts**: ComposedChart for dual-axis regional data
- **Comprehensive coverage**: 9 different visualizations showing energy transition

### 3. Personal Calculator (`Calculator.jsx`)
- **Interactive forms**: Dynamic trip and meal addition with real-time calculations
- **Carbon factors**: Research-based emission coefficients
- **User experience**: Add/remove functionality, visual feedback, contextual information
- **Categories**: Transportation (car/plane/train) and diet (meat types/vegetarian)

### 4. Navigation (`Navigation.jsx`)
- **Active state management**: Visual indication of current page
- **Responsive design**: Works across desktop and mobile
- **Clean routing**: React Router integration with proper Link components

## Data Sources & Credibility

### Primary Sources
- **IEA Global Energy Review 2025**: Authoritative global energy statistics
- **IEA Data Centers & Networks**: Specialized datacenter energy analysis
- **Ember Global Electricity Review 2024**: Renewable energy transition data
- **SemiAnalysis**: Technical AI datacenter analysis

### Source Attribution
- **Clickable references**: Direct links to original data sources
- **Figure-specific attribution**: Each key statistic mapped to its source
- **Transparency notes**: Data currency and methodology explanations

## Styling & Design System

### CSS Architecture
- **Global styles**: Consistent typography, colors, spacing
- **Component-specific styling**: Inline styles for component variants
- **Responsive grid system**: `grid-2`, `grid-3` classes for flexible layouts
- **Card-based design**: Consistent container styling across components

### Color Palette
- **Semantic colors**: Green for renewables, red for emissions, blue for data
- **Accessibility**: Sufficient contrast ratios, colorblind-friendly choices
- **Gradient usage**: Subtle gradients for visual hierarchy in stat cards

### Responsive Design
- **Mobile-first**: CSS designed for mobile, enhanced for desktop
- **Flexible grids**: Auto-fit columns that adapt to screen size
- **Touch-friendly**: Adequate button sizes and spacing for mobile interaction

## Performance Considerations

### Bundle Optimization
- **Tree shaking**: Only import required Recharts components
- **Icon optimization**: Lucide React imports only used icons
- **No unnecessary dependencies**: Minimal external libraries

### Development Experience
- **Fast refresh**: Vite provides instant feedback during development
- **TypeScript ready**: Architecture supports easy TypeScript migration
- **Code organization**: Clear separation of concerns, reusable patterns

## Data Accuracy & Research

### Carbon Factors
- **Transportation**: 
  - Car: 0.21 kg CO₂/km (passenger vehicle average)
  - Plane: 0.255 kg CO₂/km (commercial aviation)
  - Train: 0.041 kg CO₂/km (electric rail average)
- **Food**:
  - Beef: 27 kg CO₂/kg (lifecycle assessment)
  - Pork: 12.1 kg CO₂/kg
  - Chicken: 6.9 kg CO₂/kg
  - Fish: 6.1 kg CO₂/kg
  - Vegetarian: 2.3 kg CO₂/meal

### Data Validation
- **Cross-referenced sources**: Multiple authorities confirm key figures
- **Recent data**: 2024/2025 reports ensure currency
- **Regional accuracy**: Country-specific data where available

## Future Enhancements

### Technical Improvements
- **TypeScript migration**: Add type safety and better developer experience
- **Testing suite**: Unit tests for calculations, integration tests for components
- **API integration**: Real-time data feeds instead of static data
- **Performance monitoring**: Add analytics and performance tracking

### Feature Additions
- **Export functionality**: PDF reports, data export capabilities
- **Comparison tools**: Historical tracking, benchmarking features
- **Advanced calculations**: Scope 3 emissions, lifecycle assessments
- **Localization**: Multi-language support, regional emission factors

### Data Enhancements
- **Real-time updates**: Live data feeds from energy APIs
- **More granular data**: City-level, company-specific emissions
- **Predictive modeling**: Scenario analysis, future projections
- **User accounts**: Personal tracking, goal setting, progress monitoring

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Considerations

### Production Build
- **Vite optimization**: Automatic code splitting, asset optimization
- **Static hosting**: Compatible with Netlify, Vercel, GitHub Pages
- **Environment variables**: Support for different API endpoints
- **CDN compatibility**: Assets can be served from CDN for performance

### Browser Support
- **Modern browsers**: ES6+ features, CSS Grid support required
- **Mobile compatibility**: Responsive design works across devices
- **Accessibility**: Semantic HTML, keyboard navigation support

## Contributing Guidelines

### Code Style
- **Consistent formatting**: Follow existing patterns
- **Component structure**: Functional components with hooks
- **Data organization**: Keep chart data near components
- **Naming conventions**: Descriptive variable and function names

### Adding New Features
1. Create new page component in `src/pages/`
2. Add route to `App.jsx`
3. Update navigation in `Navigation.jsx`
4. Follow existing styling patterns
5. Add appropriate data sources and references

This architecture provides a solid foundation for a comprehensive carbon emissions analysis tool while maintaining code clarity, performance, and extensibility.