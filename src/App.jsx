import React from 'react';
import './App.css';

import Product from './components/Product/Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>
              Ciao! My name is Alessandro. I help teams to define and deliver
              impactful products.
            </h1>
            <h3>Product owner & expert</h3>
          </Col>
        </Row>
        <Row>
          <h3>Where do I thrive?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi blanditiis in aspernatur assumenda maxime voluptate debitis
            laborum, delectus suscipit eaque, ea temporibus dicta non inventore
            reprehenderit nam reiciendis minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi blanditiis in aspernatur assumenda maxime voluptate debitis
            laborum, delectus suscipit eaque, ea temporibus dicta non inventore
            reprehenderit nam reiciendis minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            animi blanditiis in aspernatur assumenda maxime voluptate debitis
            laborum, delectus suscipit eaque, ea temporibus dicta non inventore
            reprehenderit nam reiciendis minus.
          </p>
        </Row>
        <h3>Selected works</h3>
        <Row>
          <Col>
            <Product
              title="Smartify"
              skills="Business Analysis, Requirements"
            />
          </Col>
          <Col>
            <Product
              title="Smartify"
              skills="Business Analysis, Requirements"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Product
              title="Smartify"
              skills="Business Analysis, Requirements"
            />
          </Col>
          <Col>
            <Product
              title="Smartify"
              skills="Business Analysis, Requirements"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
