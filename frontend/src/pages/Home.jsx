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
          <span className="eyebrow">Sellio catalog</span>
          <h1 className={style.heroTitle}>
            Everything you need, in one clean store.
          </h1>
          <p className={style.heroSub}>
            Browse every product in the catalog, search by name, and check the
            full details — price, stock, shipping and reviews — before you
            decide.
          </p>
          <div className={style.heroCta}>
            <Link to="/product" className="btn btn--primary btn--lg">
              Browse products
            </Link>
            <Link to="/about" className="btn btn--secondary btn--lg">
              About Sellio
            </Link>
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
            <Link to="/product" className={style.catChip}>Everything</Link>
            <Link to="/product" className={style.catChip}>Electronics</Link>
            <Link to="/product" className={style.catChip}>Fragrances</Link>
            <Link to="/product" className={style.catChip}>Skincare</Link>
            <Link to="/product" className={style.catChip}>Groceries</Link>
            <Link to="/product" className={style.catChip}>Home &amp; furniture</Link>
            <Link to="/product" className={style.catChip}>Fashion</Link>
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
    </>
  );
};

export default Home;