import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Components/App/index.js";
import { BrowserRouter } from "react-router-dom";
import { moveCursor } from "./CursorActions/cursor";

document.addEventListener("mousemove", moveCursor);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
