import { Link, Route, Routes } from "solid-app-router";
import { lazy } from "solid-js";
// import { Layout } from "./Components/Layout";
// import { Library } from "./Containers/Library";
// import { Overview } from "./Containers/Overview";
// import { Settings } from "./Containers/Settings";

const Layout = () => {
  return (
    <>
      <div>
        <Link href="/">Overview</Link>
        <Link href="/library">library</Link>
      </div>
    </>
  );
};
const Overview = () => {
  return (
    <>
      <Layout />
      <div>overview component.</div>
    </>
  );
};
const Library = () => {
  return (
    <>
      <Layout />
      <div>library component</div>
    </>
  );
};
// const Overview = lazy(() => import("./Containers/Overview"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/library" element={<Library />} />
        {/* <Route path="/settings" element={<Settings/>}/> */}
      </Routes>
    </>
  );
};
