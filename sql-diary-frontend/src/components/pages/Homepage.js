import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import BURDEN from "../photos/aaron-burden-xG8IQMqMITM-unsplash.jpg";
import { API_URL } from '../../config.json';
import axios from 'axios';

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI3OTk0NjA3LCJleHAiOjE2Mjg1OTk0MDd9.lNZ4XxRrOlEdDnQOsl4PhE6JrMLnCDmNXbMDx6rBMag';

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}/blogs`);
      setBlogs(res.data);
      console.log(res.data[0].userId);
      setLoading(false);
    }

    fetchBlogs();
  }, [])

  return (
    <Fragment>
      <header id="home-heading">
        <div className="heading-photo">
          <div className="home-inner container  pt-5">
            <div className="row">
            <Col md={12}>
            <h1  className="display-4 text-white pt-5">
                  Blog Website: <strong>Create</strong>, <strong>share</strong>, and <strong>tell</strong> your story
                </h1>
            </Col>
              <Col md={8}  className="d-block text-white">
                <div className="d-flex pt-5">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-pencil-alt fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Create an account to share your blogs 
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-pencil-alt fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Share your blogs to facebook to connect it with friends on social media
                  </div>
                </div>
                <div className="d-flex">
                  <div className="p-4 align-self-start">
                    <i className="fas fa-pencil-alt fa-2x"></i>
                  </div>
                  <div className="p-4 align-self-end">
                  Tell your unique story to the world.
                  </div>
                </div>
              </Col>
              <Col md={4} className="img-fluid d-none d-lg-block pt-5">
              <img src={BURDEN} alt="" style={{ width: '500px'}}></img>
              </Col>
            </div>
          </div>
        </div>
      </header>

      {/* Latest blogs will go here with a limit of 3-5 */}
      <section className="bg-dark" id="latest-blogs-section">
        <Container className="pt-5 pb-5">
        <hr style={{ color: '#fff'}}/>
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-center text-info">Latest Blogs</h1>
            </Col>
            {blogs.map((blog, idx) => (
              <Col key={idx} md={3} className="pb-2">
              <Card style={{ width: "18rem" }} className="text-center bg-secondary mx-auto">
                <Card.Img
                  variant="top"
                  src={blog.imageUrl}
                  // style={{ width: '300px', height: '300px'}}
                />
                <Card.Body>
                  <Card.Title className='text-info'>{blog.title}</Card.Title>
                  <Card.Text className='text-white'>
                    Posted by {blog.userId.name}
                  </Card.Text>
                  <Button variant="info" className="rounded-pill">
                    Check it out!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section with fontawesome stuffs */}
      <section id="home-fontawesome" className="bg-dark text-white">
        <Container className="pt-4 pb-4">
        <hr style={{ color: '#fff'}}/>
          <Row className="pt-4">
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
      <section id="about" className="pt-5 bg-dark pb-5">
        <Container>
        <hr style={{ color: '#fff'}}/>
          <Row>
            <Col md={12}>
              <h1 className="display-4 text-center text-white">About</h1>
            </Col>
            <Col md={12}>
              <p className="text-white">
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
      <hr style={{ color: '#fff'}}/>
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
