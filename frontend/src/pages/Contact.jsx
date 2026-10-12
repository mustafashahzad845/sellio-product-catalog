import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className={style.grid}>
            {/* Form (UI only — submissions are not wired) */}
            <form
              className={style.formCard}
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className={style.formTitle}>Send a message</h2>
              <p className={style.formSub}>
                Fill in your details and we&apos;ll get back to you.
              </p>

              <div className={style.field}>
                <label className={style.label} htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  className={style.input}
                  type="text"
                  autoComplete="name"
                  placeholder="Jamal Ahmed"
                />
              </div>

              <div className={style.row}>
                <div className={style.field}>
                  <label className={style.label} htmlFor="contact-email">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    className={style.input}
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className={style.field}>
                  <label className={style.label} htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    className={style.input}
                    type="text"
                    placeholder="Order question, feedback…"
                  />
                </div>
              </div>

              <div className={style.field}>
                <label className={style.label} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className={style.textarea}
                  placeholder="Tell us what you need…"
                />
              </div>

              <div className={style.field}>
                <button type="submit" className="btn btn--primary btn--lg">
                  Send message
                </button>
                <p className={style.formNote}>
                  We usually reply within one business day.
                </p>
              </div>
            </form>

            {/* Info side */}
            <aside className={style.side}>
              <div className={style.infoCard}>
                <h3 className={style.infoCardTitle}>Reach us</h3>
                <div className={style.infoRow}>
                  <span className={style.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <circle cx="12" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </span>
                  <div>
                    <b>Visit</b>
                    <span>123 Bridge Street, Shop 4</span>
                  </div>
                </div>
                <div className={style.infoRow}>
                  <span className={style.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 5.8C4 4.8 4.8 4 5.8 4h2.4c.6 0 1.1.4 1.3 1l1 3c.2.6 0 1.2-.4 1.6l-1.1 1.1a12 12 0 0 0 5.3 5.3l1.1-1.1c.4-.4 1-.6 1.6-.4l3 1c.6.2 1 .7 1 1.3v2.4c0 1-.8 1.8-1.8 1.8C9.6 20.8 3.2 14.4 4 5.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <b>Call or email</b>
                    <span>+92 300 000 0000</span>
                    <span>hello@sellio.store</span>
                  </div>
                </div>
                <div className={style.infoRow}>
                  <span className={style.infoIcon}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div>
                    <b>Hours</b>
                    <span>Mon–Sat · 9am – 6pm</span>
                  </div>
                </div>
              </div>

              <div className={style.infoCard}>
                <h3 className={style.infoCardTitle}>Before you write</h3>
                <p style={{ color: "var(--ink-700)", fontSize: "0.95rem" }}>
                  Order and delivery details already live on every product page
                  — warranty, shipping window and return policy. Checking there
                  first usually answers the question.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;