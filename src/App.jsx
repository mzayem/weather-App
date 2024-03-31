import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/forecast";
import WeatherInfo from "./components/weatherInfo";

function BackgroundImage(weather) {
  if (weather.includes("clouds")) {
    return "url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg)";
  } else if (weather.includes("thunderstorm")) {
    return "url(https://images.pexels.com/photos/2226190/pexels-photo-2226190.jpeg)";
  } else if (weather.includes("drizzle")) {
    return "url(https://images.pexels.com/photos/7002970/pexels-photo-7002970.jpeg)";
  } else if (weather.includes("snow")) {
    return "url(https://images.pexels.com/photos/17834920/pexels-photo-17834920/free-photo-of-trees-in-snow-in-winter-landscape-on-sunset.jpeg)";
  } else if (weather.includes("fog")) {
    return "url(https://images.pexels.com/photos/5708054/pexels-photo-5708054.jpeg)";
  } else if (weather.includes("smoke")) {
    return "url(https://images.pexels.com/photos/4619957/pexels-photo-4619957.jpeg)";
  } else {
    return "url(https://wallpapercave.com/wp/wp6680277.jpg)";
  }
}

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = setTimeout(async () => {
      try {
        navigator.geolocation.getCurrentPosition(async function (position) {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;

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

          console.log(
            "weatherData.weather[0].main",
            data.weather[0].description
          );

          const backgroundImage = BackgroundImage(
            data.weather[0].description ?? "clouds"
          );

          document.documentElement.style.setProperty(
            "--background-image",
            backgroundImage
          );
        });
      } catch (error) {
        console.error(error);
      }
    }, 1000);

    return () => clearTimeout(fetchData);
  }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            className="custom-input"
          />
        </form>

        <WeatherInfo info={weatherData} />
        <Forecast list={forecast.list} />
      </div>
    </>
  );
}
