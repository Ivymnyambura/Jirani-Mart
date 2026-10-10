import { useState } from "react";

import "./BakeryPage.css";

import Header from "./Header";

import BananaBread from "../assets/BananaBread.jpeg";
import Assortedtreats from "../assets/Assortedtreats.jpeg";
import Blueberrymuffins from "../assets/Blueberrymuffins.jpeg";
import Cinammonrolls from "../assets/Cinammonrolls.jpeg";
import LemonRolls from "../assets/LemonRolls.jpeg";
import Meatpie from "../assets/Meatpie.jpeg";
import Oreomuffins from "../assets/Oreomuffins.jpeg";
import Plaincinammonrolls from "../assets/Plaincinammonrolls.jpeg";
import Birthdaycinammonrollpack from "../assets/Birthdaycinammonrollpack.jpeg";
import Oreocakecombo from "../assets/Oreocakecombo.jpeg";
import Strawberrycinammonrolls from "../assets/Strawberrycinammonrolls.jpeg";
import Plainloaf from "../assets/Plainloaf.jpeg";

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

       <Header onCartClick={() => setShowCart(true)} />

    


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
          
        <h1>Bakery &amp; Pastries</h1>

            <p className="bakery-description">
              Baked fresh every morning from 7am
            </p>
          </div>

          <div className="sort-box">
  <label htmlFor="sort">Sort by:</label>

  <select id="sort">
    <option value="default">Default</option>
    <option value="price-low">Price: Low to High</option>
    <option value="price-high">Price: High to Low</option>
  </select>
