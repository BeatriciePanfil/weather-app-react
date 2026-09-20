import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <form>
        <input type="search" placeholder="Enter a city" className="search" />
        <input type="submit" value="Search" className="submit" />
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Monday 11:11</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col">Temperature</div>
        <div className="col">
          <ul>
            <li>Feels like:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
            <li>Pressure:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
