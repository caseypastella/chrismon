import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Router } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));
