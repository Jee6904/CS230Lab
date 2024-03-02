import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';






function Cards() {
  return (
    <CardGroup className="mx-2">
      <Card text="white" bg="primary" className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Card 01</Card.Title>
          <Card.Text className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamgi
          </Card.Text>
        </Card.Body>
      </Card>
      <Card text="white" bg="danger" className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Card 02</Card.Title>
          <Card.Text className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Card.Text>
        </Card.Body>
      </Card>
      <Card text="white" bg="success" className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Card 03</Card.Title>
          <Card.Text className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Cards;
