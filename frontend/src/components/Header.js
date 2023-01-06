import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><i className="fas fa-building-columns"></i>&ensp;<i class="fa-solid fa-n"></i><i class="fa-light fa-e"></i><i class="fa-solid fa-o"></i>&ensp;<i class="fa-solid fa-b"></i>ank</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/client'>
                                <Nav.Link ><i className="fas fa-user"></i> Client </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/compte'>
                                <Nav.Link ><i className="fas fa-money-check-dollar"></i> Compte </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header