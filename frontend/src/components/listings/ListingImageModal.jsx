import React from "react";
import { Modal } from "react-bootstrap";


export default function ListingImageModal({listing, showModal, handleClose}){
    
    return(
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {listing.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img
            src={listing.image}
            alt={listing.title}
            className="img-fluid"
            style={{ width:'100%'}}
            />
        </Modal.Body>
      </Modal>
    )
}