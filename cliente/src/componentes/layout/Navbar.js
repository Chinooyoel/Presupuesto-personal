import React from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarComponente = () => {
    return ( 
        <Navbar expand="lg" className="navbar-dark bg-azul">
            <Container>
                <Link to={'/'} className="h1 text-white">Presupuestar</Link>
                <Navbar.Toggle aria-controls="navbarToggler"/>

                <Navbar.Collapse className="justify-content-end" id="navbarToggler">
                    <Nav className="ms-auto mt-2 mt-lg-0 text-center">
                        <Nav.Item className="nav-item active">
                            <Link to={'/'} className="nav-link text-white">Inicio</Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Link to={'/listado'} className="nav-link text-white">Operaciones</Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                            <Button variant="outline-light">Cerrar sesion</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>   
            </Container> 
        </Navbar>
     );
}
 
export default NavbarComponente;