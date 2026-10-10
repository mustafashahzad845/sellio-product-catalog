import React from 'react'

const ProductDetailsCard = ({product}) => {
  return (
    <div style={{
maxWidth: "850px",
margin: "30px auto",
padding: "25px",
border: "1px solid #ddd",
borderRadius: "12px",
fontFamily: "Arial, sans-serif",
boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
}}>

  <img
    src={product.thumbnail}
    alt={product.title}
    style={{
      width: "100%",
      height: "280px",
      objectFit: "contain",
    }}
  />

  <h2>{product.title}</h2>
  <p>{product.description}</p>

  <h3>Product Details</h3>
  <p><b>ID:</b> {product.id}</p>
  <p><b>Brand:</b> {product.brand}</p>
  <p><b>Category:</b> {product.category}</p>
  <p><b>SKU:</b> {product.sku}</p>
  <p><b>Price:</b> ${product.price}</p>
  <p><b>Discount:</b> {product.discountPercentage}%</p>
  <p><b>Rating:</b> ⭐ {product.rating}</p>
  <p><b>Stock:</b> {product.stock}</p>
  <p><b>Weight:</b> {product.weight}</p>
  <p><b>Tags:</b> {product.tags?.join(", ")}</p>
  <p><b>Status:</b> {product.availabilityStatus}</p>
  <p><b>Minimum Order Quantity:</b> {product.minimumOrderQuantity}</p>

  <hr />

  <h3>Dimensions</h3>
  <p>Width: {product.dimensions?.width}</p>
  <p>Height: {product.dimensions?.height}</p>
  <p>Depth: {product.dimensions?.depth}</p>

  <hr />

  <h3>Shipping & Policies</h3>
  <p><b>Warranty:</b> {product.warrantyInformation}</p>
  <p><b>Shipping:</b> {product.shippingInformation}</p>
  <p><b>Return Policy:</b> {product.returnPolicy}</p>

  <hr />

  <h3>Customer Reviews</h3>

  {product.reviews?.map((review, index) => (
    <div
      key={index}
      style={{
        backgroundColor: "#f5f5f5",
        padding: "12px",
        marginBottom: "12px",
        borderRadius: "8px",
      }}
    >
      <p><b>{review.reviewerName}</b></p>
      <p>⭐ {review.rating}/5</p>
      <p>{review.comment}</p>
      <p>{new Date(review.date).toLocaleDateString()}</p>
      <p>{review.reviewerEmail}</p>
    </div>
  ))}

  <hr />

  <h3>Metadata</h3>
  <p><b>Created At:</b> {product.meta?.createdAt}</p>
  <p><b>Updated At:</b> {product.meta?.updatedAt}</p>
  <p><b>Barcode:</b> {product.meta?.barcode}</p>

  <img
    src={product.meta?.qrCode}
    alt="Product QR Code"
    style={{ width: "120px", height: "120px" }}
  />

  <hr />

  <h3>All Product Images</h3>

  <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  }}>
    {product.images?.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`${product.title} ${index + 1}`}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "contain",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />
    ))}
  </div>

</div>
  )
}

export default ProductDetailsCard