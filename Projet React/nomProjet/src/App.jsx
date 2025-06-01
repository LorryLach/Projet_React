import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Product/Product";
import CartModal from "./components/Cart/Cart";
import ProductDetail from "./components/Product/ProductItemForm";
import NotFound from "./components/Product/NotFound";
import { CartProvider } from "./components/Cart/CartContext";





function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header onShowCart={() => setShowCart(true)} />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CartModal show={showCart} onClose={() => setShowCart(false)} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;