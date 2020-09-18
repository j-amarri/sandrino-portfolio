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
            <Navbar.Brand>Sandrino's website</Navbar.Brand>
            <Nav.Link>Recent works</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Navbar>
          <Row>
            <Col>
              <h1 className="intro-text">- ciao, my name is Alessandro.</h1>
              <h2 className="intro-subtext">
                I'm a product owner & expert based in Amsterdam, helping teams
                to define and deliver successful products.
              </h2>
            </Col>
          </Row>
        </section>
        <section className="showcase-section">
          <h3 className="section-title">Selected projects</h3>
          <Row>
            <Col className="product-card">
              <Product
                image="/ALDI.png"
                title="app/web ecommerce solution"
                skills="agile delivery, stakeholder management, roadmapping"
                description="New ecommerce proposition for global food and retail leader. The project was operated globally, with multiple teams involved and continuous delivery."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/MeBeSafe.png"
                title="MVP definition & validation"
                skills="MVP delivery, ideation, product strategy & definition"
                description="We worked with a leader in the utility sector to create a product to be validated with their users."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/JDE.png"
                title="MVP end-to-end"
                skills="Product ownership, agile delivery, requirements"
                description="Three months projects for a Dutch leader in the food & beverage sector, where we moved from initial concept idea to final delivery of functioning and testable product."
              />
            </Col>
          </Row>
          <Row>
            <Col className="product-card">
              <Product
                image="/seabury.png"
                title="Dashboard & data analysis"
                skills="Ideation & product mapping, agile delivery"
                description="Definition and delivery of a dashboard for a global leader in the airline sector, to better capitalise on their data."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/PLUS.png"
                title="PLUS app"
                skills="Data analysis, UX/UI improvements"
                description="Helped in the data analysis of their users behaviours, to define UX/UI improvements and have a better understanding of the blockers in their conversion funnel."
              />
            </Col>
            <Col className="product-card">
              <Product
                image="/smartify.jpg"
                title="Smartify app"
                skills="Business Analysis, requirements definition"
                description="Worked together with the initial team of Smartify, where I helped defining requirements and crafting the next items we would work on"
              />
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col>
              <h3 className="section-title">Where do I thrive?</h3>
            </Col>
            <Col>
              <h5>Product vision</h5>
              <p>
                - defining simply crafted products, that focus on the right
                action and have user at their forefront
              </p>
              <h5>Product delivery</h5>
              <p>
                - working closely to each and every member of the team to define
                and ship great products
              </p>
              <h5>Project untangling</h5>
              <p>
                - I enjoy the tension of having a blank canvas and starting a
                project from scratch. Complex environments with multiple
                stakeholders and different expertise is where I thrive.
              </p>
              <h5>MVP end-to-end</h5>
              <p>
                I love MVPs due to their fast paced nature, and the skillset
                required. I can successfully lead the end to end process.
              </p>
            </Col>
          </Row>
        </section>
        <section className="about-section">
          <h3 className="section-title">About</h3>
        </section>
      </Container>
    </div>
  );
}

export default App;
