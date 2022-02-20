import { SpeechProvider } from "@speechly/react-client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "./context/context.js";
import "./index.css";
ReactDOM.render(
  <SpeechProvider appId="02284f3c-9758-4df8-9309-ccc6568e53a5" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
