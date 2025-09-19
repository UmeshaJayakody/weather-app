# Weather App 🌤️

A modern, responsive weather application built with React that provides real-time weather information for cities around the world. The app features user authentication via Auth0 and displays weather data in an intuitive grid layout.

![Weather App](src/assets/weather-app.png)

## Features ✨

- **Real-time Weather Data**: Get current weather information using OpenWeatherMap API
- **User Authentication**: Secure login/logout functionality powered by Auth0
- **Interactive Weather Cards**: Click on weather cards to view detailed information
- **City Management**: View weather for multiple predefined cities
- **Responsive Design**: Built with Tailwind CSS for seamless experience across devices
- **Modern UI**: Clean and intuitive interface with weather icons and status indicators
- **Data Caching**: Efficient data fetching with React Query (5-minute cache)

## Tech Stack 🛠️

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Authentication**: Auth0
- **Data Fetching**: React Query + Axios
- **Weather API**: OpenWeatherMap

## Prerequisites 📋

Before running this application, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- Auth0 account and application setup
- OpenWeatherMap API key

## Installation 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/UmeshaJayakody/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory and add your configuration:
   ```env
   VITE_AUTH0_DOMAIN=your-auth0-domain
   VITE_AUTH0_CLIENT_ID=your-auth0-client-id
   VITE_AUTH0_AUDIENCE=your-auth0-audience
   VITE_OPENWEATHER_API_KEY=your-openweathermap-api-key
   ```

4. **Auth0 Configuration**
   - Create an Auth0 application
   - Set the callback URL to `http://localhost:5173`
   - Configure logout URLs
   - Update the Auth0 settings in your app

5. **OpenWeatherMap API Setup**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Replace the API key in `src/hooks/useWeather.js` or use environment variables

## Usage 🖥️

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   Navigate to `http://localhost:5173`

3. **Login**
   Click the login button to authenticate via Auth0

4. **Explore Weather Data**
   - View weather cards for different cities
   - Click on any card for detailed weather information
   - Use the back button to return to the grid view

## Project Structure 📁

```
weather-app/
├── public/
├── src/
│   ├── assets/           # Images and static assets
│   ├── components/       # Reusable React components
│   │   ├── AuthButtons.jsx
│   │   ├── AuthError.jsx
│   │   ├── Header.jsx
│   │   ├── TopNav.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── WeatherDetail.jsx
│   │   ├── WeatherGrid.jsx
│   │   └── WeatherIcon.jsx
│   ├── data/            # Static data files
│   │   └── cities.json  # Predefined cities list
│   ├── hooks/           # Custom React hooks
│   │   └── useWeather.js
│   ├── pages/           # Page components
│   │   └── Login.jsx
│   ├── App.jsx          # Main application component
│   ├── index.jsx        # Application entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Key Components 🧩

### `App.jsx`
Main application component that handles routing, authentication state, and global app layout.

### `WeatherGrid.jsx`
Displays weather cards in a responsive grid layout for multiple cities.

### `WeatherCard.jsx`
Individual weather card component showing city weather summary.

### `WeatherDetail.jsx`
Detailed weather view component with comprehensive weather information.

### `useWeather.js`
Custom hook for fetching weather data from OpenWeatherMap API with React Query.

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## API Integration 🌐

The app integrates with:

1. **OpenWeatherMap API**: Fetches real-time weather data
2. **Auth0**: Handles user authentication and authorization

## Cities Supported 🌍

The app comes with weather data for these cities:
- Colombo, Sri Lanka
- Tokyo, Japan
- Liverpool, UK
- Paris, France
- Sydney, Australia
- Boston, USA
- Shanghai, China
- Oslo, Norway

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements 🔮

- [ ] Add more cities dynamically
- [ ] Weather forecasts (5-day/7-day)
- [ ] Location-based weather detection
- [ ] Favorite cities management
- [ ] Weather alerts and notifications
- [ ] Dark/light theme toggle
- [ ] Weather history tracking

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [Auth0](https://auth0.com/) for authentication services
- [Tailwind CSS](https://tailwindcss.com/) for styling framework
- [React Query](https://react-query.tanstack.com/) for data fetching
- Fidenz Technologies for design inspiration

## Support 💬

If you have any questions or run into issues, please open an issue on GitHub or contact the development team.

---

**Built with ❤️ by [UmeshaJayakody](https://github.com/UmeshaJayakody)**