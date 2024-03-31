import { useState } from "react";
import "./style.css";

const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
function Forecast() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, pages.length - 1));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="forecast">
      <div className="carousel-container">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pages.map((page, index) => (
              <div key={index} className="page">
                {page}
              </div>
            ))}
          </div>
        </div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
export default Forecast;
