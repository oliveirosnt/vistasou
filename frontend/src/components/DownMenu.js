import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function DownMenu() {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">SOU.</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">Sobre nós</Nav.Link>
        </Nav>
        </Navbar>
    )
}

export default DownMenu;