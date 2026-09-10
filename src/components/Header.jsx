import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">

        {/* Logo */}
        <div className="brand">
          <div className="brand-circle">JM</div>

          <div className="brand-name">
            <strong>Jirani</strong>
            <span>MART</span>
          </div>
        </div>

        {/* Header buttons */}
        <div className="header-actions">

          <button>
            👤
            <span>Account</span>
          </button>

          <button>
            ❤️
            <span>Wishlist</span>
          </button>

          <button className="cart-button">
            🛒
            <span>Cart</span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;