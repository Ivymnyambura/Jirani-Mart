import "./CartSidebar.css";

function CartSidebar({
  isOpen,
  cart,
  onClose,
  onCheckout,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      {/* Dark background */}
      <div
        className={`cart-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Sliding cart */}
      <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-sidebar-header">
          <h2>🛒 Your Cart</h2>

          <button
            className="cart-close-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add some delicious bakery items to get started.</p>

              <button
                className="continue-shopping-button"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div className="cart-sidebar-item" key={index}>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>

                  <p>
                    KSh{Number(item.price).toFixed(2)}
                  </p>
                </div>

                <div className="cart-item-actions">
  <div className="quantity-controls">
    <button
      onClick={() => onDecrease(index)}
      aria-label="Decrease quantity"
    >
      −
    </button>

    <span>{item.quantity || 1}</span>

    <button
      onClick={() => onIncrease(index)}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>

  <button
    className="remove-cart-item"
    onClick={() => onRemove(index)}
  >
    Remove
  </button>
</div>
              </div>
            ))
          )}
        </div>

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
              onClick={onCheckout}
            >
              Proceed to Checkout →
            </button>

            <button
              className="sidebar-continue-button"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;