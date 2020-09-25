import React from 'react';
import './App.css';

import Product from './components/Product/Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Container>
        <section className="intro-section">
          <Navbar className="navbar">
            <Nav>
              <Link
                className="navbar-link underline-text"
                activeClass="active"
                to="#"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                sandrino
              </Link>
            </Nav>
            <div className="navbar-links">
              <Nav>
                <Link
                  className="navbar-link underline-text"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  projects
                </Link>
              </Nav>
              <Nav>
                <Link
                  className="navbar-link underline-text"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  about
                </Link>
              </Nav>
            </div>
          </Navbar>
          <Row>
            <Col>
              <h1 className="intro-text">
                - ciao, my name is{' '}
                <span className="underline-text">Alessandro</span>.
              </h1>
              <h2 className="intro-subtext">
                I'm a{' '}
                <span className="underline-text">product owner & expert</span>{' '}
                based in Amsterdam, helping teams to define and build successful
                products.
              </h2>
            </Col>
          </Row>
        </section>
        <section id="projects" className="showcase-section">
          <h3 className="section-title">
            <span className="underline-text">Recent projects</span>
          </h3>
          <Row>
            <Col className="product-card">
              <Product
                image="/aldi-dark.png"
                title="app/web ecommerce solution"
                skills="agile delivery, detailed requirements, roadmapping"
                description="New ecommerce proposition for global food and retail leader. The project was ran globally, with multiple teams involved and many stakeholders, where I was managing the app team."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/mebesafe-dark.png"
                title="MVP definition & validation"
                skills="MVP delivery, ideation, product strategy & definition"
                description="In the course of 3 months, we went from ideation to a production application to be validated with users. Project was operated for a leader in the utility sector."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/jde-dark.png"
                title="MVP end-to-end"
                skills="product ownership, product ideation & requirements"
                description="Three months projects for a Dutch leader in the food & beverage sector, where we moved from initial concept idea to final delivery of a functioning and testable product."
              />
            </Col>
          </Row>
          <Row>
            <Col className="product-card">
              <Product
                image="/seabury-dark.png"
                title="Dashboard & data analysis"
                skills="product mapping, scope management & UX/UI ideation"
                description="Definition and delivery of an analytics dashboard for a global player in the airline sector, to better capitalise on their data."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/plus-dark.png"
                title="PLUS app"
                skills="data analysis, UX/UI suggestions & improvements"
                description="I was in charge of the data analysis and understanding of users' behaviours, to define UX/UI improvements and improve their conversion funnel."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/smartify-dark.png"
                title="Smartify app"
                skills="business Analysis, requirements definition & market research"
                description="I helped shaping the requirements of the app, while conducting market research and worked closely to UX/UI to define new features."
              />
            </Col>
          </Row>
        </section>
        <section className="skills-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="section-title">
                <span className="underline-text">What do I thrive at?</span>
              </h3>
            </Col>
            <Col xs={12} md={6}>
              <h5>Linking Business, Design, Technology</h5>
              <p>
                Discovering and delivering outstanding digital products, by
                linking and being able to talk Business, Design and Technology.
              </p>
              <h5>Product vision</h5>
              <p>
                Helping to shape Product Vision and Strategy taking a
                human-centred approach with user research, prototyping and
                experimentation
              </p>
              <h5>Product delivery</h5>
              <p>
                Acting as Product Owner in Scrum teams and liaising with client
                stakeholders, UX designers, software engineers and QA testers
              </p>
              <h5>MVP end-to-end</h5>
              <p>
                I love MVPs due to their fast paced nature, and the skillset
                required. I can successfully lead the end to end process.
              </p>
            </Col>
          </Row>
        </section>
        <section className="coding-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="section-title">
                <span className="underline-text">Coding</span>
              </h3>
            </Col>
            <Col xs={12} md={6}>
              <p>
                In order to keep my left brain going, and be up to date with the
                state-to-art technologies, I recently picked up development. I
                enjoy coding to turn ideas into motion. Some of the tools that I
                have been using: React, Express JS, Node JS, mongoDB,
                Javascript, HTML, CSS, GitHub.
              </p>
              <p>Contact me for collaborating!</p>
              <a
                href="https://github.com/j-amarri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>github</button>
              </a>
            </Col>
          </Row>
        </section>
        <section id="about" className="about-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col xs={12} md={6}>
              <h3 className="section-title">
                <span className="underline-text">About</span>
              </h3>
              <img
                className="about-picture"
                src="/sandrino.png"
                alt="sandrino"
              />
            </Col>
            <Col xs={12} md={6}>
              <p>
                My name is Alessandro Amarri, and I've been working as product
                owner for the last few years. I thrive at the intersection
                between Business, Design and Technology, by making links and
                having experience working with different professionals in those
                fields. I always try to improve team dynamics and ways of
                working, in order to enable the best possible communication. I'm
                truly convinced that it is a main driver of quality and
                motivation.
              </p>
              <p>
                I'm always available up to hear your story and how we could help
                eachtoher - drop me a line, or feel free to connect on LinkedIn!
              </p>
              <a
                href="https://www.linkedin.com/in/alessandroamarri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>LinkedIn</button>
              </a>
              <button>amarri.alessandro@gmail.com</button>
            </Col>
          </Row>
        </section>
        <footer>
          <hr />
          <p>
            made by <a href="https://github.com/j-amarri">@sandrino</a>
          </p>
        </footer>
      </Container>
    </div>
  );
}

export default App;
