
import { useState } from "react";

import "./ShopPage.css";

import Header from "./Header";

import CartSidebar from "./CartSidebar";

function ShopPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  // Convert prices such as "KSh1.20" into numbers for cart calculations
  const getNumericPrice = (price) => {
    return Number(String(price).replace("KSh", "").replace(/,/g, ""));
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          price: getNumericPrice(product.price),
          quantity: 1,
        },
      ];
    });

    // Important:
    // Adding an item does NOT open the sidebar.
    // The bottom cart bar appears first.
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  };

  const increaseQuantity = (index) => {
    setCart((currentCart) =>
      currentCart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (index) => {
    setCart((currentCart) =>
      currentCart.flatMap((item, i) => {
        if (i !== index) {
          return [item];
        }

        const newQuantity = (item.quantity || 1) - 1;

        if (newQuantity <= 0) {
          return [];
        }

        return [
          {
            ...item,
            quantity: newQuantity,
          },
        ];
      })
    );
  };

  const cartItemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="shop-page">

      {/* ================= HEADER ================= */}

      <Header onCartClick={() => setShowCart(true)} />


      {/* ================= SEARCH ================= */}

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


      {/* ================= PAGE CONTENT ================= */}

      <main className="shop-content">

        {/* Page heading */}

        <div className="shop-heading">

          <div>
            <h1>
              Household Essentials
            </h1>

            <p>
              Everything you need for everyday life
            </p>
          </div>


          {/* Sort */}

          <div className="sort-box">

            <label htmlFor="sort">
              Sort by:
            </label>

            <select id="sort">

              <option value="default">
                Default
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

            </select>

          </div>

        </div>


        {/* ================= CATEGORIES ================= */}

        <div className="shop-filters">

          <button className="filter active">
            All
          </button>

          <button className="filter">
            Bakery
          </button>

          <button className="filter">
            Dairy
          </button>

          <button className="filter">
            Baking
          </button>

          <button className="filter">
            Pantry
          </button>

          <button className="filter">
            Household
          </button>

          <button className="filter">
            Personal Care
          </button>

        </div>


        {/* ================= PRODUCT COUNT ================= */}

        <p className="product-count">
          {products.length} products
        </p>


        {/* ================= PRODUCTS ================= */}

        <section className="product-grid">

          {products.map((product, index) => (

            <article
              className="product-card"
              key={index}
            >

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
                  <span>
                    {product.emoji}
                  </span>
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

                  <span>
                    {product.rating}
                  </span>

                  <small>
                    {product.reviews}
                  </small>

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


                <button
                  className="add-cart-button"
                  onClick={() => addToCart(product)}
                >
                  + Add to Cart
                </button>

              </div>

            </article>

          ))}

        </section>

      </main>


      {/* ================= BOTTOM CART BAR ================= */}

      {cart.length > 0 && (

        <div className="cart-bar">

          <div className="cart-summary">

            🛒

            <strong>
              {cartItemCount} item(s)
            </strong>

            <span>
              Total: KSh{cartTotal.toFixed(2)}
            </span>

          </div>


          <div className="cart-actions">

            <button
              className="view-cart-button"
              onClick={() => setShowCart(true)}
            >
              View Cart
            </button>


            <button
              className="checkout-button"
              onClick={() => setShowCart(true)}
            >
              Checkout
            </button>

          </div>

        </div>

      )}


      {/* ================= CART SIDEBAR ================= */}

      <CartSidebar

        isOpen={showCart}

        cart={cart}

        onClose={() => setShowCart(false)}

        onCheckout={() => {}}

        onRemove={removeFromCart}

        onIncrease={increaseQuantity}

        onDecrease={decreaseQuantity}

      />

    </div>
  );
}

export default ShopPage;

