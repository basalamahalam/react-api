import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponents from "./components/NavbarComponents";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
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
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
