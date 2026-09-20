import { useState } from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/BeatriciePanfil" target="_blank">
          Beatricie Panfil
        </a>
        , is{" "}
        <a href="" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
