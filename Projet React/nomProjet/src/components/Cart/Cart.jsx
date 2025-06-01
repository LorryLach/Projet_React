import { Modal, Button } from "react-bootstrap";
import { useCart } from "./CartContext.jsx";

const CartModal = ({ show, onClose }) => {
  const { cart, dispatch } = useCart();

  // Calcul du montant total du panier
  const totalAmount = cart.reduce((acc, item) => acc + item.amount * item.price, 0);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Votre panier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <strong>{item.name}</strong> — {item.amount} pcs — {item.amount * item.price} €
                </div>
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>
                  🗑
                </Button>
              </div>
            ))}
            <hr />
            <div className="text-end">
              <strong>Montant total :</strong> {totalAmount.toFixed(2)} €
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;