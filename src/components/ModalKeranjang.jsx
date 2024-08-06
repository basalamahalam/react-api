import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { numberWithComas } from "../utils/utils";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail }) => {
  // Cek apakah keranjangDetail dan keranjangDetail.product ada
  const hasKeranjangDetail = keranjangDetail && keranjangDetail.product;

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {hasKeranjangDetail ? (
            <>
              {keranjangDetail.product.nama}
              <strong>
                {" "}
                (Rp. {numberWithComas(keranjangDetail.product.harga)})
              </strong>
            </>
          ) : (
            "kosong"
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {hasKeranjangDetail ? (
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
