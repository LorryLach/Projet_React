// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CartProvider, useCart, cartReducer } from '../components/Cart/CartContext.jsx';
import HeaderCartButton from '../components/Layout/HeaderCartButton.jsx';
import { useEffect } from 'react';


describe('Test du panier', () => {
  it('ajoute un nouvel article au panier', () => {
    const initialState = [];
    const action = {
      type: 'ADD',
      payload: { id: 1, name: 'Produit', price: 10, amount: 2 },
    };
    const result = cartReducer(initialState, action);
    expect(result).toHaveLength(1);
    expect(result[0].amount).toBe(2);
  });

  it("augmente la quantité si l'article existe déjà", () => {
    const initialState = [{ id: 1, name: 'Produit', price: 10, amount: 2 }];
    const action = {
      type: 'ADD',
      payload: { id: 1, name: 'Produit', price: 10, amount: 3 },
    };
    const result = cartReducer(initialState, action);
    expect(result).toHaveLength(1);
    expect(result[0].amount).toBe(5);
  });

  it('retire un article du panier', () => {
    const initialState = [{ id: 1, name: 'Produit', price: 10, amount: 2 }];
    const action = { type: 'REMOVE', payload: 1 };
    const result = cartReducer(initialState, action);
    expect(result).toHaveLength(0);
  });
});


describe('Test du panier dans le Header', () => {
  const TestComponent = () => {
    const { dispatch } = useCart();
    useEffect(() => {
      dispatch({ type: 'ADD', payload: { id: 1, name: 'A', price: 5, amount: 2 } });
      dispatch({ type: 'ADD', payload: { id: 2, name: 'B', price: 8, amount: 3 } });
    }, [dispatch]);
    return <HeaderCartButton onClick={() => {}} />;
  };

  it("affiche le nombre total d'articles dans le panier", async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );
    expect(await screen.findByText('5')).toBeInTheDocument();
    expect(screen.getByText(/Votre panier/i)).toBeInTheDocument();
  });
});
