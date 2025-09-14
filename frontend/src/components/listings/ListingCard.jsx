import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListingImageModal from './ListingImageModal';
import { useState } from 'react';

function ListingCard({ listing }) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = ()=> setShowModal(true);
  const handleClose = ()=> setShowModal(false)
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={listing.image} style={{ cursor: 'pointer'}} onClick={handleClick}/>
      <Card.Body>
        <Card.Title>{listing.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <ListingImageModal 
      showModal={showModal}
      listing={listing}
      handleClose={handleClose}
    
    />
    </>
  );
}

export default ListingCard;