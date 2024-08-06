import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { numberWithComas } from "../utils/utils";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
}) => {
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
              <Form.Label>Total Harga</Form.Label>
              <p>
                <strong>
                  Rp. {numberWithComas(keranjangDetail.total_harga)}
                </strong>
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button variant="primary" size="sm" className="me-2">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button variant="primary" size="sm" className="ms-2">
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="keterangan"
                placeholder="Contoh: Pedas, Nasi Setengah, dst"
                value={keterangan}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan
            </Button>
          </Form>
        ) : (
          "kosong"
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalKeranjang;
