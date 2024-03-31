import { useEffect, useState } from "react";
import "./App.css";
import WeatherInfo from "./components/weatherInfo";
import Forecast from "./components/forecast";
import WeatherSearch from "./components/search";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const city = "dublin";
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&appid=39dd8e5ec14e5ea319ff1038f9535b49`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="glass">
        <p>hello</p>
        <WeatherSearch />
        {/* <WeatherInfo info={weatherData} /> */}
        <Forecast />
      </div>
    </>
  );
}

export default App;
