import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar fixed="top" bg="transparent" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">SQL Diary</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;