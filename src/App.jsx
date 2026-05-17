import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

import HomePage          from './pages/HomePage';
import ProductsPage      from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FavoritesPage     from './pages/FavoritesPage';
import AboutPage         from './pages/AboutPage';
import ContactPage       from './pages/ContactPage';

export default function App() {
  const [cartOpen,  setCartOpen]  = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  /* Cart */
  const addToCart = (product) =>
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });

  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  /* Favorites */
  const toggleFavorite = (product) =>
    setFavorites(prev =>
      prev.find(p => p.id === product.id)
        ? prev.filter(p => p.id !== product.id)
        : [...prev, product]
    );

  const isFav = (id) => favorites.some(p => p.id === id);

  const shared = { cartItems, addToCart, favorites, isFav, onToggleFav: toggleFavorite };

  return (
    <>
      <Header
        cartCount={cartCount}
        favCount={favorites.length}
        onCartToggle={() => setCartOpen(o => !o)}
      />

      <Routes>
        <Route path="/"            element={<HomePage          {...shared} />} />
        <Route path="/products"    element={<ProductsPage      {...shared} />} />
        <Route path="/product/:id" element={<ProductDetailPage {...shared} />} />
        <Route path="/favorites"   element={<FavoritesPage     {...shared} />} />
        <Route path="/about"       element={<AboutPage />} />
        <Route path="/contact"     element={<ContactPage />} />
      </Routes>

      <Footer />

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQty={updateQty}
        />
      )}
    </>
  );
}
