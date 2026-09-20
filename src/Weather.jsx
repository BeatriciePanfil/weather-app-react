import { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ displayed: false });

  function displayWeather(response) {
    setWeather({
      displayed: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      feelslike: response.data.temperature.feels_like,
      desciption: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      icon: response.data.condition.icon_url,
    });
  }

  if (weather.displayed) {
    return (
      <div className="Weather container">
        <form>
          <input type="search" placeholder="Enter a city" className="search" />
          <input type="submit" value="Search" className="submit" />
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>Monday 11:11</li>
          <li>{weather.description}</li>
        </ul>
        <div className="row">
          <img
            src={weather.icon}
            alt="{weather.description}"
            className="icon"
          />
          <div className="col"> {Math.round(weather.temperature)}°C</div>
          <div className="col">
            <ul>
              <li>Feels like:{Math.round(weather.feelslike)}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
              <li>Pressure:{weather.pressure}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let city = "Lisbon";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }
}
