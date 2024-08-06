import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import { Home, Success } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponents />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sukses" element={<Success />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
