import { useState } from "react";
import "./App.css";
import ShopPage from "./components/ShopPage";
import BakeryPage from "./components/BakeryPage";
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

    if (window.location.pathname === "/shop") {
    return <ShopPage />;
  }
  if (window.location.pathname === "/bakery") {
  return <BakeryPage />;
}
  return (
    <div className="app">

      <Header onCartClick={() => setShowCart(true)} />

      {/* ================= SEARCH ================= */}
      <section className="search-section">

        <div className="search-box">

          <input
            type="text"
            placeholder="Search for products, brands, categories..."
          />

          <button>
            🔍 Search
          </button>

        </div>

      </section>


      {/* ================= MAIN ================= */}
      <main>

        {/* Hero */}
        <section className="hero">

          <div className="hero-content">

            <p className="hero-small-title">
              JIRANI MART
            </p>

            <h1>
              Weekly Deals
            </h1>

            <p className="hero-description">
              Save up to 30% on selected items
            </p>

            <button className="hero-button">
              View Offers →
            </button>

          </div>

          {/* Slider dots */}
          <div className="slider-dots">
            <span></span>
            <span></span>
            <span className="active-dot"></span>
          </div>

        </section>


        {/* ================= CATEGORIES ================= */}
        <section className="categories">

          <div className="category-card">
            <span>🛒</span>
            <p>All<br />Groceries</p>
          </div>

          <div className="category-card">
            <span>🥬</span>
            <p>Fresh<br />Produce</p>
          </div>

          <div className="category-card">
            <span>🥛</span>
            <p>Dairy &<br />Eggs</p>
          </div>

          <div className="category-card">
            <span>📦</span>
            <p>Bakery</p>
          </div>

          <div className="category-card">
            <span>🧻</span>
            <p>Pantry</p>
          </div>

          <div className="category-card">
            <span>🧴</span>
            <p>Household</p>
          </div>

          <div className="category-card">
            <span>🧴</span>
            <p>Personal<br />Care</p>
          </div>

          <div className="category-card">
            <span>🍷</span>
            <p>Beverages</p>
          </div>

        </section>

      </main>


      <CartSidebar
  isOpen={showCart}
  cart={cart}
  onClose={() => setShowCart(false)}
  onCheckout={() => {}}
  onRemove={(index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  }}
  onIncrease={(index) => {
    setCart((currentCart) =>
      currentCart.map((item, i) =>
        i === index
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }}
  onDecrease={(index) => {
    setCart((currentCart) =>
      currentCart
        .map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
            : item
        )
    );
  }}
/>

    </div>
  );
}

export default App;