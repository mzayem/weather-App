import React from "react";
import "./style.css";

function Forecast({ list }) {
  if (!list || !Array.isArray(list) || list.length === 0) {
    return <div>No forecast available</div>;
  }

  return (
    <div className="forecast">
      <div>
        <p>hello</p>
        {list.map((item, index) => (
          <div key={index}>
            <p>{item.main.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
