import { Alert } from "solid-bootstrap";
import { Component } from "solid-js";

export const Header: Component = () => {
  //TODO: make an env file and put production|dev thingy and make a config folder in backend for that
  return (
    <>
    <Alert variant="primary" dismissible transition>
              This is a "primary" alert—check it out!{" "}
            </Alert>
    </>
  );
};
