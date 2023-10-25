import React from "react";
import "./navbar.css"
import CartWidget from "../CartWidget/Cartwidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#headphones">Auriculares</Nav.Link>
            <Nav.Link href="#monitors">Monitores</Nav.Link>
            <Nav.Link href="#mouses">Mouses</Nav.Link>
            <Nav.Link href="#keyboards">Teclados</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CartWidget/>
        </>
    )
}

export default NavBar;