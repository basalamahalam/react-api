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
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan,
}) => {
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
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga</Form.Label>
              <p>
                <strong>Rp. {numberWithComas(totalHarga)}</strong>
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="me-2"
                onClick={kurang}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button
                variant="primary"
                size="sm"
                className="ms-2"
                onClick={tambah}
              >
                <FontAwesomeIcon icon={faPlus} />
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
                onChange={changeHandler}
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
        <Button
          variant="danger"
          onClick={() => {
            hapusPesanan(keranjangDetail.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalKeranjang;
