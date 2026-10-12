import { Link } from "react-router-dom";
import style from "./card.module.css";

const ProductCard = ({ product }) => {
  const id = product?.id;
  const discount = product?.discountPercentage || 0;
  const wasPrice = discount > 0
    ? (product?.price / (1 - discount / 100)).toFixed(2)
    : null;

  const rating = Math.round(product?.rating || 0);
  const inStock = (product?.stock || 0) > 0;

  return (
    <Link to={`/product-details/${id}`} className={style.card}>
      <div className={style.media}>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className={style.thumb}
        />
        {discount > 0 && (
          <span className={style.badge}>-{Math.round(discount)}%</span>
        )}
      </div>

      <div className={style.body}>
        <span className={style.category}>{product.category}</span>
        <h3 className={style.title}>{product.title}</h3>

        <div className={style.rating} aria-label={`Rating ${product.rating} out of 5`}>
          <span className={style.stars} aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className={`${style.star} ${i < rating ? style.starOn : ""}`}
              >
                <path d="M12 3.6l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.6-5 2.6.9-5.6-4-4 5.6-.8L12 3.6Z" />
              </svg>
            ))}
          </span>
          <span className={style.ratingValue}>{product.rating}</span>
          <span className={style.stock} aria-hidden="true">
            {inStock ? "In stock" : "Out of stock"}
          </span>
        </div>

        <div className={style.priceRow}>
          <span className={style.price}>${product.price}</span>
          {wasPrice && <span className={style.was}>${wasPrice}</span>}
        </div>

        <span className={style.view}>
          View details
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;