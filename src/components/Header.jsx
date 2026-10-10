import "./Header.css";
import jiraniLogo from "../assets/Jirani Mart JM Logo.png";

function Header({ onCartClick }) {
  return (
    <header className="site-header">

      {/* ================================
          TOP HEADER
      ================================= */}

      <div className="site-header-main">

        {/* Logo */}
        <a href="/" className="site-header-logo">
          <img
            src={jiraniLogo}
            alt="Jirani Mart"
          />
        </a>

        {/* Header Actions */}
        <div className="site-header-actions">

          
          <button className="site-header-action">
            <span className="site-action-icon">❤️</span>
            <span>Wishlist</span>
          </button>

          <button className="site-header-action">
            <span className="site-action-icon">🛵</span>
            <span>Track Order</span>
          </button>

        </div>

      </div>


      {/* ================================
          CENTERED NAVIGATION
      ================================= */}

      <nav className="site-navigation">

        <div className="site-navigation-inner">

          <a href="/" className="site-nav-link">
            Home
          </a>

          <a href="/shop" className="site-nav-link">
            Shop
          </a>

          <a href="/bakery" className="site-nav-link">
            Bakery
          </a>

          <a href="/profile" className="site-nav-link">
            Profile
          </a>

        </div>

      </nav>

    </header>
  );
}

export default Header;