import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import WeatherGrid from "./components/WeatherGrid";
import WeatherDetail from "./components/WeatherDetail";
import AuthError from "./components/AuthError";
import Login from "./pages/Login";
import Header from "./components/Header";
import TopNav from "./components/TopNav";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [newCity, setNewCity] = useState("");
  const [selectedWeather, setSelectedWeather] = useState(null);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    error,
  } = useAuth0();

  const handleAddCity = () => {
    if (newCity.trim()) {
      console.log("Adding city:", newCity);
      // Here you would typically update a list of cities
      setNewCity("");
    }
  };

  if (isLoading) {
    return (
      <div className="app">
        <div className="main-content" style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`app ${isAuthenticated ? 'app-with-nav' : ''}`}>
        {isAuthenticated && (
          <TopNav 
            user={user} 
            onLogout={() => logout({ returnTo: window.location.origin })} 
          />
        )}
        {!selectedWeather && isAuthenticated && (
          <Header
            inputValue={newCity}
            setInputValue={setNewCity}
            onAddCity={handleAddCity}
          />
        )}
        <main className="main-content">
          {error && <AuthError error={error} />}
          {selectedWeather ? (
            <WeatherDetail 
              weather={selectedWeather} 
              onBack={() => setSelectedWeather(null)} 
            />
          ) : isAuthenticated ? (
            <WeatherGrid onCardClick={setSelectedWeather} />
          ) : (
            <Login />
          )}
        </main>
        {!selectedWeather && isAuthenticated && (
          <footer className="footer">
            <p>© 2021 Fidenz Technologies</p>
          </footer>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
