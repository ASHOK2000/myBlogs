import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import initialCards from "./../data/allBlog.TitleData";

export default function TopThreeBlog() {
  const [cards, setCards] = useState(initialCards);

  const [visibleCards, setVisibleCards] = useState(3);
  const loadMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  return (
    <Container>
      <div className="mt-5 ">
        <Container>
          <Row>
            {cards.slice(0, visibleCards).map((card) => (
              <Col key={card.id} lg={4} md={6} sm={12} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={card.imageSrc} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Button variant="primary">Read More</Button>
                    <p className="mt-2">Author: {card.authorName}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {visibleCards < cards.length && (
            <div className="text-center mt-4 mb-5">
              <Button onClick={loadMore} variant="primary">
                Load More
              </Button>
            </div>
          )}
        </Container>
      </div>
    </Container>
  );
}
