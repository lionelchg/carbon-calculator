import React, { useState } from 'react'
import { Car, Plane, Utensils, Home, Plus, X } from 'lucide-react'

const Calculator = () => {
  const [trips, setTrips] = useState([])
  const [meals, setMeals] = useState([])
  const [currentTrip, setCurrentTrip] = useState({
    type: 'car',
    distance: '',
    passengers: 1
  })
  const [currentMeal, setCurrentMeal] = useState({
    type: 'beef',
    frequency: 1
  })

  const carbonFactors = {
    car: 0.21, // kg CO2 per km
    plane: 0.255, // kg CO2 per km
    train: 0.041, // kg CO2 per km
    beef: 27, // kg CO2 per kg
    pork: 12.1, // kg CO2 per kg
    chicken: 6.9, // kg CO2 per kg
    fish: 6.1, // kg CO2 per kg
    vegetarian: 2.3 // kg CO2 per meal
  }

  const addTrip = () => {
    if (currentTrip.distance) {
      const distance = parseFloat(currentTrip.distance)
      const emissionFactor = carbonFactors[currentTrip.type]
      const emissions = (distance * emissionFactor) / currentTrip.passengers
      
      setTrips([...trips, {
        ...currentTrip,
        distance,
        emissions: emissions.toFixed(2),
        id: Date.now()
      }])
      
      setCurrentTrip({
        type: 'car',
        distance: '',
        passengers: 1
      })
    }
  }

  const addMeal = () => {
    if (currentMeal.frequency) {
      let emissions
      if (currentMeal.type === 'vegetarian') {
        emissions = currentMeal.frequency * carbonFactors.vegetarian
      } else {
        // Assuming 0.25kg of meat per meal
        emissions = currentMeal.frequency * 0.25 * carbonFactors[currentMeal.type]
      }
      
      setMeals([...meals, {
        ...currentMeal,
        emissions: emissions.toFixed(2),
        id: Date.now()
      }])
      
      setCurrentMeal({
        type: 'beef',
        frequency: 1
      })
    }
  }

  const removeTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id))
  }

  const removeMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id))
  }

  const totalTripEmissions = trips.reduce((sum, trip) => sum + parseFloat(trip.emissions), 0)
  const totalMealEmissions = meals.reduce((sum, meal) => sum + parseFloat(meal.emissions), 0)
  const totalEmissions = totalTripEmissions + totalMealEmissions

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Personal Carbon Calculator</h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Calculate your carbon footprint from travel and diet choices
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Car size={24} />
            Transportation
          </h3>
          
          <div className="form-group">
            <label>Transportation Type</label>
            <select 
              value={currentTrip.type}
              onChange={(e) => setCurrentTrip({...currentTrip, type: e.target.value})}
            >
              <option value="car">Car</option>
              <option value="plane">Plane</option>
              <option value="train">Train</option>
            </select>
          </div>

          <div className="form-group">
            <label>Distance (km)</label>
            <input
              type="number"
              value={currentTrip.distance}
              onChange={(e) => setCurrentTrip({...currentTrip, distance: e.target.value})}
              placeholder="Enter distance"
            />
          </div>

          {currentTrip.type === 'car' && (
            <div className="form-group">
              <label>Number of Passengers</label>
              <input
                type="number"
                min="1"
                value={currentTrip.passengers}
                onChange={(e) => setCurrentTrip({...currentTrip, passengers: parseInt(e.target.value)})}
              />
            </div>
          )}

          <button className="btn" onClick={addTrip}>
            <Plus size={16} style={{ marginRight: '0.5rem' }} />
            Add Trip
          </button>

          <div style={{ marginTop: '2rem' }}>
            <h4>Your Trips:</h4>
            {trips.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No trips added yet</p>
            ) : (
              trips.map((trip) => (
                <div key={trip.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.5rem',
                  backgroundColor: '#f8f9fa',
                  marginBottom: '0.5rem',
                  borderRadius: '4px'
                }}>
                  <span>
                    {trip.distance}km by {trip.type}
                    {trip.type === 'car' && trip.passengers > 1 && ` (${trip.passengers} passengers)`}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong>{trip.emissions} kg CO₂</strong>
                    <button 
                      onClick={() => removeTrip(trip.id)}
                      style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Utensils size={24} />
            Diet & Food
          </h3>
          
          <div className="form-group">
            <label>Food Type</label>
            <select 
              value={currentMeal.type}
              onChange={(e) => setCurrentMeal({...currentMeal, type: e.target.value})}
            >
              <option value="beef">Beef</option>
              <option value="pork">Pork</option>
              <option value="chicken">Chicken</option>
              <option value="fish">Fish</option>
              <option value="vegetarian">Vegetarian Meal</option>
            </select>
          </div>

          <div className="form-group">
            <label>Frequency (meals per week)</label>
            <input
              type="number"
              min="1"
              max="21"
              value={currentMeal.frequency}
              onChange={(e) => setCurrentMeal({...currentMeal, frequency: parseInt(e.target.value)})}
            />
          </div>

          <button className="btn" onClick={addMeal}>
            <Plus size={16} style={{ marginRight: '0.5rem' }} />
            Add to Diet
          </button>

          <div style={{ marginTop: '2rem' }}>
            <h4>Your Weekly Diet:</h4>
            {meals.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>No meals added yet</p>
            ) : (
              meals.map((meal) => (
                <div key={meal.id} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '0.5rem',
                  backgroundColor: '#f8f9fa',
                  marginBottom: '0.5rem',
                  borderRadius: '4px'
                }}>
                  <span>
                    {meal.type} - {meal.frequency} meal{meal.frequency > 1 ? 's' : ''}/week
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <strong>{meal.emissions} kg CO₂/week</strong>
                    <button 
                      onClick={() => removeMeal(meal.id)}
                      style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {(trips.length > 0 || meals.length > 0) && (
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Carbon Footprint Summary</h3>
          <div className="grid grid-3">
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
              <Car size={32} style={{ color: '#1976d2', margin: '0 auto 0.5rem' }} />
              <div className="stat-value" style={{ fontSize: '1.5rem', color: '#1976d2' }}>
                {totalTripEmissions.toFixed(2)}
              </div>
              <div className="stat-label">kg CO₂ from Travel</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#e8f5e8', borderRadius: '8px' }}>
              <Utensils size={32} style={{ color: '#388e3c', margin: '0 auto 0.5rem' }} />
              <div className="stat-value" style={{ fontSize: '1.5rem', color: '#388e3c' }}>
                {totalMealEmissions.toFixed(2)}
              </div>
              <div className="stat-label">kg CO₂/week from Diet</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff3e0', borderRadius: '8px' }}>
              <Home size={32} style={{ color: '#f57c00', margin: '0 auto 0.5rem' }} />
              <div className="stat-value" style={{ fontSize: '1.5rem', color: '#f57c00' }}>
                {totalEmissions.toFixed(2)}
              </div>
              <div className="stat-label">Total kg CO₂</div>
            </div>
          </div>
          
          <div className="result-card" style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Environmental Context</h4>
            <p>
              <strong>Your total emissions:</strong> {totalEmissions.toFixed(2)} kg CO₂
            </p>
            <p>
              <strong>Equivalent to:</strong> {(totalEmissions / 2.3).toFixed(1)} kg of coal burned
            </p>
            <p>
              <strong>To offset:</strong> You would need to plant {Math.ceil(totalEmissions / 21.7)} tree seedlings
            </p>
            {totalMealEmissions > 0 && (
              <p>
                <strong>Annual diet impact:</strong> {(totalMealEmissions * 52).toFixed(0)} kg CO₂/year
              </p>
            )}
          </div>
        </div>
      )}

      <div className="card">
        <h3 style={{ marginBottom: '1rem' }}>Carbon Footprint Reference</h3>
        <div className="grid grid-2">
          <div>
            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Transportation (kg CO₂/km)</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Car: 0.21 kg/km</li>
              <li>Plane: 0.255 kg/km</li>
              <li>Train: 0.041 kg/km</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Food (kg CO₂/kg)</h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Beef: 27 kg CO₂/kg</li>
              <li>Pork: 12.1 kg CO₂/kg</li>
              <li>Chicken: 6.9 kg CO₂/kg</li>
              <li>Fish: 6.1 kg CO₂/kg</li>
              <li>Vegetarian: 2.3 kg CO₂/meal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator