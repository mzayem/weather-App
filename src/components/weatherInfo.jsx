import "./style.css";

function WeatherInfo({ info }) {
  return (
    <div className="info">
      <div>
        <p>{info.name}</p>
        <p>feels like: {Math.round(info.main.feels_like)}</p>
        <p>humidity: {info.main.humidity}%</p>
        <p>Visibility: {info.visibility}km</p>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
        />
        <h2>{Math.round(info.main.temp)}°C</h2>
        <p>{info.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;
