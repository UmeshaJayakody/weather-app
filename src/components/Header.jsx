import React from 'react'
import './Header.css'
import weatherLogo from '../assets/weather-app.png'

const Header = ({ inputValue, setInputValue, onAddCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onAddCity()
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={weatherLogo} alt="Weather App Logo" className="logo-image" />
          <h1>Weather App</h1>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="city-input"
          />
          <button type="submit" className="add-city-btn">
            Add City
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header
