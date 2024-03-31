import { useEffect, useState } from "react";
import "./App.css";
import WeatherInfo from "./components/weatherInfo";
import Forecast from "./components/forecast";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&q=${city}&units=metric&appid=39dd8e5ec14e5ea319ff1038f9535b49`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      <q></q>;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
        <p>hello</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleInputChange}
          />
        </form>

        <WeatherInfo info={weatherData} />
        <Forecast />
      </div>
    </>
  );
}

export default App;
