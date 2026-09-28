import { useState } from "react";
import "./BakeryPage.css";
import CartSidebar from "./CartSidebar";

function BakeryPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

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
          quantity: 1,
        },
      ];
    });
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

        const quantity = item.quantity || 1;

        if (quantity <= 1) {
          return [];
        }

        return [
          {
            ...item,
            quantity: quantity - 1,
          },
        ];
      })
    );
  };

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

              <h3>Brown Sourdough Loaf</h3>

              <p className="product-size">800g</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(203)</span>
              </p>

              <strong className="product-price">KSh4.50</strong>
              <button
               className="add-to-cart-button"
                onClick={() =>
                addToCart({
                  name: "Brown Sourdough Loaf",
                   price: 4.5,
                    })
                 }
>
  + Add to Cart
</button>
              
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

              <h3>Breakfast Butter Croissant</h3>

              <p className="product-size">each</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(341)</span>
              </p>

              <strong className="product-price">KSh1.80</strong>
              <button
             className="add-to-cart-button"
               onClick={() =>
                 addToCart({
                   name: "Breakfast Butter Croissant",
                    price: 1.8,
                   })
  }
>
  + Add to Cart
</button>
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
              <button
                className="add-to-cart-button"
                 onClick={() =>
                  addToCart({
                   name: "Assorted Pastry Box",
                     price: 8.5,
    })
  }
>
  + Add to Cart
</button>
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
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Seeded Rye Bread",
      price: 3.8,
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>

          {/* Vanilla Muffin */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=600&q=80"
    alt="Vanilla Muffin"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Vanilla Muffin</h3>
    <p className="product-size">Each</p>

    <div className="product-price">
      KSh2.20
    </div>

    <div className="product-rating">
      ★★★★★ <span>(156)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Vanilla Muffin",
          price: 2.2,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Chocolate Chip Muffin */}
<div className="product-card">
  <img
  src="https://images.unsplash.com/photo-1558303056-7c9b8b5e6f5b?auto=format&fit=crop&w=600&q=80"
  alt="Chocolate Muffin"
/>

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Chocolate Muffin</h3>
    <p className="product-size">Each</p>

    <div className="product-price">
      KSh2.50
    </div>

    <div className="product-rating">
      ★★★★★ <span>(189)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Chocolate Chip Muffin",
          price: 2.5,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Blueberry Muffin */}
<div className="product-card">
  <img
  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
  alt="Blueberry Muffin"
/>

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Blueberry Muffin</h3>
    <p className="product-size">Each</p>

    <div className="product-price">
      KSh2.40
    </div>

    <div className="product-rating">
      ★★★★★ <span>(143)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Blueberry Muffin",
          price: 2.4,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Banana Bread */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=600&q=80"
    alt="Banana Bread"
  />

  <div className="product-info">
    <span className="product-category">Bread</span>
    <h3>Banana Bread</h3>
    <p className="product-size">500g</p>

    <div className="product-price">
      KSh4.20
    </div>

    <div className="product-rating">
      ★★★★★ <span>(118)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Banana Bread",
          price: 4.2,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Chocolate Banana Bread */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80"
    alt="Chocolate Banana Bread"
  />

  <div className="product-info">
    <span className="product-category">Bread</span>
    <h3>Chocolate Banana Bread</h3>
    <p className="product-size">500g</p>

    <div className="product-price">
      KSh4.80
    </div>

    <div className="product-rating">
      ★★★★★ <span>(92)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Chocolate Banana Bread",
          price: 4.8,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Cinnamon Roll */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=80"
    alt="Cinnamon Roll"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Glazed Cinnamon Roll</h3>
    <p className="product-size">Each</p>

    <div className="product-price">
      KSh2.80
    </div>

    <div className="product-rating">
      ★★★★★ <span>(207)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Cinnamon Roll",
          price: 2.8,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Carrot Cake Slice */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80"
    alt="Carrot Cake Slice"
  />

  <div className="product-info">
    <span className="product-category">Cake</span>
    <h3>Carrot Cake Slice</h3>
    <p className="product-size">1 slice</p>

    <div className="product-price">
      KSh3.50
    </div>

    <div className="product-rating">
      ★★★★★ <span>(76)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Carrot Cake Slice",
          price: 3.5,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

