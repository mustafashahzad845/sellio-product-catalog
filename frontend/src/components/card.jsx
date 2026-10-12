import { useNavigate } from "react-router-dom";
import style from "./card.module.css";

const ProductCard = ({ product }) => {
  const id = product?.id;
  const Navigate = useNavigate();

  return (
    <div className={style.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className={style.image}
      />

      <div className={style.content}>
        <h3 className={style.title}>{product.title}</h3>

        <p className={style.price}>
          Price: <span className={style.priceVal}>${product.price}</span>
        </p>

        <p className={style.rating}>Rating: ⭐ {product.rating}</p>

        <button
          className={style.detailsBtn}
          onClick={() => {
            Navigate(`/product-details/${id}`);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;