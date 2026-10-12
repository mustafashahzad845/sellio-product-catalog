import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={style.header}>
      {/* Announcement strip */}
      <p className={style.announce}>
        Free shipping on orders over $50 · 30-day easy returns
      </p>

      <div className={style.navBar}>
        <div className={`container ${style.navInner}`}>
          {/* Logo */}
          <Link to="/" className={style.logo} onClick={closeMenu} aria-label="Sellio home">
            <svg
              className={style.logoIcon}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 3h14l1.2 5.6a3 3 0 0 1-2.94 3.54H6.74A3 3 0 0 1 3.8 8.6L5 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="16.8" r="1.8" fill="currentColor" />
              <circle cx="17" cy="16.8" r="1.8" fill="currentColor" />
              <path
                d="M3.5 16.2h16.4a1.6 1.6 0 0 0 1.55-2.04l-.4-1.6a1.6 1.6 0 0 0-1.55-1.16H7.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className={style.logoName}>Sellio</span>
          </Link>

          {/* Desktop navigation */}
          <nav className={style.navLinks} aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.navLinkActive : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.navLinkActive : ""}`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.navLinkActive : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${style.navLink} ${isActive ? style.navLinkActive : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Actions */}
          <div className={style.actions}>
            <Link
              to="/product"
              className={style.iconBtn}
              aria-label="Search products"
              title="Search products"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="m20 20-3.2-3.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link to="/product" className={`btn btn--primary btn--sm ${style.cta}`}>
              Shop now
            </Link>
            <button
              type="button"
              className={style.burger}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className={`${style.burgerLine} ${menuOpen ? style.burgerOpen : ""}`} />
              <span className={`${style.burgerLine} ${menuOpen ? style.burgerOpen : ""}`} />
              <span className={`${style.burgerLine} ${menuOpen ? style.burgerOpen : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <nav
            id="mobile-menu"
            className={style.mobileNav}
            aria-label="Mobile"
            onClick={closeMenu}
          >
            <NavLink to="/" end className={style.mobileLink}>
              Home
            </NavLink>
            <NavLink to="/product" className={style.mobileLink}>
              Products
            </NavLink>
            <NavLink to="/about" className={style.mobileLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={style.mobileLink}>
              Contact
            </NavLink>
            <NavLink to="/product" className={`btn btn--primary ${style.mobileCta}`}>
              Shop now
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;