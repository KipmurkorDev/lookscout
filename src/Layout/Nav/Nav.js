import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className='pb-0'>
            <Container fluid className='nav-custom'>
                <Navbar.Brand as={Link} to="/" className='text-white fs-4'>Lookscout</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto font-weight-bold nav-space  nav-left">
                        <Nav.Link as={Link} to="/" className='text-white' >Home</Nav.Link>
                        <Nav.Link as={Link} to="/" className='text-white'>Our Products</Nav.Link>
                        <NavDropdown title={<span className="text-light my-auto">Resources</span>}>
                            <NavDropdown.Item as={Link} to="/">Resource one </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">  Resource Two</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Resource Three</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/" className='text-white'>Contacts</Nav.Link>
                    </Nav>
                    <Nav className='nav-space  nav-left'>
                        <Nav.Link as={Link} to="/" className='text-white'>Log in</Nav.Link>
                        <Nav.Link as={Button} to="/" className='text-white' style={{ backgroundColor: "#437EF7" }}>Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar