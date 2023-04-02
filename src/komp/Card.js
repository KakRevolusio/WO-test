import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Card</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
