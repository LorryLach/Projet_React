import { Navbar, Container, Nav } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">MyShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <HeaderCartButton onClick={onShowCart} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;