{/* Chocolate Chip Cookie */}
<div className="product-card">
  <img
    src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
    alt="Chocolate Chip Cookie"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Chocolate Chip Cookie</h3>
    <p className="product-size">Each</p>

    <div className="product-price">
      KSh1.50
    </div>

    <div className="product-rating">
      ★★★★★ <span>(231)</span>
    </div>

    <button
      className="add-to-cart-button"
      onClick={() =>
        addToCart({
          name: "Chocolate Chip Cookie",
          price: 1.5,
        })
      }
    >
      + Add to Cart
    </button>
  </div>
</div>

        </section>

      </main>

   {cart.length > 0 && (
  <div className="cart-bar">
    <div className="cart-summary">
      🛒

      <strong>{cart.length} item(s)</strong>

      <span>
        Total: KSh
        {cart
          .reduce((total, item) => total + item.price, 0)
          .toFixed(2)}
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
        onClick={() => setShowCheckout(true)}
      >
        Checkout
      </button>
    </div>
  </div>
)}
{cart.length > 0 && (
  <div className="cart-bar">
    <div className="cart-summary">
      🛒

      <strong>{cart.length} item(s)</strong>

      <span>
        Total: KSh
        {cart
          .reduce((total, item) => total + item.price, 0)
          .toFixed(2)}
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
<CartSidebar
  isOpen={showCart}
  cart={cart}
  onClose={() => setShowCart(false)}
  onCheckout={() => {
    setShowCart(false);
    setShowCheckout(true);
  }}
  onRemove={(index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  }}
  onIncrease={(index) => increaseQuantity(index)}
   onDecrease={(index) => decreaseQuantity(index)}
/>

{showCheckout && (
  <div className="modal-overlay">
    <div className="checkout-modal">
      <button
        className="close-modal"
        onClick={() => setShowCheckout(false)}
      >
        ×
      </button>

      <h2>Checkout</h2>

      <p>
        Items in cart: <strong>{cart.length}</strong>
      </p>

      <div className="checkout-total">
        <span>Total Amount</span>

        <strong>
          KSh
          {cart
            .reduce((total, item) => total + item.price, 0)
            .toFixed(2)}
        </strong>
      </div>

      <input
        type="text"
        placeholder="Full Name"
        className="checkout-input"
      />

      <input
        type="text"
        placeholder="Delivery Address"
        className="checkout-input"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="checkout-input"
      />

      <h3>Payment Method</h3>

      <label className="payment-option">
        <input
          type="radio"
          name="payment"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span>Cash upon Delivery</span>
      </label>

      <label className="payment-option">
        <input
          type="radio"
          name="payment"
          value="mobile"
          checked={paymentMethod === "mobile"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span>Mobile Money</span>
      </label>

      {paymentMethod === "mobile" && (
        <input
          type="tel"
          placeholder="Mobile Money Number"
          className="checkout-input"
        />
      )}

      <label className="payment-option">
        <input
          type="radio"
          name="payment"
          value="card"
          checked={paymentMethod === "card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <span>Credit / Debit Card</span>
      </label>

      {paymentMethod === "card" && (
        <div className="card-payment-fields">
          <div className="card-types">
            <span>Visa</span>
            <span>Mastercard</span>
          </div>

          <input
            type="text"
            placeholder="Card Number"
            className="checkout-input"
          />

          <div className="card-row">
            <input
              type="text"
              placeholder="MM / YY"
              className="checkout-input"
            />

            <input
              type="text"
              placeholder="CVV"
              className="checkout-input"
            />
          </div>

          <input
            type="text"
            placeholder="Name on Card"
            className="checkout-input"
          />
        </div>
      )}

      <button
        className="place-order-button"
        onClick={() => {
          alert("Order placed successfully!");

          setCart([]);
          setShowCheckout(false);
        }}
      >
        Place Order
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default BakeryPage;