import { render } from "solid-js/web";
import { hashIntegration, Router } from "solid-app-router";
import { App } from "./app.main";
import { FileFolderContextProvider } from "./Contexts/FileFolderContext";


render(
  () => (
    <Router source={hashIntegration()}>
      <FileFolderContextProvider>
        <App />
      </FileFolderContextProvider>
    </Router>
  ),
  document.getElementById("app")
);
