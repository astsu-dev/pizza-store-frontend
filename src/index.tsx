import App from "./App";
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { store } from "store";

const container = document.getElementById("root") as HTMLElement;
const component = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
const root = createRoot(container);
root.render(component);
