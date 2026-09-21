import FormattedDate from "./FormattedDate";
import WeatherTemperatureConversion from "./WeatherTemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col">
          <div>
            <img
              src={props.data.icon}
              alt="{weather.description}"
              className="icon"
            />
          </div>{" "}
          <WeatherTemperatureConversion celsius={props.data.temperature} />
        </div>
        <div className="col">
          <ul>
            <li>Feels like:{Math.round(props.data.feelslike)}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
            <li>Pressure:{props.data.pressure}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
