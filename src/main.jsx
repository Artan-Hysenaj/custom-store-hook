import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureCounterStore from "./store/counter-store";

configureCounterStore();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
