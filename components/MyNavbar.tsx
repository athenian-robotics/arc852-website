import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";
import Link from "next/link";

const MyNavbar = () => {
    return (
        <Navbar variant="dark" className="navbar-arcblue" expand="lg">
            <Container>
                <Link href="/">
                    <Navbar.Brand as="a" className="brand-logotype">
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
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/"><Nav.Link as="a">Home</Nav.Link></Link>
                        <Link href="/about"><Nav.Link as="a">About</Nav.Link></Link>
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