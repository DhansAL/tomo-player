import {  Nav, Navbar } from "solid-bootstrap";
import { Component } from "solid-js";

export const Header: Component = () => {
  //TODO: make an env file and put production|dev thingy and make a config folder in backend for that
  return (
    <>
    <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">🍤 tomoplayerV2 | DEV</Navbar.Brand>
                
            </Navbar>
    </>
  );
};
