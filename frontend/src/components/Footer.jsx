import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* Newsletter strip */}
      <div className={`container ${style.newsRow}`}>
        <div className={style.newsText}>
          <h3 className={style.newsTitle}>Stay in the loop</h3>
          <p className={style.newsSub}>
            Get notified when new picks land in the catalog.
          </p>
        </div>
        <div className={style.newsForm}>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            className={style.newsInput}
            placeholder="you@example.com"
            autoComplete="email"
          />
          <button type="button" className={`btn btn--primary ${style.newsBtn}`}>
            Subscribe
          </button>
        </div>
      </div>

      <div className={`container ${style.main}`}>
        {/* Brand */}
        <div className={style.brandCol}>
          <div className={style.brand}>
            <svg
              className={style.brandIcon}
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
            </svg>
            <span className={style.brandName}>Sellio</span>
          </div>
          <p className={style.tagline}>
            A clean, everyday product catalog — browse the full store, compare
            quickly, and find exactly what you&apos;re after.
          </p>
          <div className={style.socials}>
            <a
              href="https://instagram.com/sellio.store"
              target="_blank"
              rel="noreferrer"
              className={style.social}
              aria-label="Sellio on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://twitter.com/sellio.store"
              target="_blank"
              rel="noreferrer"
              className={style.social}
              aria-label="Sellio on X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.7 3H21l-7.2 8.2L22.2 21h-6.6l-5.2-6.8L4.5 21H1.2l7.7-8.8L1.8 3h6.8l4.7 6.2L17.7 3Zm-1.2 16h1.8L7.6 4.9H5.7L16.5 19Z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/sellio.store"
              target="_blank"
              rel="noreferrer"
              className={style.social}
              aria-label="Sellio on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.2v3h2.5v7h2.8Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className={style.col}>
          <h4 className={style.colTitle}>Shop</h4>
          <ul className={style.list}>
            <li><Link to="/product">All products</Link></li>
            <li><Link to="/product">Electronics</Link></li>
            <li><Link to="/product">Beauty &amp; care</Link></li>
            <li><Link to="/product">Home &amp; furniture</Link></li>
            <li><Link to="/product">Fashion</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className={style.col}>
          <h4 className={style.colTitle}>Company</h4>
          <ul className={style.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className={style.col}>
          <h4 className={style.colTitle}>Help</h4>
          <ul className={style.list}>
            <li><a href="mailto:hello@sellio.store">hello@sellio.store</a></li>
            <li><span className={style.plain}>Mon–Sat, 9am–6pm</span></li>
            <li><span className={style.plain}>Live chat coming soon</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={style.bottom}>
        <div className={`container ${style.bottomInner}`}>
          <p className={style.copy}>© 2026 Sellio — a demo product catalog.</p>
          <ul className={style.pay} aria-label="Accepted payment methods">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>PayPal</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;