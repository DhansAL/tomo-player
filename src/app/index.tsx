import { render } from "solid-js/web";
import { hashIntegration, Router } from "solid-app-router";
import { App } from "./app.main";
import { UserContextProvider } from "./Contexts/FileContext";


render(
  () => (
    <Router source={hashIntegration()}>
      <UserContextProvider>
      <App />
      </UserContextProvider>
    </Router>
  ),
  document.getElementById("app")
);
