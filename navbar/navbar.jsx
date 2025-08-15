import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar as ReactNavbar, Container, Offcanvas, Button } from 'react-bootstrap';
import './style2.css'; // Assuming you have this CSS file
import reactDOM from "react-dom";

function CustomNavbar() {
  return (
    <ReactNavbar bg="dark" variant="dark" expand={false} fixed="top">
      <Container fluid>
        <ReactNavbar.Brand href="#">Offcanvas dark navbar</ReactNavbar.Brand>
        <ReactNavbar.Toggle aria-controls="offcanvasDarkNavbar" />
        <Offcanvas
          show={false} // Controlled by Navbar.Toggle
          id="offcanvasDarkNavbar"
          placement="end"
          bg="dark"
          className="text-bg-dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="list-unstyled">
              <li><span className="animated-text">abc</span></li>
              <li><span className="animated-text">abc</span></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </ReactNavbar>
  );
}

export default CustomNavbar;