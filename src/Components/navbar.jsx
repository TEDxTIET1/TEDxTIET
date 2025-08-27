import { useState } from "react";
import {
  Navbar as ReactNavbar,
  Container,
  Offcanvas,
} from "react-bootstrap";
import "./style2.css";
import { Link } from "react-router-dom";
// import HeroSection from "./HeroSection";
function CustomNavbar() {
  // state to control offcanvas visibility
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ReactNavbar bg="dark" variant="dark" expand={false} fixed="top" className="bg-transparent border-0 shadow-none">
      <Container fluid className="p-0 m-0">
        {/* Hide brand */}
        {/* <ReactNavbar.Brand href="#">Offcanvas dark navbar</ReactNavbar.Brand> */}

        {/* Only show toggle button */}
        <ReactNavbar.Toggle onClick={handleShow} className="ms-auto" />

        <Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasDarkNavbar"
          placement="end"
          className="text-bg-dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ fontSize: "3rem", fontWeight: "bold" }}>TEDX</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li><Link className="animated-text" to="/home" >Home</Link></li>
              <li><Link className="animated-text" to="/aboutus">About us</Link></li>
              <li><Link className="animated-text" to="/sponsor">Sponsor</Link></li>
              <li><Link className="animated-text" to="/team">Team</Link></li>
              <li><Link className="animated-text" to="/speakers">Speakers</Link></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </ReactNavbar>

  );
}

export default CustomNavbar;
