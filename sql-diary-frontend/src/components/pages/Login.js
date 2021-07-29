import {
  Navbar,
  Container,
  Col,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
  Row,
  Card,
} from "react-bootstrap";

const Login = () => {
  return (
    <section id="login">
      <Container className="position-absolute top-50 start-50 translate-middle">
        <Row>
          <Col>
            <Card className="bg-secondary">
              <Card.Header>
                <h3 className="text-white">Sign In</h3>
              </Card.Header>
              <Card.Body className="bg-secondary">
                <Form>
                  <Form.Group>
                    <Form.Label className="text-white">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-white">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <br />
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-white">
                      Passwords are encrypted to ensure optimal security.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="info" type="submit">
                    Submit
                  </Button>
                  <div className="justify-content-end text-white">
                      <p>Don't remember your password? <a className="text-info" href="/forgot-password">Forgot password</a></p>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
