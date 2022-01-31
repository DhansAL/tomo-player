import { Route, Routes } from "solid-app-router";
import { createEffect } from "solid-js";
import { Library } from "./Containers/Library";
import { LoginPage } from "./Containers/Login";
import { Overview } from "./Containers/Overview";
import { Player } from "./Containers/Player";
import { ProPage } from "./Containers/ProPage";
import { Settings } from "./Containers/Settings";
import { UserMain } from "./Containers/UserMain";
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
        <Route path="/pro" element={<ProPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userstats" element={<UserMain />} />
      </Routes>
    </>
  );
};
