import React from 'react';
import './App.css';

import Product from './components/Product/Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Container>
        <section className="intro-section">
          <Navbar className="navbar">
            <Navbar.Brand className="underline-text logo">
              sandrino
            </Navbar.Brand>
            <div className="navbar-links">
              <Nav.Link className="underline-text navbar-link">
                projects
              </Nav.Link>
              <Nav.Link className="underline-text navbar-link">about</Nav.Link>
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
                based in Amsterdam, helping teams to define and deliver
                successful products.
              </h2>
            </Col>
          </Row>
        </section>
        <section className="showcase-section">
          <h3 className="section-title">
            <span className="underline-text">Selected projects</span>
          </h3>
          <Row>
            <Col className="product-card">
              <Product
                image="/aldi-dark.png"
                title="app/web ecommerce solution"
                skills="agile delivery, stakeholder management, roadmapping"
                description="New ecommerce proposition for global food and retail leader. The project was operated globally, with multiple teams involved and continuous delivery."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/mebesafe-dark.png"
                title="MVP definition & validation"
                skills="MVP delivery, ideation, product strategy & definition"
                description="We worked with a leader in the utility sector to create a product to be validated with their users."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/jde-dark.png"
                title="MVP end-to-end"
                skills="Product ownership, agile delivery, requirements"
                description="Three months projects for a Dutch leader in the food & beverage sector, where we moved from initial concept idea to final delivery of functioning and testable product."
              />
            </Col>
          </Row>
          <Row>
            <Col className="product-card">
              <Product
                image="/seabury-dark.png"
                title="Dashboard & data analysis"
                skills="Ideation & product mapping, agile delivery"
                description="Definition and delivery of a dashboard for a global leader in the airline sector, to better capitalise on their data."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/plus-dark.png"
                title="PLUS app"
                skills="Data analysis, UX/UI improvements"
                description="Helped in the data analysis of their users behaviours, to define UX/UI improvements and have a better understanding of the blockers in their conversion funnel."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/smartify-dark.png"
                title="Smartify app"
                skills="Business Analysis, requirements definition"
                description="Worked together with the initial team of Smartify, where I helped defining requirements and crafting the next items we would work on"
              />
            </Col>
          </Row>
        </section>
        <section className="skills-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col>
              <h3 className="section-title">
                <span className="underline-text">What do I thrive at?</span>
              </h3>
            </Col>
            <Col>
              <h5>Product vision</h5>
              <p>
                Defining simply crafted products, that have users at their
                forefront, and focus on the right actions.
              </p>
              <h5>Product delivery</h5>
              <p>
                Working closely to each and every member of the team to define
                and ship great products. My knowledge of
              </p>
              <h5>MVP end-to-end</h5>
              <p>
                I love MVPs due to their fast paced nature, and the skillset
                required. I can successfully lead the end to end process.
              </p>
              <h5>Project untangling</h5>
              <p>
                I enjoy the tension of having a blank canvas and starting a
                project from scratch. Complex environments with multiple
                stakeholders and different expertise is where I thrive.
              </p>
            </Col>
          </Row>
        </section>
        <section className="coding-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col>
              <h3 className="section-title">
                <span className="underline-text">Coding</span>
              </h3>
            </Col>
            <Col>
              <p>
                In order to keep my left brain going, and keep myself up to date
                with technologies, I recently picked up development. I enjoy
                coding to turn ideas into motion. Some of the tools that I have
                been using: React, Express JS, Node JS.
              </p>
              <button>github</button>
            </Col>
          </Row>
        </section>
        <section className="about-section">
          <hr style={{ marginBottom: '30px' }} />
          <Row>
            <Col>
              <h3 className="section-title">
                <span className="underline-text">About</span>
              </h3>
              <img
                className="about-picture"
                src="/sandrino.png"
                alt="sandrino"
              />
            </Col>
            <Col>
              <p>
                My curiosity and experience in a wide range of disciplines gave
                me a unique insight in how to define, deliver, and ship a
                product, thourghout the entire lifecycle. My background allows
                me to understand the logic and why we are doing things, and my
                experience working closely to designers and developers, allows
                me to talk with the entire team, being able to push in the right
                direction and motivate the different members to make the best
                out of their talent!
              </p>
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
