import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithComas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const TotalBayar = (props) => {
  const navigate = useNavigate();

  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: props.keranjangs,
    };

    axios
      .post(API_URL + "pesanans", pesanan)
      .then((res) => {
        navigate("/sukses");
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  const totalBayar = props.keranjangs.reduce(
    (result, item) => result + item.total_harga,
    0
  );

  return (
    <div className="fixed-bottom">
      <Row>
        <Col md={{ span: 3, offset: 9 }} className="px-4">
          <h4>
            Total Bayar:{" "}
            <strong className="float-right mr-2">
              Rp. {numberWithComas(totalBayar)}
            </strong>
          </h4>
          <Button
            variant="primary"
            className="w-100 mt-2 mr-2"
            size="lg"
            onClick={() => submitTotalBayar(totalBayar)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <strong>BAYAR</strong>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TotalBayar;
