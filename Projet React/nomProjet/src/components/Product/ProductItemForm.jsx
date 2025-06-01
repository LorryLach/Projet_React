import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Alert, Button } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/product/${id}`);
        setProduct(response.data.product);
      } catch (err) {
        setError("Produit introuvable ou erreur serveur.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spinner animation="border" className="d-block mx-auto my-5" />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!product) {
    return <Alert variant="danger">Produit introuvable.</Alert>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={product.images}
        alt={product.name}
        style={{ maxWidth: "200px", height: "auto" }}
      />
      <p className="mt-3"><strong>Prix :</strong> {product.price} €</p>
      <p><strong>Description :</strong> {product.description}</p> {/* Utilisation de descriptions */}
      <Button variant="secondary" as={Link} to="/">
        Retour à l’accueil
      </Button>
    </div>
    
  );
};

export default ProductDetail;