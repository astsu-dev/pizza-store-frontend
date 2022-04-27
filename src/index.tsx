import App from "./App";
import "./index.css";
import AdminPanel from "pages/AdminPanel";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "store";

const container = document.getElementById("root") as HTMLElement;
const component = (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="admin/*" element={<AdminPanel />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
const root = createRoot(container);
root.render(component);
