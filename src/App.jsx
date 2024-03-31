import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/forecast";
import WeatherInfo from "./components/weatherInfo";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async function (position) {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;

          console.log("Latitude is:", lat);
          console.log("Longitude is:", long);

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&q=${city}&units=metric&appid=39dd8e5ec14e5ea319ff1038f9535b49`
          );
          const data = await response.json();
          setWeatherData(data);
          console.log(data);

          const forecastData = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&q=${city}&units=metric&appid=39dd8e5ec14e5ea319ff1038f9535b49`
          );
          const res = await forecastData.json();
          setForecast(res);
          console.log(res);
        });
      } catch (error) {
        console.error(error);
        // Handle error (e.g., display error message to the user)
      }
    };

    fetchData();
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <div className="glass">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
        </form>

        <WeatherInfo info={weatherData} />
        <Forecast list={forecast.list} />
      </div>
    </>
  );
}
