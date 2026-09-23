import { useState } from "react";
import "./WeatherTemperatureUnits.css";

export default function WeatherTemperatureUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit((props.celsius * 9) / 5 + 32);
  }
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        {" "}
        <span className="current-temperature">
          {Math.round(props.celsius)}
        </span>{" "}
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {" "}
        <span className="current-temperature">{Math.round(unit)}</span>{" "}
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
