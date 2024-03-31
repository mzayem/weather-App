import { useEffect } from "react";
import "./style.css";
import App from "../App";

const handleInputChange = (e) => {
  setCity(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  fetchData();
};

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button type="submit">Get Weather</button>
    </form>
    {weatherData ? (
      <>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Feels like : {weatherData.main.feels_like}°C</p>
        <p>Humidity : {weatherData.main.humidity}%</p>
        <p>Pressure : {weatherData.main.pressure}</p>
        <p>Wind Speed : {weatherData.wind.speed}m/s</p>
      </>
    ) : (
      <p>Loading weather data...</p>
    )}
  </div>
);
