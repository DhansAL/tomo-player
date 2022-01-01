import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
//TODO: make an env file and put production|dev thingy and make a config folder in backend for that
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
        <Navbar.Brand href="#">TomoPlayer |dev </Navbar.Brand>
       
    </Navbar>
  );
}
