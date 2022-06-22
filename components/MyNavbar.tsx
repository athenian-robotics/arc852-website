import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";

const MyNavbar = () => {
    return (
        <Navbar variant="dark" className="navbar-arcblue" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="brand-logotype">
                    <img
                        alt=""
                        src="/favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {
                        ' ATHEnIAN' // TODO: is this the right stupid capitalization?
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar