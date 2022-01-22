import { Navbar } from "solid-bootstrap";
import { Component } from "solid-js";

export const Header: Component = () => {
  //TODO: make an env file and put production|dev thingy and make a config folder in backend for that
  return (
    <>
      <div style={{ background: "#2a3545", overflow: "hidden" }}>
        <Navbar class="mw-100" >
          <Navbar.Brand style={{ color: "white" }} href="#">🍜 Tomoplayer</Navbar.Brand>
        </Navbar>
      </div>

    </>
  );
};
