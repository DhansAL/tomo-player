import { Route, Routes } from "solid-app-router";

import { Link } from "solid-app-router";
/**
 * 
 * @bug - Solid router seems to be not working as it is supposed to be with electron
 * 
 * due to this reason the build will be shifted back to react+electron 
 * and wont return in any time soon. 
 * 
 * tbh i am disappointed :(
 */

export const App = () => {
  const Nav = () => {
    return (
      <>
      <div style={{display:"flex"}}>
      <Link style={{"margin-right":"10px"}} href="/">homepage</Link>
      <Link style={{"margin-right":"10px"}} href="/library">new component</Link>
      </div> 
      </>
    );
  };
  const Homepage = () => {
    return (
      <>
        <div>homepage component.</div>
      </>
    );
  };
  const Component1 = () => {
    return (
      <>
        <div>new component.</div>
      </>
    );
  };
  return (
    <>
    <Nav/>
      <Routes>
        <Route  path="/" element={<Homepage />} />
        <Route path="/library" element={<Component1 />} />
      </Routes>
    </>
  );
};
