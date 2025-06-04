import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CapyShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Nos capys</Nav.Link>
          <Nav.Link href="/about">A propos de Nous</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <HeaderCartButton onClick={onShowCart} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;