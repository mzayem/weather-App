import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

// export default function BackgroundImage(weather) {
//   if (weather.includes("cloud")) {
//     return "url(https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg)"; // URL to cloudy background image
//   } else if (weather.includes("rain")) {
//     return "url(https://example.com/rainy-background.jpg)"; // URL to rainy background image
//   } else {
//     return "url(https://example.com/default-background.jpg)"; // Default background image
//   }
// }

// const weather = "cloud";
// const backgroundImage = BackgroundImage(weather);

// document.documentElement.style.setProperty(
//   "--background-image",
//   backgroundImage
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
