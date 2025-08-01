'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

const menu = [
  { name: 'Chicken Sandwich', price: '$4.99', image: '/images/chicken-sandwich.jpg' },
  { name: 'Spicy Tenders', price: '$6.99', image: '/images/spicy-tenders.jpg' },
  { name: 'Cajun Fries', price: '$2.99', image: '/images/cajun-fries.jpg' },
];

const PopeyesMenu = () => (
  <Container className="py-5">
    <h1 className="text-center mb-4">Popeyes Menu</h1>
    <Row>
      {menu.map(item => (
        <Col md={4} key={item.name}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default PopeyesMenu;
