import React from "react";
import "./style.css";
import FormatTime from "./formatTime";

function Forecast({ list }) {
  if (!list || !Array.isArray(list) || list.length === 0) {
    return <div style={{ margin: 50 }}>No forecast available</div>;
  }

  return (
    <div className="forecast">
      <h2>Hourly updates</h2>
      <div className="row">
        {list.slice(0, 10).map((item, index) => (
          <div key={index} className="column">
            <p>{FormatTime(item.dt_txt)}</p>
            <h3>{Math.round(item.main.temp)}°C</h3>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <p>{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
