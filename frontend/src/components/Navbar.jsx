import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  // Lock page scroll and let Escape dismiss the drawer while it is open.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Jump to the catalog search toolbar, scrolling smoothly when already there
  // and navigating first when the user is on another page.
  const goToCatalogSearch = () => {
    closeMenu();

    const scrollToSearch = () => {
      const target = document.getElementById("catalog-search");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/product") {
      scrollToSearch();
    } else {
      navigate("/product");
      // Wait for the catalog page to mount before scrolling to the toolbar.
      setTimeout(scrollToSearch, 80);
    }
  };

  // Send shoppers to the catalog and land them at the very top of the page.
  const goToCatalogTop = () => {
    closeMenu();

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (location.pathname === "/product") {
      scrollToTop();
    } else {
      navigate("/product");
      setTimeout(scrollToTop, 80);
    }
  };

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
              onClick={(e) => {
                e.preventDefault();
                goToCatalogSearch();
              }}
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
            <Link
              to="/product"
              className={`btn btn--primary btn--sm ${style.cta}`}
              onClick={(e) => {
                e.preventDefault();
                goToCatalogTop();
              }}
            >
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

        {/* Mobile navigation — drawer that slides in from the right */}
        <div
          className={`${style.backdrop} ${menuOpen ? style.backdropOpen : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <nav
          id="mobile-menu"
          className={`${style.mobileNav} ${menuOpen ? style.mobileNavOpen : ""}`}
          aria-label="Mobile"
          inert={!menuOpen}
        >
          <div className={style.mobileNavHead}>
            <span className={style.mobileNavTitle}>Menu</span>
            <button
              type="button"
              className={style.mobileClose}
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <NavLink to="/" end className={style.mobileLink} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/product" className={style.mobileLink} onClick={closeMenu}>
            Products
          </NavLink>
          <NavLink to="/about" className={style.mobileLink} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={style.mobileLink} onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink
            to="/product"
            className={`btn btn--primary ${style.mobileCta}`}
            onClick={(e) => {
              e.preventDefault();
              goToCatalogTop();
            }}
          >
            Shop now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;