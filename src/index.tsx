import "./index.scss";
import "regenerator-runtime/runtime";
import "core-js/stable";
import * as React from "react";
import { render } from "react-dom";
import CpRoutes from "./CpRoutes";

window.React = React;
render(
  <CpRoutes />, document.getElementById("react-container"),
);
