import { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [displayed, setDisplayed] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setDisplayed(false);
  }, [props.data.city]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setDisplayed(true);
  }

  function load() {
    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
  }
  if (displayed) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay
                    data={dailyForecast}
                    icon={props.data.icon}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
