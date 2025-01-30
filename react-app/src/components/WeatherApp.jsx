import React, { useState } from "react";
import axios from "axios";

const API_KEY = "e92da444bb0a45241c98472d3291ba12"; // Replace with your API key

const WeatherApp = () => {
  const [city, setCity] = useState("New York"); // Default city
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async () => {
    if (!city) {
        alert("enter city name");
        return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

 // Runs whenever `city` changes

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