</div>

        </div>


        {/* ================= FILTERS ================= */}
        <div className="bakery-filters">
          <button className="filter active">All</button>
          <button className="filter">Bread</button>
          <button className="filter">Pastry</button>
        </div>


        <p className="product-count">12 pastries</p>


        {/* ================= PRODUCTS ================= */}
        <section className="bakery-products">

          <div className="bakery-product">
            <div className="product-image">
              <span className="product-badge fresh">FRESH</span>

              <button className="wishlist-button">
                ♡
              </button>

              <img
                src={BananaBread}
                alt="Banana Bread"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Bread</p>

              <h3>Banana Bread</h3>

              <p className="product-size">800g</p>

              <p className="rating">
                ⭐⭐⭐⭐ <span>(180)</span>
              </p>

              <strong className="product-price">KSh450.50</strong>
              <button
               className="add-to-cart-button"
                onClick={() =>
                addToCart({
                  name: "Banana Bread",
                   price: "450.50",
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
                src={Assortedtreats}
                alt="Assorted treats"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Pastry</p>

              <h3>Assorted Treats</h3>

              <p className="product-size">Assorted</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(341)</span>
              </p>

              <strong className="product-price">KSh1050.00</strong>
              <button
             className="add-to-cart-button"
               onClick={() =>
                 addToCart({
                   name: "Assorted treats",
                    price: "1050.00",
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
                src={Blueberrymuffins}
                alt="Blueberry muffin"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Pastry</p>

              <h3>Blueberry Muffin</h3>

              <p className="product-size">Each</p>

              <p className="rating">
                ⭐⭐⭐⭐ <span>(180)</span>
              </p>

                <strong className="product-price">KSh120.00</strong>
        
              <button
                className="add-to-cart-button"
                 onClick={() =>
                  addToCart({
                   name: "Blueberry Muffins",
                     price: "120.00",
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
                src={Cinammonrolls}
                alt="Cinnamon rolls"
              />
            </div>

            <div className="product-info">
              <p className="product-category">Bread</p>

              <h3>Cinnamon Rolls</h3>

              <p className="product-size">Each</p>

              <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(201)</span>
              </p>

              <strong className="product-price">KSh150.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Cinnamon Rolls",
      price: "150.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>


<div className="product-card">
  <img
    src={LemonRolls}
    alt="Lemon Rolls"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Lemon Rolls</h3>
    <p className="product-size">Each</p>

    <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(201)</span>
              </p>

              <strong className="product-price">KSh200.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Lemon Rolls",
      price: "200.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>



<div className="product-card">
  <img
  src={Meatpie}
  alt="Meat Pie"
/>

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Meat Pie</h3>
    <p className="product-size">Each</p>

    <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(201)</span>
              </p>

              <strong className="product-price">KSh100.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Meat Pie",
      price: "100.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>



<div className="product-card">
  <img
  src={Oreomuffins}
  alt="Oreo Muffin"
/>

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Oreo Muffin</h3>
    <p className="product-size">Each</p>

    <p className="rating">
                ⭐⭐⭐⭐ <span>(180)</span>
              </p>

              <strong className="product-price">KSh100.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Oreo Muffin",
      price: "100.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>


<div className="product-card">
  <img
    src={Plaincinammonrolls}
    alt="Plain Cinnamon Rolls"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Plain Cinnamon Rolls</h3>
    <p className="product-size">Each</p>

    <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(201)</span>
              </p>

              <strong className="product-price">KSh150.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Plain Cinnamon Rolls",
      price: "150.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>




<div className="product-card">
  <img
    src={Birthdaycinammonrollpack}
    alt="Birthday Cinnamon Roll Pack"
  />

  <div className="product-info">
    <span className="product-category">pastry</span>
    <h3>Birthday Cinnamon Roll Pack</h3>
    <p className="product-size">1000g</p>

    <p className="rating">
                ⭐⭐⭐⭐ <span>(180)</span>
              </p>

              <strong className="product-price">KSh1050.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Birthday Cinnamon Roll Pack",
      price: "1050.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>


<div className="product-card">
  <img
    src={Oreocakecombo}
    alt="Oreo Cake Combo"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Oreo Cake Combo</h3>
    <p className="product-size">800g</p>

    <p className="rating">
                ⭐⭐⭐⭐⭐ <span>(201)</span>
              </p>

              <strong className="product-price">KSh550.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Oreo Cake Combo",
      price: "550.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>


<div className="product-card">
  <img
    src={Strawberrycinammonrolls}
    alt="Strawberry Cinnamon Rolls"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Strawberry Cinnamon Rolls</h3>
    <p className="product-size">Each</p>

<p className="rating">
                ⭐⭐⭐ <span>(50)</span>
              </p>

              <strong className="product-price">KSh180.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Cinnamon Rolls",
      price: "150.00",
    })
  }
>
  + Add to Cart
</button>
            </div>
          </div>


<div className="product-card">
  <img
    src={Plainloaf}
    alt="Plain Loaf"
  />

  <div className="product-info">
    <span className="product-category">Pastry</span>
    <h3>Plain Loaf</h3>
    <p className="product-size">Each</p>

    <p className="rating">
                ⭐⭐⭐⭐ <span>(180)</span>
              </p>

              <strong className="product-price">KSh450.00</strong>
              <button
  className="add-to-cart-button"
  onClick={() =>
    addToCart({
      name: "Plain Loaf",
      price: "450.00",
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

      <strong>
  {cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  )} item(s)
</strong>

      <span>
        Total: KSh
        {cart
  .reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  )
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
        Items in cart:{" "}
        <strong>
          {cart.reduce(
            (total, item) => total + (item.quantity || 1),
            0
          )}
        </strong>
      </p>

      <div className="checkout-total">
        <span>Total Amount</span>

        <strong>
          KSh
          {cart
            .reduce(
              (total, item) =>
                total +
                Number(item.price) * (item.quantity || 1),
              0
            )
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
        <div className="mobile-money-options">

          <label className="payment-option mobile-provider-option">
  <input
    type="radio"
    name="mobileProvider"
    value="mpesa"
    defaultChecked
  />

  <span className="payment-brand">
    <span className="payment-icon mpesa-icon"></span>
    <span>M-Pesa</span>
  </span>
</label>

<label className="payment-option mobile-provider-option">
  <input
    type="radio"
    name="mobileProvider"
    value="airtel"
  />

  <span className="payment-brand">
    <span className="payment-icon airtel-icon"></span>
    <span>Airtel Money</span>
  </span>
</label>

          <input
            type="tel"
            placeholder="Mobile Money Number"
            className="checkout-input"
          />

        </div>
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