import { Button, Badge } from "react-bootstrap";
import { useCart } from "../Cart/CartContext.jsx";

const HeaderCartButton = ({ onClick }) => {
  const { cart } = useCart();

  // Calcul total d'articles dans le panier
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Button variant="outline-light" onClick={onClick}>
      Votre panier <Badge bg="light" text="dark">{totalItems}</Badge>
    </Button>
  );
};

export default HeaderCartButton;
