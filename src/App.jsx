import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Lisbon" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/BeatriciePanfil"
          target="_blank"
          rel="noreferrer"
        >
          Beatricie Panfil
        </a>
        , is{" "}
        <a
          href="https://github.com/BeatriciePanfil/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://weather-app-react-dark.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
