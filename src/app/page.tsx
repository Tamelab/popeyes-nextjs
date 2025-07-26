'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import './style.css';

const popeyesItems = [
  {
    title: 'Spicy Chicken Sandwich',
    description: 'Crispy, juicy, and spicy!',
    image: '/images/sando.jpg',
  },
  {
    title: 'Cajun Fries',
    description: 'Golden fries with Cajun seasoning.',
    image: '/images/strips.jpg',
  },
  {
    title: 'Biscuits',
    description: 'Buttery, warm, and flaky biscuits.',
    image: '/images/biscuits.jpg',
  },
];

const Home = () => (
  <main>
    <Container className="text-center my-5">
      <h2 className="mb-4">Try our crowd favorites</h2>
      <Row>
        {popeyesItems.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="menu-image"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </main>
);

export default Home;

