import { useState } from "react";
import {
  Navbar as ReactNavbar,
  Container,
  Offcanvas,
} from "react-bootstrap";
import "./style2.css";

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
        <Offcanvas.Title style={{fontSize:"3rem",fontWeight:"bold"}}>tedx</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-unstyled">
          <li><a className="animated-text" href="">Home</a></li>
          <li><a className="animated-text">About us</a></li>
          <li><a className="animated-text">Sponsor</a></li>
          <li><span className="animated-text">Team</span></li>
          <li><span className="animated-text">Speakers</span></li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  </Container>
</ReactNavbar>

  );
}

export default CustomNavbar;
