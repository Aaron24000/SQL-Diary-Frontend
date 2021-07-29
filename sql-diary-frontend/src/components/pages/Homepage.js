import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <header id="home-heading">
        <div className="heading-photo text-white">
          <Container className="pt-5">
            <Row>
              <Col className="text-center">
                <h1>Homepage</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      {/* Latest blogs will go here with a limit of 3-5 */}
      <section className="bg-light" id="latest-blogs-section">
        <Container className="pt-5">
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-center">Latest Blogs</h1>
            </Col>
            <Col md={3} className="pb-2">
              <Card style={{ width: "18rem" }} className="text-center mx-auto pb-2">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/286x180"
                />
                <Card.Body>
                  <Card.Title>Blog Title</Card.Title>
                  <Card.Text>
                    Posted by the person who created this, ofc
                  </Card.Text>
                  <Button variant="primary">Check it out!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="pb-2">
              <Card style={{ width: "18rem" }} className="text-center mx-auto">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/286x180"
                />
                <Card.Body>
                  <Card.Title>Blog Title</Card.Title>
                  <Card.Text>
                    Posted by the person who created this, ofc
                  </Card.Text>
                  <Button variant="primary">Check it out!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="pb-2">
              <Card style={{ width: "18rem" }} className="text-center mx-auto">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/286x180"
                />
                <Card.Body>
                  <Card.Title>Blog Title</Card.Title>
                  <Card.Text>
                    Posted by the person who created this, ofc
                  </Card.Text>
                  <Button variant="primary">Check it out!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="pb-2">
              <Card style={{ width: "18rem" }} className="text-center mx-auto">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/286x180"
                />
                <Card.Body>
                  <Card.Title>Blog Title</Card.Title>
                  <Card.Text>
                    Posted by the person who created this, ofc
                  </Card.Text>
                  <Button variant="danger">Check it</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section with fontawesome stuffs */}
    </Fragment>
  );
};

export default Homepage;
