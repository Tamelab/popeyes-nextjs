'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Search, PersonFill, Cart } from 'react-bootstrap-icons';

const NavBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Popeyes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/menu">Menu</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/cart"><Cart /></Nav.Link>
          <Nav.Link href="/search"><Search /></Nav.Link>
          <Nav.Link href="/signin"><PersonFill /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
