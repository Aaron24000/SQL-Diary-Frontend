import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Fragment } from "react";
import BURDEN from "../photos/aaron-burden-xG8IQMqMITM-unsplash.jpg";

const Homepage = () => {
  return (
    <Fragment>
      <header id="home-heading">
        <div className="heading-photo">
          <div className="home-inner container pt-5">
            <div className="row">
            <Col md={12}>
            <h1  className="display-4 text-white pt-5">
                  Blog Website: <strong>Create</strong>, <strong>share</strong>, and <strong>tell</strong> your story
                </h1>
            </Col>
              <Col md={8}  className="d-block text-white">
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  See all of the conferences across the NCAA
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Search stadiums across 50 states and 30+ conferences!
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-chart-bar fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Get team info on individual teams, including team logos!
                  </div>
                </div>
              </Col>
              <Col md={4} className="img-fluid d-none d-lg-block pt-5">
              <img src={BURDEN} style={{ width: '500px'}}></img>
              </Col>
            </div>
          </div>
        </div>
      </header>

      {/* Latest blogs will go here with a limit of 3-5 */}
      <section className="bg-light" id="latest-blogs-section">
        <Container className="pt-5 pb-5">
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-center">Latest Blogs</h1>
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
                  <Button variant="primary" className="rounded-pill">
                    Check it out!
                  </Button>
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
                  <Button variant="primary" className="rounded-pill">
                    Check it out!
                  </Button>
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
                  <Button variant="primary" className="rounded-pill">
                    Check it out!
                  </Button>
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
                  <Button variant="danger" className="rounded-pill">
                    Check it
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section with fontawesome stuffs */}
      <section id="home-fontawesome" className="bg-dark text-white">
        <Container className="pt-4 pb-4">
          <Row>
            <Col md={4} className="text-center pb-5">
              <i class="fas fa-blog fa-3x p-2"></i>
              <h3>Create your blog</h3>
              <p>Create your blog and share your story to the world</p>
            </Col>
            <Col md={4} className="text-center pb-5">
              <i class="fab fa-facebook fa-3x p-2"></i>
              <h3>Share to Facebook</h3>
              <p>Share your story to facebook to tell your tale to friends.</p>
            </Col>
            <Col md={4} className="text-center">
              <i class="fas fa-envelope fa-3x p-2"></i>
              <h3>Get notified</h3>
              <p>
                Using the Twilio email API, you'll get emails when a new blog is
                posted.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="pt-5 bg-light pb-5">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-center">About</h1>
            </Col>
            <Col md={12}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                mollis lorem nisi. Suspendisse pretium est ac mi dignissim
                finibus. Maecenas vestibulum convallis hendrerit. Quisque
                vulputate accumsan nibh, et commodo lacus tincidunt mattis.
                Fusce molestie molestie nibh, feugiat elementum nibh rutrum id.
                Sed at nisl vestibulum, rhoncus sem eget, aliquam lacus.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer id="main-footer" class="text-center text-white bg-dark p-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <p>
              Created by <a rel="noreferrer" href="http://www.aaronnobles.com" target="_blank">Aaron Nobles</a>
            </p>
          </div>
        </div>
      </div>
    </footer>

    </Fragment>
  );
};

export default Homepage;
