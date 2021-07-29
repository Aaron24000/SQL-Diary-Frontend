import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" className="navigate">
      <Container>
        <Navbar.Brand className="text-info" href="/">SQL Diary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link className="text-info" href="/">Home</Nav.Link>
            <Nav.Link className="text-info" href="/blogs">Blogs</Nav.Link>
            <Nav.Link className="text-info" href="/login">Login</Nav.Link>
            <Nav.Link className="text-info" href="/register">Register</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search blogs..."
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
