import { Route, Routes } from "solid-app-router";
import { createEffect } from "solid-js";
import { Library } from "./Containers/Library";
import { Overview } from "./Containers/Overview";
import { Player } from "./Containers/Player";
import { Settings } from "./Containers/Settings";
import { authStore } from "./store/auth";


export const App = () => {
  createEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = (localStorage.getItem("user"))
      authStore.setState({ token: token, username: user, authenticate: true, })
    } else {
      authStore.setState({ token: null, username: null, authenticate: false, })
    }
  })

  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/library" element={<Library />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
};
