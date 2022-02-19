import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "./context/context.js";
import "./index.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
