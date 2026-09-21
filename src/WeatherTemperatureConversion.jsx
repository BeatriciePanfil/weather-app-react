import { useState } from "react";

export default function WeatherTemperatureConversion(props) {
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
      <div>
        {" "}
        <span>{Math.round(props.celsius)}</span>°C|{" "}
        <a href="/" onClick={displayFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <span>{Math.round(unit)}</span>{" "}
        <a href="/" onClick={displayCelsius}>
          °C
        </a>
        |°F
      </div>
    );
  }
}
