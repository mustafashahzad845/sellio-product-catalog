import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./productDetailsCard.module.css";

const ProductDetailsCard = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product?.thumbnail || "");
  const discount = product?.discountPercentage || 0;
  const wasPrice =
    discount > 0 ? (product?.price / (1 - discount / 100)).toFixed(2) : null;

  useEffect(() => {
    setActiveImg(product?.thumbnail || "");
  }, [product?.thumbnail]);

  const rating = Math.round(product?.rating || 0);
  const stock = product?.stock || 0;

  const stockClass =
    stock > 10 ? style.stockOk : stock > 0 ? style.stockLow : style.stockNone;
  const stockText =
    stock > 10 ? "In stock" : stock > 0 ? `Only ${stock} left` : "Out of stock";

  const renderStars = (value) =>
    [0, 1, 2, 3, 4].map((i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className={`${style.star} ${i < value ? style.starOn : ""}`}
        aria-hidden="true"
      >
        <path d="M12 3.6l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.6-5 2.6.9-5.6-4-4 5.6-.8L12 3.6Z" />
      </svg>
    ));

  const hasObject = (obj) => obj && Object.keys(obj).length > 0;

  return (
    <div className="container">
      {/* Breadcrumb */}
      <nav className={style.crumbs} aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className={style.crumbsSep} aria-hidden="true">/</span>
        <Link to="/product">Products</Link>
        <span className={style.crumbsSep} aria-hidden="true">/</span>
        <span className={style.crumbsCurrent}>{product?.title}</span>
      </nav>

      {/* Main product */}
      <div className={style.product}>
        {/* Gallery */}
        <div className={style.gallery}>
          <div className={style.mainImg}>
            {discount > 0 && (
              <span className={style.discountBadge}>
                -{Math.round(discount)}% off
              </span>
            )}
            <img src={activeImg} alt={product?.title} />
          </div>

          {product?.images?.length > 0 && (
            <div className={style.thumbs}>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${style.thumbBtn} ${activeImg === image ? style.thumbActive : ""}`}
                  onClick={() => setActiveImg(image)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={activeImg === image}
                >
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className={style.info}>
          <div>
            <span className={style.categoryLabel}>{product?.category}</span>
            <h1 className={style.infoTitle}>{product?.title}</h1>
          </div>

          <div className={style.ratingRow}>
            <span className={style.stars} aria-hidden="true">
              {renderStars(rating)}
            </span>
            <span className={style.ratingValue}>{product?.rating}</span>
            <span className={style.ratingMeta}>
              {product?.reviews?.length
                ? `${product.reviews.length} customer review${product.reviews.length === 1 ? "" : "s"}`
                : "No reviews yet"}
            </span>
          </div>

          <div className={style.priceBlock}>
            <span className={style.priceNow}>${product?.price}</span>
            {wasPrice && <span className={style.priceWas}>${wasPrice}</span>}
            {discount > 0 && (
              <span className={style.priceOff}>{Math.round(discount)}% off</span>
            )}
          </div>

          <p className={style.description}>{product?.description}</p>

          <div className={style.metaGrid}>
            <div className={style.metaChip}>
              <span>Brand</span>
              <b>{product?.brand}</b>
            </div>
            <div className={style.metaChip}>
              <span>SKU</span>
              <b>{product?.sku}</b>
            </div>
            <div className={style.metaChip}>
              <span>Availability</span>
              <b className={stockClass}>{stockText}</b>
            </div>
            <div className={style.metaChip}>
              <span>Minimum order</span>
              <b>{product?.minimumOrderQuantity}</b>
            </div>
          </div>

          <div className={style.trustList}>
            <div className={style.trustItem}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              {product?.shippingInformation}
            </div>
            <div className={style.trustItem}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16 10V7a4 4 0 0 0-8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              {product?.returnPolicy}
            </div>
            <div className={style.trustItem}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3 4 7v6c0 4.4 3.4 7.4 8 8 4.6-.6 8-3.6 8-8V7l-8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 14.5 11 17l5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {product?.warrantyInformation}
            </div>
          </div>

          <div className={style.ctaRow}>
            <button type="button" className={`btn btn--primary btn--lg ${style.ctaBtn}`}>
              Add to cart
            </button>
            <button type="button" className={`btn btn--secondary btn--lg ${style.ctaBtn}`}>
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Details + policies */}
      <div className={style.detailGrid} style={{ marginTop: "40px" }}>
        <div className={style.panel}>
          <h2 className={style.panelTitle}>Product details</h2>
          <p className={style.panelSub}>Everything listed, plainly.</p>
          <div className={style.specList}>
            <div className={style.specRow}>
              <span className={style.specLabel}>ID</span>
              <span className={style.specValue}>{product?.id}</span>
            </div>
            <div className={style.specRow}>
              <span className={style.specLabel}>Brand</span>
              <span className={style.specValue}>{product?.brand}</span>
            </div>
            <div className={style.specRow}>
              <span className={style.specLabel}>Category</span>
              <span className={style.specValue}>{product?.category}</span>
            </div>
            <div className={style.specRow}>
              <span className={style.specLabel}>Stock</span>
              <span className={style.specValue}>{product?.stock} units</span>
            </div>
            <div className={style.specRow}>
              <span className={style.specLabel}>Weight</span>
              <span className={style.specValue}>{product?.weight} g</span>
            </div>
            <div className={style.specRow}>
              <span className={style.specLabel}>Tags</span>
              <span className={style.specValue}>{product?.tags?.join(", ")}</span>
            </div>
            {hasObject(product?.dimensions) && (
              <div className={style.specRow}>
                <span className={style.specLabel}>Dimensions</span>
                <span className={style.specValue}>
                  {product.dimensions.width} × {product.dimensions.height} ×{" "}
                  {product.dimensions.depth} cm
                </span>
              </div>
            )}
            <div className={style.specRow}>
              <span className={style.specLabel}>Barcode</span>
              <span className={style.specValue}>{product?.meta?.barcode}</span>
            </div>
          </div>
        </div>

        <div className={style.panel}>
          <h2 className={style.panelTitle}>Shipping &amp; policies</h2>
          <p className={style.panelSub}>Before you decide.</p>
          <div className={style.policyCard}>
            <span className={style.policyIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <div>
              <p className={style.policyTitle}>Warranty</p>
              <p className={style.policyText}>{product?.warrantyInformation}</p>
            </div>
          </div>
          <div className={style.policyCard}>
            <span className={style.policyIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7.5h13V16a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16.5 10h2.6l2.4 3v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className={style.policyTitle}>Shipping</p>
              <p className={style.policyText}>{product?.shippingInformation}</p>
            </div>
          </div>
          <div className={style.policyCard}>
            <span className={style.policyIcon}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 10h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M16 10V7a4 4 0 0 0-8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <p className={style.policyTitle}>Returns</p>
              <p className={style.policyText}>{product?.returnPolicy}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {product?.reviews?.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2>Customer reviews</h2>
          <div className={style.reviewList} style={{ marginTop: "18px" }}>
            {product.reviews.map((review, index) => (
              <div key={index} className={style.review}>
                <div className={style.reviewHead}>
                  <span className={style.reviewName}>{review.reviewerName}</span>
                  <span className={style.reviewDate}>
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <span className={style.reviewStars} aria-hidden="true">
                  {renderStars(Math.round(review.rating))}
                </span>
                <p className={style.reviewComment}>{review.comment}</p>
                <p className={style.reviewEmail}>{review.reviewerEmail}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All images */}
      {product?.images?.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2>All product images</h2>
          <div className={style.imageGrid} style={{ marginTop: "18px" }}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} — image ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      {/* Metadata + QR */}
      {hasObject(product?.meta) && (
        <div style={{ marginTop: "40px" }}>
          <div className={style.panel}>
            <h2 className={style.panelTitle}>Metadata</h2>
            <p className={style.panelSub}>Record information for this product.</p>
            <div className={style.specList}>
              <div className={style.specRow}>
                <span className={style.specLabel}>Created at</span>
                <span className={style.specValue}>{product?.meta?.createdAt}</span>
              </div>
              <div className={style.specRow}>
                <span className={style.specLabel}>Updated at</span>
                <span className={style.specValue}>{product?.meta?.updatedAt}</span>
              </div>
              <div className={style.specRow}>
                <span className={style.specLabel}>Barcode</span>
                <span className={style.specValue}>{product?.meta?.barcode}</span>
              </div>
            </div>
            {product?.meta?.qrCode && (
              <div className={style.qrRow} style={{ marginTop: "18px" }}>
                <img src={product.meta.qrCode} alt="Product QR code" />
                <p className="muted" style={{ fontSize: "0.9rem" }}>
                  Scan the QR code to re-find this product later.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <Link to="/product" className={style.backLink}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to all products
      </Link>
    </div>
  );
};

export default ProductDetailsCard;