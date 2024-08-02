import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import Menus from "./components/Menus";
import Hasil from "./components/Hasil";
import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        // console.log(response);
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    const { menus } = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
