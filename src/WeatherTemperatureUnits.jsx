import { useUnit } from "./UnitContext";
import "./WeatherTemperatureUnits.css";

export default function WeatherTemperatureUnits(props) {
  const { unit, toggleUnit, convertTemp } = useUnit();

  const handleToggleClick = (event) => {
    event.preventDefault();
    toggleUnit();
  };
  return (
    <span>
      <span className="current-temperature">
        {Math.round(convertTemp(props.celsius))}
      </span>
      <span className="unit">
        °{unit} |{" "}
        <a href="/" onClick={handleToggleClick}>
          {unit === "C" ? "°F" : "°C"}
        </a>
      </span>
    </span>
  );
}
