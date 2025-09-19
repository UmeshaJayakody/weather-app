import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import weatherLogo from '../assets/weather-app.png';
import './Login.css';

const Login = () => {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };

  if (isLoading) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          {/* Header Section */}
          <div className="login-header">
            <div className="logo">
              <img src={weatherLogo} alt="Weather App Logo" className="logo-image" />
              <h1>Weather App</h1>
            </div>
            <p className="login-subtitle">Sign in to get personalized weather updates and forecasts</p>
          </div>

          {/* Error Display */}
          {error && (
            <div className="error-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Authentication failed. Please try again.</span>
            </div>
          )}

          {/* Authentication Button */}
          <div className="auth-buttons">
            <button 
              type="button" 
              className="login-btn primary"
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="btn-spinner"></div>
                  Signing in...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Sign In with Auth0
                </>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="login-footer">
            <p>Secure authentication powered by Auth0</p>
            <p className="privacy-note">Your privacy and security are our top priority</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;