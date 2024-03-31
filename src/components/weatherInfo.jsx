import React from "react";
import "./style.css";

function WeatherInfo({ info }) {
  if (!info || !info.main || !info.weather || info.weather.length === 0) {
    return <div style={{ margin: 30 }}>No weather information available</div>;
  }

  const { name, main, visibility, weather } = info;

  return (
    <>
      <h2>Current Weather</h2>
      <div className="info">
        <div>
          <div className="data">
            <h2>{name}</h2>
            <p>Feels like: {Math.round(main.feels_like)}°C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Visibility: {visibility}km</p>
          </div>
        </div>
        <div className="status">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <h2 style={{ fontSize: 48 }}>{Math.round(main.temp)}°C</h2>
          <p>{weather[0].description.toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}

export default WeatherInfo;
