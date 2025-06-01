import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useCart } from "../Cart/CartContext.jsx";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: Number(amount),
      },
    });
  };

  return (
    <Card className="h-100">
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.images}
          style={{ objectFit: "contain", height: "200px" }}
        />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/products/${product.id}`} className="text-decoration-none">
            {product.name}
          </Link>
        </Card.Title>
        <Card.Text>{product.price} €</Card.Text>
        <Form.Control
          type="number"
          min="1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-2"
        />
        <Button variant="primary" onClick={handleAdd}>
          Ajouter
        </Button>
      </Card.Body>
      <Card.Footer>
        <Link to={`/product/${product.id}`} className="btn btn-secondary">
          Voir details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;