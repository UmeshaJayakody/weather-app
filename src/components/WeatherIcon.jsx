import React from 'react'

const WeatherIcon = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'few-clouds':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.8"/>
            <path d="M20 16c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4-1.8-4-4s1.8-4 4-4c0-3.3 2.7-6 6-6 2.4 0 4.4 1.4 5.4 3.4.5-.3 1.1-.4 1.6-.4z" fill="currentColor"/>
          </svg>
        )
      case 'broken-clouds':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 14c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4-1.8-4-4s1.8-4 4-4c0-3.3 2.7-6 6-6 2.4 0 4.4 1.4 5.4 3.4.5-.3 1.1-.4 1.6-.4z" fill="currentColor"/>
            <path d="M26 10c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3s1.3-3 3-3c0-2.2 1.8-4 4-4 1.6 0 2.9 0.9 3.6 2.3.1-.2.3-.3.4-.3z" fill="currentColor" opacity="0.7"/>
          </svg>
        )
      case 'clear-sky':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L17.5 7.5L21 9L17.5 10.5L16 14L14.5 10.5L11 9L14.5 7.5L16 4Z" fill="currentColor"/>
            <circle cx="16" cy="16" r="6" fill="currentColor"/>
            <path d="M16 2V6M16 26V30M30 16H26M6 16H2M25.66 6.34L23.54 8.46M8.46 23.54L6.34 25.66M25.66 25.66L23.54 23.54M8.46 8.46L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'light-rain':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 14c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4-1.8-4-4s1.8-4 4-4c0-3.3 2.7-6 6-6 2.4 0 4.4 1.4 5.4 3.4.5-.3 1.1-.4 1.6-.4z" fill="currentColor"/>
            <path d="M10 24L11 26M14 24L15 26M18 24L19 26M22 24L23 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      case 'mist':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M4 12H28M4 16H28M4 20H28M4 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
            <path d="M20 8c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4-1.8-4-4s1.8-4 4-4c0-3.3 2.7-6 6-6 2.4 0 4.4 1.4 5.4 3.4.5-.3 1.1-.4 1.6-.4z" fill="currentColor" opacity="0.4"/>
          </svg>
        )
      default:
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="6" fill="currentColor"/>
          </svg>
        )
    }
  }

  return (
    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
      {getIcon()}
    </div>
  )
}

export default WeatherIcon
