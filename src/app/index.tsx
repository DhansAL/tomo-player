import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import { App } from "./app.main";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("app")
);
