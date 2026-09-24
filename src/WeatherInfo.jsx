import FormattedDate from "./FormattedDate";
import WeatherTemperatureUnits from "./WeatherTemperatureUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />, {props.data.description}
            </li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="icon"
            />
            <WeatherTemperatureUnits celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
