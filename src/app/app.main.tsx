import React from "react";
import { Library } from "./containers/Library";
import { Overview } from "./containers/Overview";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Settings } from "./containers/Settings";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/"  element = {<Overview/>}/>
      <Route path="/library"  element ={<Library/>}/>
      <Route path="/settings"  element ={<Settings/>}/>
      </Routes>  
    </Router>
    </>
  );
};

export default App;
