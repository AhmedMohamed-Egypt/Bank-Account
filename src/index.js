import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "animate.css";
import "./sass/main.scss";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
