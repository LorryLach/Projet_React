import { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:3000/api/product?select=name,price,images,description");
        setProducts(response.data.products); 
      } catch (err) {
        setError("Le serveur ne répond pas. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Chargement des produits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="text-center my-4">
        {error}
      </Alert>
    );
  }

  return (
    <Row>
      {products.map((product) => (
        <Col key={product._id} md={6} className="mb-4">
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default Products;
