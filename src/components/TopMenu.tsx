'use client';

import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar className="topmenu-navbar" expand="lg" variant="light">
    <Container>
      <Navbar.Brand href="/">Popeyes
      <div className="navbar-subtitle">Louisiana Chicken</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} href="/menu">
            Menu
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;

