import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { numberWithComas } from "../utils/utils";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {keranjangDetail ? keranjangDetail.product.nama : "kosong"}
          <strong>
            {" "}
            (Rp. {numberWithComas(keranjangDetail.product.harga)})
          </strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {keranjangDetail ? (
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        ) : (
          "kosong"
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalKeranjang;
