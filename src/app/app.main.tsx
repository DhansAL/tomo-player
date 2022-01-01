import { Route, Routes } from "solid-app-router";
import { Library } from "./Containers/Library";
import { Overview } from "./Containers/Overview";
import { Settings } from "./Containers/Settings";

/**
 im dumb
 * 
 */

export const App = () => {
 
  return (
    <>
      <Routes>
        <Route  path="/" element={<Overview />} />
        <Route path="/library" element={<Library />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};
