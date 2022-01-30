import { render } from "solid-js/web";
import { hashIntegration, Router } from "solid-app-router";
import { App } from "./app.main";


render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById("app")
);
