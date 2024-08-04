import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import Menus from "./components/Menus";
import Hasil from "./components/Hasil";
import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";
import { API_URL } from "./utils/constants";
import axios from "axios";
import Swal from "sweetalert2";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryYangDipilih: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoryYangDipilih)
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

  changeCategory = (value) => {
    this.setState({
      categoryYangDipilih: value,
      menus: [],
    }),
      axios
        .get(API_URL + "products?category.nama=" + value)
        .then((res) => {
          // console.log(response);
          const menus = res.data;
          this.setState({ menus });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  };

  masukKeranjang = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };
          axios
            .post(API_URL + "keranjangs", keranjang)
            .then((res) => {
              Swal.fire({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang" + keranjang.product.nama,
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
              });
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        } else {
          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
              Swal.fire({
                title: "Sukses Masuk Keranjang",
                text: "Sukses Masuk Keranjang" + keranjang.product.nama,
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
              });
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    const { menus, categoryYangDipilih } = this.state;
    return (
      <div className="App">
        <NavbarComponents />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                categoryYangDipilih={categoryYangDipilih}
              />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
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
