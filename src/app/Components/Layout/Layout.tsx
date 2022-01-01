/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../Header';
import Nav from 'react-bootstrap/Nav'
import {NavLink} from 'react-router-dom';

export default function Layout() {

  return (
<>
<Header/>
<Nav  as="ul">
  <Nav.Item as="li"  >
    <NavLink to ="/">overview</NavLink>
  </Nav.Item >
  <Nav.Item as="li" >
    <NavLink to ="/library">library</NavLink>
  </Nav.Item>
  <Nav.Item as="li" >
    <NavLink to ="/settings">settings</NavLink>
  </Nav.Item>
</Nav>
</>
      
  );
}
