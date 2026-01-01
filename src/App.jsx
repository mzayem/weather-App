import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/forecast";
import WeatherInfo from "./components/weatherInfo";

function BackgroundImage(weather) {
  if (weather.includes("clouds")) {
    return "url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("thunderstorm")) {
    return "url(https://images.pexels.com/photos/2226190/pexels-photo-2226190.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("drizzle")) {
    return "url(https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("snow")) {
    return "url(https://images.pexels.com/photos/17834920/pexels-photo-17834920/free-photo-of-trees-in-snow-in-winter-landscape-on-sunset.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("fog")) {
    return "url(https://images.pexels.com/photos/5865568/pexels-photo-5865568.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("smoke")) {
    return "url(https://images.pexels.com/photos/4527360/pexels-photo-4527360.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("haze")) {
    return "url(https://d2h8hramu3xqoh.cloudfront.net/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp)";
  }
  if (weather.includes("rain")) {
    return "url(https://images.pexels.com/photos/2226190/pexels-photo-2226190.jpeg?auto=compress&cs=tinysrgb)";
  }
  if (weather.includes("mist")) {
    return "url(https://cdn.naturettl.com/wp-content/uploads/2014/07/22014424/featured4.jpg)";
  }

  return "url(https://wallpapercave.com/wp/wp6680277.jpg)";
}

export default function App() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

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
            "weatherData.weather[0].description",
            data.weather[0].description
          );

          const backgroundImage = BackgroundImage(
            data.weather[0].description ?? "clouds"
          );

          const imageUrl = backgroundImage.slice(4, -1).replace(/"/g, "");

          // STEP 1: fade out current background
          document.documentElement.classList.remove("bg-loaded");

          // STEP 2: preload new image
          const img = new Image();
          img.src = imageUrl;

          img.onload = () => {
            // STEP 3: swap background
            document.documentElement.style.setProperty(
              "--background-image",
              backgroundImage
            );

            // STEP 4: fade in
            requestAnimationFrame(() => {
              document.documentElement.classList.add("bg-loaded");
            });
          };

          setLoading(false);
        });
      } catch (error) {
        console.error(error);
        setLoading(false);
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
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
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
      )}
    </>
  );
}
