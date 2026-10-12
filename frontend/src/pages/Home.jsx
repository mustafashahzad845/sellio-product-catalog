import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";
import ProductCard from "../components/card";

const Home = ({ apiResponse = [] }) => {
  const featured = apiResponse.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className={style.hero}>
        <div className={`container ${style.heroInner}`}>
          <div>
            <span className="eyebrow">Everyday essentials, one store</span>
            <h1 className={style.heroTitle}>
              Shop the catalog, <em>skip the noise.</em>
            </h1>
            <p className={style.heroSub}>
              Browse a clean, well-kept store full of everyday finds —
              electronics, home, beauty and more. Search, compare and check
              every detail before you decide.
            </p>
            <div className={style.heroCta}>
              <Link to="/product" className={`btn btn--primary btn--lg`}>
                Browse products
              </Link>
              <Link to="/about" className={`btn btn--secondary btn--lg`}>
                About Sellio
              </Link>
            </div>
          </div>

          <div className={style.heroArt}>
            <div className={style.heroCard}>
              <span className={style.heroCardEyebrow}>Sellio catalog</span>
              <svg
                className={style.heroBuyIcon}
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
              <h2 className={style.heroCardTitle}>
                Fresh picks, added every week.
              </h2>
              <div className={style.heroCardChips}>
                <span className={style.heroChip}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Free shipping over $50
                </span>
                <span className={style.heroChip}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  30-day returns
                </span>
              </div>
            </div>

            <span className={`${style.floatChip} ${style.floatChipTop}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3 4 7v6c0 4.4 3.4 7.4 8 8 4.6-.6 8-3.6 8-8V7l-8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="m9 12 2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Secure checkout
            </span>
            <span className={`${style.floatChip} ${style.floatChipBottom}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="9" cy="19.5" r="1.4" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="17.5" cy="19.5" r="1.4" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Ships fast
            </span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className={style.trust}>
        <div className={`container ${style.trustGrid}`}>
          <div className={style.trustItem}>
            <span className={style.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className={style.trustTitle}>Free shipping</p>
              <p className={style.trustSub}>On orders over $50</p>
            </div>
          </div>
          <div className={style.trustItem}>
            <span className={style.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16 10V7a4 4 0 0 0-8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className={style.trustTitle}>30-day returns</p>
              <p className={style.trustSub}>Easy, no-question returns</p>
            </div>
          </div>
          <div className={style.trustItem}>
            <span className={style.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3 4 7v6c0 4.4 3.4 7.4 8 8 4.6-.6 8-3.6 8-8V7l-8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="m9 12 2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className={style.trustTitle}>Secure checkout</p>
              <p className={style.trustSub}>Your details stay safe</p>
            </div>
          </div>
          <div className={style.trustItem}>
            <span className={style.trustIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 13a8 8 0 0 1 16 0v3H4v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 16v2a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className={style.trustTitle}>Real support</p>
              <p className={style.trustSub}>We answer, plain and simple</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="eyebrow">Shop by interest</span>
              <h2>Browse the aisles</h2>
            </div>
          </div>
          <div className={style.catChips}>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Everything
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10 3v2M14 3v2M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Electronics
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s-7-4.6-9.5-9C.8 8.6 2.6 5.5 5.5 5.5c1.9 0 3.4 1 4.3 2.4.9-1.4 2.4-2.4 4.3-2.4 2.9 0 4.7 3.1 3 6.5-2.5 4.4-9 9-9 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              Fragrances
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21c-4.4 0-7.5-3.4-7.5-7.5C4.5 9 8 6.3 8 3c3.5 2.2 5.5 5.1 5.5 8H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Skincare
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 8h16l-1.6 11a2 2 0 0 1-2 1.7H7.6a2 2 0 0 1-2-1.7L4 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8.5 10V6.5a3.5 3.5 0 0 1 7 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Groceries
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9.5 12 4l9 5.5v11H3v-11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 20.5v-6h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              Home &amp; furniture
            </Link>
            <Link to="/product" className={style.catChip}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h11v12H4V7ZM15 11h5v6h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="9.5" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Fashion
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="eyebrow">Picked for you</span>
              <h2>Trending right now</h2>
              <p>Our most-watched products from the live catalog.</p>
            </div>
            <Link to="/product" className={style.viewAll}>
              View all products
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {apiResponse.length > 0 ? (
            <div className={style.grid}>
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="muted">Loading featured picks…</p>
          )}
        </div>
      </section>

      {/* Promo band */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={style.promo}>
            <div className={style.promoInner}>
              <div>
                <h2 className={style.promoTitle}>One catalog, every category.</h2>
                <p className={style.promoSub}>
                  From tech to home to self-care — every product detail in one
                  place, ready when you are.
                </p>
              </div>
              <Link to="/product" className={`btn btn--lg ${style.promoBtn}`}>
                Start exploring
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;