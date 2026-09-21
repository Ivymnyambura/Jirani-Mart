import "./App.css";
import ShopPage from "./components/ShopPage";
import BakeryPage from "./components/BakeryPage";

function App() {
    if (window.location.pathname === "/shop") {
    return <ShopPage />;
  }
  if (window.location.pathname === "/bakery") {
  return <BakeryPage />;
}
  return (
    <div className="app">

      {/* ================= HEADER ================= */}
      <header className="header">

        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">JM</div>

          <div className="logo-text">
            <strong>Jirani</strong>
            <span>MART</span>
          </div>
        </div>

        {/* Account / Wishlist / Cart */}
        <div className="header-actions">

          <button className="header-action">
            👤
            <span>Account</span>
          </button>

          <button className="header-action">
            ❤️
            <span>Wishlist</span>
          </button>

          <button className="cart-button">
            🛒
            <strong>Cart</strong>
          </button>

        </div>
      </header>


      {/* ================= NAVIGATION ================= */}
      <nav className="navigation">

        <a href="#" className="nav-link active">
          🏠 Home
        </a>

        <a href="/shop" className="nav-link">
          🛒 Shop
        </a>

        <a href="/bakery" className="nav-link">
          📦 Bakery
        </a>

        <a href="#" className="nav-link">
          📍 Contact
        </a>

        <a href="#" className="nav-link">
          🥬 Fresh Produce
        </a>

        <a href="#" className="nav-link">
          🥛 Dairy & Eggs
        </a>

        <a href="#" className="nav-link">
          📦 Bakery
        </a>

        <a href="#" className="nav-link">
          🧴 Pantry
        </a>

        <a href="#" className="nav-link">
          🏠 Household
        </a>

      </nav>


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


      {/* ================= BOTTOM BAR ================= */}
      <div className="bottom-bar">

        <button className="account-button">
          👤 My Account
        </button>

        <button className="track-button">
          📦 Track Order
        </button>

        <button className="store-button">
          🗺️ Store Finder
        </button>

      </div>

    </div>
  );
}

export default App;