import "./ShopPage.css";

function ShopPage() {
  const products = [
    {
      name: "White Bread Loaf",
      category: "Bakery",
      size: "700g",
      price: "KSh1.20",
      oldPrice: "KSh1.50",
      rating: "★★★★★",
      reviews: "(128)",
      sale: true,
      emoji: "🍞",
    },
    {
      name: "Margarine Spread",
      category: "Dairy",
      size: "500g tub",
      price: "KSh1.80",
      rating: "★★★★★",
      reviews: "(84)",
      sale: false,
      emoji: "🧈",
    },
    {
      name: "Dark Chocolate",
      category: "Bakery",
      size: "100g",
      price: "KSh2.50",
      oldPrice: "KSh3.00",
      rating: "★★★★★",
      reviews: "(56)",
      sale: true,
      emoji: "🍫",
    },
    {
      name: "Fresh Milk",
      category: "Dairy",
      size: "1 litre",
      price: "KSh2.00",
      rating: "★★★★★",
      reviews: "(102)",
      sale: false,
      emoji: "🥛",
    },
    {
      name: "Laundry Detergent",
      category: "Household",
      size: "1kg",
      price: "KSh4.50",
      rating: "★★★★☆",
      reviews: "(63)",
      sale: false,
      emoji: "🧺",
    },
    {
      name: "Dishwashing Liquid",
      category: "Household",
      size: "500ml",
      price: "KSh2.80",
      rating: "★★★★★",
      reviews: "(45)",
      sale: false,
      emoji: "🧴",
    },
    {
      name: "Cooking Oil",
      category: "Pantry",
      size: "1 litre",
      price: "KSh3.90",
      oldPrice: "KSh4.50",
      rating: "★★★★★",
      reviews: "(91)",
      sale: true,
      emoji: "🫗",
    },
    {
      name: "Bath Soap",
      category: "Personal Care",
      size: "100g",
      price: "KSh1.50",
      rating: "★★★★☆",
      reviews: "(38)",
      sale: false,
      emoji: "🧼",
    },
  ];

  return (
    <div className="shop-page">

      {/* Search */}
      <section className="shop-search-section">
        <div className="shop-search-box">
          <input
            type="text"
            placeholder="Search for products, brands, categories..."
          />

          <button>
            🔍 Search
          </button>
        </div>
      </section>


      {/* Page heading */}
      <main className="shop-content">

        <div className="shop-heading">

          <div>
            <div className="breadcrumb">
              Home › Household Essentials
            </div>

            <h1>Household Essentials</h1>

            <p>
              Everything you need for everyday life
            </p>
          </div>

          <div className="sort-container">
            <label htmlFor="sort">Sort by:</label>

            <select id="sort">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

        </div>


        {/* Categories */}
        <div className="shop-filters">

          <button className="filter active">All</button>
          <button className="filter">Bakery</button>
          <button className="filter">Dairy</button>
          <button className="filter">Baking</button>
          <button className="filter">Pantry</button>
          <button className="filter">Household</button>
          <button className="filter">Personal Care</button>

        </div>


        {/* Product count */}
        <p className="product-count">
          12 products
        </p>


        {/* Products */}
        <section className="product-grid">

          {products.map((product, index) => (
            <article className="product-card" key={index}>

              <div className="product-image">

                {product.sale && (
                  <span className="sale-badge">
                    SALE
                  </span>
                )}

                <button className="favorite-button">
                  ♡
                </button>

                <div className="placeholder-image">
                  <span>{product.emoji}</span>
                </div>

              </div>


              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <h2>
                  {product.name}
                </h2>

                <p className="product-size">
                  {product.size}
                </p>

                <div className="rating">
                  <span>{product.rating}</span>
                  <small>{product.reviews}</small>
                </div>

                <div className="price-row">

                  <strong className="product-price">
                    {product.price}
                  </strong>

                  {product.oldPrice && (
                    <>
                      <span className="old-price">
                        {product.oldPrice}
                      </span>

                      <span className="discount">
                        -20%
                      </span>
                    </>
                  )}

                </div>

                <button className="add-cart-button">
                  + Add to Cart
                </button>

              </div>

            </article>
          ))}

        </section>

      </main>


      {/* Cart bar */}
      <div className="shop-cart-bar">

        <div className="cart-summary">

          <div className="cart-number">
            1
          </div>

          <div>
            <span>Items in cart</span>
            <strong>KSh1.20</strong>
          </div>

        </div>

        <div className="cart-actions">

          <button className="view-cart-button">
            View Cart
          </button>

          <button className="checkout-button">
            Checkout →
          </button>

        </div>

      </div>

    </div>
  );
}

export default ShopPage;