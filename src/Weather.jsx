import { useState } from "react";
import { UnitProvider } from "./UnitContext";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ displayed: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherdata({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      displayed: true,
    });
  }

  function search() {
    let apiKey = "bb3502a4t5567900odf5c4da2a6e140f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherdata.displayed) {
    return (
      <UnitProvider>
        <div className="Weather container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {" "}
              <div className="col-9 pe-0">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="search"
                  onChange={handleCitySearch}
                />
              </div>
              <div className="col-3 ps-0">
                <input type="submit" value="Search" className="submit" />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherdata} />
          <WeatherForecast data={weatherdata} />
        </div>
      </UnitProvider>
    );
  } else {
    search();
    return <p style={{ textAlign: "center", color: "#fff" }}>Loading...</p>;
  }
}
