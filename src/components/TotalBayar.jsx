import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithComas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class TotalBayar extends Component {
  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
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
            <Button variant="primary" className="w-100 mt-2 mr-2" size="lg">
              <FontAwesomeIcon icon={faShoppingCart} />
              <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
