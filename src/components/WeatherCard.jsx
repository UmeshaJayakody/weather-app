import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherCard.css';

const WeatherCard = ({ weather, onRemove, onCardClick }) => {
  if (!weather) return null;

  const getConditionIcon = (condition) => {
    const desc = condition.toLowerCase();
    if (desc.includes('clear')) return 'clear-sky';
    if (desc.includes('few clouds')) return 'few-clouds';
    if (desc.includes('broken clouds')) return 'broken-clouds';
    if (desc.includes('rain')) return 'light-rain';
    if (desc.includes('mist')) return 'mist';
    return 'few-clouds';
  };

  const getBgColor = (temp) => {
    if (temp < 0) return '#dc2626'; // red for very cold
    if (temp < 10) return '#8b5cf6'; // purple for cold
    if (temp < 20) return '#3b82f6'; // blue for cool
    if (temp < 25) return '#10b981'; // green for mild
    if (temp < 30) return '#f59e0b'; // amber/orange for warm
    return '#ef4444'; // red-orange for hot
  };
  
  const data = {
    city: weather.name,
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    temperature: Math.round(weather.main.temp),
    condition: weather.weather[0].description,
    tempMin: Math.round(weather.main.temp_min),
    tempMax: Math.round(weather.main.temp_max),
    pressure: `${weather.main.pressure}hPa`,
    humidity: `${weather.main.humidity}%`,
    visibility: `${(weather.visibility / 1000).toFixed(1)}km`,
    windSpeed: `${weather.wind.speed}m/s`,
    windDirection: `${weather.wind.deg}°`,
    sunrise: new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    sunset: new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    bgColor: getBgColor(weather.main.temp),
    conditionIcon: getConditionIcon(weather.weather[0].main)
  };

  const handleCardClick = (e) => {
    // Don't trigger card click if close button was clicked
    if (e.target.closest('.close-btn')) {
      return;
    }
    onCardClick();
  };

  return (
    <div className="weather-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="card-header" style={{ '--bg-color': data.bgColor }}>
        <button className="close-btn" onClick={onRemove}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="header-top">
          <div className="city-info">
            <h2 className="city-name">{data.city}, {weather.sys.country}</h2>
            <p className="time">{data.time}, Feb 8</p>
          </div>
          <div className="temperature-main">{data.temperature}°c</div>
        </div>
        
        <div className="header-bottom">
          <div className="condition-section">
            <WeatherIcon type={data.conditionIcon} />
            <p className="condition">{data.condition}</p>
          </div>
          <div className="temp-range">
            <p>Temp Min: {data.tempMin}°c</p>
            <p>Temp Max: {data.tempMax}°c</p>
          </div>
        </div>
      </div>
      
      <div className="card-details">
        <div className="details-left">
          <div className="detail-item">Pressure: {data.pressure}</div>
          <div className="detail-item">Humidity: {data.humidity}</div>
          <div className="detail-item">Visibility: {data.visibility}</div>
        </div>
        <div className="wind-section">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="wind-icon" style={{ transform: `rotate(${weather.wind.deg}deg)` }}>
            <path d="M12 2L12 22M6 8L12 2L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="wind-text">{data.windSpeed} {data.windDirection}</div>
        </div>
        <div className="details-right">
          <div className="detail-item">Sunrise: {data.sunrise}</div>
          <div className="detail-item">Sunset: {data.sunset}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
