import React, { useState } from "react";
import citiesData from "../data/cities.json";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";
import { useAuth0 } from "@auth0/auth0-react";

const WeatherCardContainer = ({ cityCode, onRemove, onCardClick }) => {
  const { data, isLoading } = useWeather(cityCode);
  
  if (isLoading) {
    return (
      <div className="weather-card">
        <div className="card-header" style={{'--bg-color': '#555'}}>
            <p>Loading...</p>
        </div>
        <div className="card-details">
            <p>Loading weather data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <WeatherCard 
      weather={data} 
      onRemove={onRemove}
      onCardClick={() => onCardClick(data)}
    />
  );
};

const WeatherGrid = ({ onCardClick }) => {
  const { isAuthenticated } = useAuth0();
  const [cities, setCities] = useState(citiesData.List);

  const handleRemoveCity = (cityCode) => {
    setCities(cities.filter(c => c.CityCode !== cityCode));
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="weather-grid">
      {cities.map((city) => (
        <WeatherCardContainer
          key={city.CityCode}
          cityCode={city.CityCode}
          onRemove={() => handleRemoveCity(city.CityCode)}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default WeatherGrid;
