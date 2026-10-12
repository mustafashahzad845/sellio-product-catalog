import React from "react";
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <>
      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={style.story}>
            <div>
              <span className="eyebrow">Our story</span>
              <h2>Built around better browsing.</h2>
              <p className={style.storyLead}>
                Finding a product should feel as good as getting it.
              </p>
              <p className={style.storyText}>
                Most catalogs bury what you actually need behind banners,
                badges and noise. Sellio strips that away: every product gets
                its full set of facts — price, stock, shipping, reviews — on
                one honest page.
              </p>
              <p className={style.storyText}>
                The catalog is live data, refreshed from a public product API,
                with search that actually filters as you type.
              </p>

              <ul className={style.storyList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Product details, not just pictures
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Search that keeps your filters intact
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  A store that works on any screen
                </li>
              </ul>
            </div>

            <div className={style.storyCard}>
              <h3 className={style.storyCardTitle}>The Sellio promise</h3>
              <p className={style.storyCardText}>
                What you see is what we show: real specs, real prices, real
                reviews — nothing padded.
              </p>
              <div className={style.storyDivider} />
              <div className={style.storyCardRow}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Facts over frills
              </div>
              <div className={style.storyCardRow}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                Honest pricing
              </div>
              <div className={style.storyCardRow}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Clear shipping
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--paper-soft)" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__text">
              <span className="eyebrow">What we stand for</span>
              <h2>Four values, no exceptions</h2>
            </div>
          </div>

          <div className={style.values}>
            <div className={style.valueCard}>
              <span className={style.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 13a8 8 0 0 1 16 0v3H4v-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M8 16v2a2 2 0 0 0 2 2h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className={style.valueTitle}>Quality first</h3>
              <p className={style.valueText}>
                Every listing carries complete, verified details so you know
                exactly what you&apos;re getting.
              </p>
            </div>

            <div className={style.valueCard}>
              <span className={style.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3 4 7v6c0 4.4 3.4 7.4 8 8 4.6-.6 8-3.6 8-8V7l-8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m9 12 2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className={style.valueTitle}>Honest prices</h3>
              <p className={style.valueText}>
                The price you read is the price that matters. Discounts are
                shown plainly, never dressed up.
              </p>
            </div>

            <div className={style.valueCard}>
              <span className={style.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className={style.valueTitle}>Clear shipping</h3>
              <p className={style.valueText}>
                Delivery windows and return rules live on every product page —
                before you decide, not after.
              </p>
            </div>

            <div className={style.valueCard}>
              <span className={style.valueIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7h11v12H4V7ZM15 11h5v6h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <circle cx="9.5" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <h3 className={style.valueTitle}>Questions welcome</h3>
              <p className={style.valueText}>
                Reach us through the contact page and get a straight answer —
                no scripts, no runaround.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;