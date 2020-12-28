import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

const tagManagerArgs = {
  gtmId: "GTM-NV2B7ND",
};
TagManager.initialize(tagManagerArgs);

ReactGA.initialize("UA-178460349-1");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
