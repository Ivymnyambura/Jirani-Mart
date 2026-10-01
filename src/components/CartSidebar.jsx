import { useState } from "react";
import "./CartSidebar.css";
import LocationMap from "./LocationMap";

function CartSidebar({
  isOpen,
  cart,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  const [view, setView] = useState("cart");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [mobileProvider, setMobileProvider] = useState("mpesa");

  const [userLocation, setUserLocation] = useState(null);
  const [locationMessage, setLocationMessage] = useState("");
  const [isGettingLocation, setIsGettingLocation] = useState(false);

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * (item.quantity || 1),
    0
  );

  const itemCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const handleUseCurrentLocation = () => {
  if (!navigator.geolocation) {
    setLocationMessage(
      "Location services are not supported by your browser."
    );
    return;
  }

  setIsGettingLocation(true);
  setLocationMessage("Getting your location...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      setUserLocation({
        latitude,
        longitude,
      });

      setLocationMessage("Location selected successfully.");
      setIsGettingLocation(false);
    },
    (error) => {
      setIsGettingLocation(false);

      if (error.code === error.PERMISSION_DENIED) {
        setLocationMessage(
          "Location permission was denied. Please allow location access and try again."
        );
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        setLocationMessage(
          "Your location could not be determined. Please try again."
        );
      } else if (error.code === error.TIMEOUT) {
        setLocationMessage(
          "Location request timed out. Please try again."
        );
      } else {
        setLocationMessage(
          "Something went wrong while getting your location."
        );
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
};

  const handlePlaceOrder = () => {
  setView("success");
};

  const handleClose = () => {
    setView("cart");
    onClose();
  };

  return (
    <>
      {/* Dark background */}
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={handleClose}
      ></div>

      {/* Sliding cart */}
      <aside
        className={`cart-sidebar ${isOpen ? "open" : ""}`}
      >
        {/* Header */}
        <div className="cart-sidebar-header">
          <h2>
            {view === "cart"
  ? "🛒 Your Cart"
  : view === "checkout"
  ? "💳 Checkout"
  : "🎉 Order Confirmed"}
          </h2>

          <button
            className="cart-close-button"
            onClick={handleClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* ========================= */}
        {/* CART VIEW */}
        {/* ========================= */}

        {view === "cart" && (
          <>
            <div className="cart-sidebar-content">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <div className="empty-cart-icon">
                    🛒
                  </div>

                  <h3>Your cart is empty</h3>

                  <p>
                    Add some delicious bakery items
                    to get started.
                  </p>

                  <button
                    className="continue-shopping-button"
                    onClick={handleClose}
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <div
                    className="cart-sidebar-item"
                    key={index}
                  >
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>

                      <p className="cart-item-unit-price">
                        KSh
                        {Number(item.price).toFixed(2)}
                        {" "}each
                      </p>

                      <strong className="cart-item-total">
                        KSh
                        {(
                          Number(item.price) *
                          (item.quantity || 1)
                        ).toFixed(2)}
                      </strong>
                    </div>

                    <div className="cart-item-actions">
                      <div className="quantity-controls">
  <button
    className="quantity-button decrease"
    onClick={() => onDecrease(index)}
    aria-label="Decrease quantity"
  >
    −
  </button>

  <span className="quantity-number">
    {item.quantity || 1}
  </span>

  <button
    className="quantity-button increase"
    onClick={() => onIncrease(index)}
    aria-label="Increase quantity"
  >
    +
  </button>
</div>

                      <button
                        className="remove-cart-item"
                        onClick={() =>
                          onRemove(index)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="cart-sidebar-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>

                  <strong>
                    KSh{subtotal.toFixed(2)}
                  </strong>
                </div>

                <p className="free-delivery-message">
                  🚚 Free delivery on qualifying orders
                </p>

                <button
                  className="sidebar-checkout-button"
                  onClick={() =>
                    setView("checkout")
                  }
                >
                  Proceed to Checkout →
                </button>

                <button
                  className="sidebar-continue-button"
                  onClick={handleClose}
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </>
        )}

       {/* ========================= */}
{/* CHECKOUT VIEW */}
{/* ========================= */}

{view === "checkout" && (
  <>
    <div className="cart-sidebar-content checkout-sidebar-content">

      {/* ORDER SUMMARY */}
      <section className="checkout-section order-summary-section">
        <h1>Your Order 🛒</h1>
        <div className="order-summary-card">
          <div className="summary-row">
            <span>Items in cart</span>
            <strong> {itemCount} </strong>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row total-row">
            <span>Total</span>
            <strong> Ksh {subtotal.toFixed(2)}</strong>
          </div>
        </div>
      </section>


      {/* MODE OF DELIVERY */}
      <section className="checkout-section">
        <h3>How would you like to receive your order?</h3>

        <select
          className="checkout-select"
          value={deliveryMethod}
          onChange={(e) => setDeliveryMethod(e.target.value)}
        >
          <option value="pickup">
            🏪 Pick up from Store
          </option>

          <option value="delivery">
            🚚 Doorstep Delivery
          </option>
        </select>
      </section>


      {/* DELIVERY DETAILS */}
      {deliveryMethod === "delivery" && (
        <section className="checkout-section delivery-details-section">
          <h3>Delivery Details</h3>

          <input
            type="text"
            placeholder="Full Name"
            className="checkout-input"
          />

          <input
            type="tel"
            placeholder="Phone Number (e.g. +254 712 345 678)"
            className="checkout-input"
          />

          <input
            type="text"
            placeholder="Delivery Address"
            className="checkout-input"
          />

          {/* INTERACTIVE MAP */}

<LocationMap
  location={userLocation}
  onLocationSelect={(selectedLocation) => {
    setUserLocation(selectedLocation);
    setLocationMessage("📍 Delivery location selected.");
  }}
/>

<button
  type="button"
  className="use-location-button"
  onClick={handleUseCurrentLocation}
  disabled={isGettingLocation}
>
  {isGettingLocation
    ? "📍 Getting Location..."
    : "📍 Use My Current Location"}
</button>

{locationMessage && (
  <p className="location-message">
    {locationMessage}
  </p>
)}
        </section>
      )}


      {/* PAYMENT METHOD */}
      <section className="checkout-section">
        <h3>Payment Method</h3>

        <select
          className="checkout-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="cash">
            💵 Cash upon Delivery
          </option>

          <option value="mobile-money">
            📱 Mobile Money
          </option>

          <option value="card">
            💳 Credit / Debit Card
          </option>
        </select>
      </section>


      {/* MOBILE MONEY */}
      {paymentMethod === "mobile-money" && (
        <section className="checkout-section payment-details-section">
          <h3>Mobile Money Provider</h3>

          <select
            className="checkout-select"
            value={mobileProvider}
            onChange={(e) => setMobileProvider(e.target.value)}
          >
            <option value="mpesa">
              M-Pesa
            </option>

            <option value="airtel">
              Airtel Money
            </option>
          </select>

          <input
            type="tel"
            placeholder="M-Pesa/Airtel Number (e.g. +254 712 345 678)"
            className="checkout-input"
          />
        </section>
      )}


      {/* CARD INFORMATION */}
      {paymentMethod === "card" && (
        <section className="checkout-section payment-details-section">
          <h3>Card Information</h3>

          <input
            type="text"
            placeholder="Cardholder Name"
            className="checkout-input"
          />

          <input
            type="text"
            placeholder="Card Number"
            className="checkout-input"
          />

          <div className="card-input-row">
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
        </section>
      )}


      {/* PLACE ORDER */}
      <button
        className="place-order-button"
        onClick={handlePlaceOrder}
      >
        Place Order · KSh{subtotal.toFixed(2)}
      </button>

    </div>


    {/* BACK TO CART */}
    <div className="cart-sidebar-footer">
      <button
        className="sidebar-continue-button"
        onClick={() => setView("cart")}
      >
        ← Back to Cart
      </button>
    </div>
  </>
)}
{/* ========================= */}
{/* SUCCESS / THANK YOU VIEW */}
{/* ========================= */}

{view === "success" && (
  <>
    <div className="cart-sidebar-content order-success-content">

      <div className="order-success-icon">
        ✓
      </div>

      <h2 className="order-success-title">
        Thank You for Your Order!
      </h2>

      <p className="order-success-message">
        Your order has been received successfully.
        Thank you for shopping with Jirani Mart.
      </p>

      <div className="order-status-card">
        <span className="order-status-label">
          Order Status
        </span>

        <strong className="order-status">
          🟢 Order Received
        </strong>

        <p>
          We are now preparing your order.
        </p>
      </div>

      <div className="order-success-total">
        <span>Order Total</span>

        <strong>
          KSh{subtotal.toFixed(2)}
        </strong>
      </div>

      <a
  href="/#track-order"
  className="track-order-button"
>
  📦 Track Your Order →
</a>

      <button
        className="success-continue-button"
        onClick={handleClose}
      >
        Continue Shopping
      </button>

    </div>
  </>
)}
      </aside>
    </>
  );
}

export default CartSidebar;