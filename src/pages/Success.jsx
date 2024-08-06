import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="images/sukses.png" width="500" alt="sukses" />
        <h2>Sukses Pesan</h2>
        <p>Terimakasih Sudah Memesan</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
