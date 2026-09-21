import "./BakeryPage.css";

function BakeryPage() {
  return (
    <div className="bakery-page">

      {/* ================= HEADER ================= */}
      <header className="header">
        <div className="logo">
          <div className="logo-circle">JM</div>

          <div className="logo-text">
            <strong>Jirani</strong>
            <span>MART</span>
          </div>
        </div>

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

        <a href="/" className="nav-link">
          🏠 Home
        </a>

        <a href="/shop" className="nav-link">
          🛒 Shop
        </a>

        <a href="/bakery" className="nav-link active">
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
      <section className="bakery-search-section">
        <div className="bakery-search-box">

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
      <main className="bakery-main">

        <div className="bakery-top">

          <div>
            <p className="breadcrumb">
              Home &gt; Bakery &amp; Pastries
            </p>

            <h1>Bakery &amp; Pastries</h1>

            <p className="bakery-description">
              Baked fresh every morning from 7am
            </p>
          </div>

          <div className="sort-box">
            <label>Sort by:</label>

            <select>
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

        </div>


        {/* ================= FILTERS ================= */}
        <div className="bakery-filters">
          <button className="filter active">All</button>
          <button className="filter">Bread</button>
          <button className="filter">Pastry</button>
        </div>


        <p className="product-count">6 products</p>


        {/* ================= PRODUCTS ================= */}
        <section className="bakery-products">

          <div className="bakery-product">
            <div className="product-image">
              <span className="product-badge fresh">FRESH</span>

              <button className="wishlist-button">
                ♡
              </button>

              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80"
                alt="Sourdough loaf"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Bread</p>

              <h3>Sourdough Loaf</h3>

              <p className="product-size">800g</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(203)</span>
              </p>

              <strong className="product-price">KSh4.50</strong>
            </div>
          </div>


          <div className="bakery-product">
            <div className="product-image">
              <span className="product-badge fresh">FRESH</span>

              <button className="wishlist-button">
                ♡
              </button>

              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
                alt="Butter croissant"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Pastry</p>

              <h3>Butter Croissant</h3>

              <p className="product-size">each</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(341)</span>
              </p>

              <strong className="product-price">KSh1.80</strong>
            </div>
          </div>


          <div className="bakery-product">
            <div className="product-image">
              <span className="product-badge sale">SALE</span>

              <button className="wishlist-button">
                ♡
              </button>

              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
                alt="Assorted pastry box"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Pastry</p>

              <h3>Assorted Pastry Box</h3>

              <p className="product-size">Box of 4</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(97)</span>
              </p>

              <div className="price-row">
                <strong className="product-price">KSh8.50</strong>
                <del>KSh10.00</del>
                <span>-15%</span>
              </div>
            </div>
          </div>


          <div className="bakery-product">
            <div className="product-image">

              <button className="wishlist-button">
                ♡
              </button>

              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
                alt="Seeded rye bread"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Bread</p>

              <h3>Seeded Rye Bread</h3>

              <p className="product-size">600g</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(66)</span>
              </p>

              <strong className="product-price">KSh3.80</strong>
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}

export default BakeryPage;