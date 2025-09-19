import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherDetail.css';

const WeatherDetail = ({ weather, onBack }) => {
  if (!weather) return null;

  const getConditionIcon = (condition) => {
    const desc = condition.toLowerCase();
    if (desc.includes('clear')) return 'clear-sky';
    if (desc.includes('few clouds')) return 'few-clouds';
    if (desc.includes('scattered clouds')) return 'scattered-clouds';
    if (desc.includes('broken clouds')) return 'broken-clouds';
    if (desc.includes('shower rain')) return 'shower-rain';
    if (desc.includes('rain')) return 'rain';
    if (desc.includes('thunderstorm')) return 'thunderstorm';
    if (desc.includes('snow')) return 'snow';
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
    country: weather.sys.country,
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }) + ', ' + new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    temperature: Math.round(weather.main.temp),
    condition: weather.weather[0].description,
    tempMin: Math.round(weather.main.temp_min),
    tempMax: Math.round(weather.main.temp_max),
    feelsLike: Math.round(weather.main.feels_like),
    pressure: `${weather.main.pressure}hPa`,
    humidity: `${weather.main.humidity}%`,
    visibility: `${(weather.visibility / 1000).toFixed(1)}km`,
    windSpeed: `${weather.wind.speed.toFixed(1)}m/s`,
    windDirection: `${weather.wind.deg} Degree`,
    windGust: weather.wind.gust ? `${weather.wind.gust.toFixed(1)}m/s` : 'N/A',
    cloudiness: `${weather.clouds.all}%`,
    dewPoint: weather.main.temp - ((100 - weather.main.humidity)/5),
    sunrise: new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    sunset: new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
    timezone: weather.timezone ? `UTC${weather.timezone >= 0 ? '+' : ''}${weather.timezone/3600}` : 'N/A',
    conditionIcon: getConditionIcon(weather.weather[0].main),
    bgColor: getBgColor(weather.main.temp)
  };

  return (
    <div className="weather-detail-container">
      <div className="weather-detail-card">
        <div className="detail-header" style={{ backgroundColor: data.bgColor }}>
          <button onClick={onBack} className="back-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="detail-city-info">
            <h2>{data.city}, {data.country}</h2>
            <p>{data.time}</p>
          </div>
          
          <div className="detail-main-content">
            <div className="detail-condition">
              <WeatherIcon type={data.conditionIcon} />
              <p>{data.condition}</p>
            </div>
            
            <div className="detail-divider"></div>
            
            <div className="detail-temperature">
              <h1>{data.temperature}°c</h1>
              <div className="detail-temp-range">
                <p>Temp Min: {data.tempMin}°c</p>
                <p>Temp Max: {data.tempMax}°c</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="detail-footer">
          <div className="detail-simple-grid">
            <div className="detail-left">
              <p>Pressure: {data.pressure}</p>
              <p>Humidity: {data.humidity}</p>
              <p>Visibility: {data.visibility}</p>
            </div>
            
            <div className="detail-wind">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="wind-arrow" style={{transform: `rotate(${weather.wind.deg}deg)`}}>
                <path d="M12 2L12 22M6 8L12 2L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{data.windSpeed} {data.windDirection}</p>
            </div>
            
            <div className="detail-right">
              <p>Sunrise: {data.sunrise}</p>
              <p>Sunset: {data.sunset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetail;
