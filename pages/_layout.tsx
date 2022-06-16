import Head from "next/head";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";

type Props = {
    title?: string
    children: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
    return (
        <Container>
            <Head>
                <title>{ title || "ARC 852 Website" }</title>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>

                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#0e122e"/>
            </Head>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
            <main>{ children }</main>
            <footer className="cntr-footer">
                <a
                    href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{ ' ' }
                    <img src="/vercel.svg" alt="Vercel Logo" className="sml-logo"/>
                </a>
            </footer>
        </Container>
    )
}

export default Layout