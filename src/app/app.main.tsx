import { Route, Routes } from "solid-app-router";
import { Library } from "./Containers/Library";
import { Overview } from "./Containers/Overview";
import { Player } from "./Containers/Player";
import { Settings } from "./Containers/Settings";
export const App = () => {
 
  return (
    <>
      <Routes>
        <Route  path="/" element={<Overview />} />
        <Route path="/library" element={<Library />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
};
