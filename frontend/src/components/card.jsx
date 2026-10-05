const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      {/* Product Content */}
      <div style={{ padding: "16px" }}>
        <h2
          style={{
            fontSize: "20px",
            margin: "0 0 8px",
            color: "#222",
          }}
        >
          {product.title}
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.5",
            marginBottom: "12px",
          }}
        >
          {product.description}
        </p>

        <p
          style={{
            margin: "6px 0",
            fontSize: "14px",
          }}
        >
          <strong>Brand:</strong> {product.brand}
        </p>

        <p
          style={{
            margin: "6px 0",
            fontSize: "14px",
          }}
        >
          <strong>Category:</strong> {product.category}
        </p>

        <p
          style={{
            margin: "6px 0",
            fontSize: "14px",
          }}
        >
          <strong>Rating:</strong> ⭐ {product.rating}
        </p>

        <p
          style={{
            margin: "6px 0",
            fontSize: "14px",
          }}
        >
          <strong>Stock:</strong> {product.stock}
        </p>

        {/* Price */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "14px 0",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#111",
            }}
          >
            ${product.price}
          </span>

          <span
            style={{
              fontSize: "13px",
              color: "green",
              fontWeight: "bold",
            }}
          >
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* Button */}
        <button
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;