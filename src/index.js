import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NV2B7ND"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
