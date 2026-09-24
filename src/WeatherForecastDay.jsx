import { useUnit } from "./UnitContext";

export default function WeatherForecastDay(props) {
  const { convertTemp } = useUnit();

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${convertTemp(temperature)}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${convertTemp(temperature)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>{" "}
      <img src={props.icon} className="icon-forecast" />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
