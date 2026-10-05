import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discountPercentage: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    brand: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    weight: {
      type: Number,
    },

    dimensions: {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      depth: {
        type: Number,
      },
    },

    warrantyInformation: {
      type: String,
    },

    shippingInformation: {
      type: String,
    },

    availabilityStatus: {
      type: String,
    },

    reviews: [
      {
        rating: Number,
        comment: String,
        date: Date,
        reviewerName: String,
        reviewerEmail: String,
      },
    ],

    returnPolicy: {
      type: String,
    },

    minimumOrderQuantity: {
      type: Number,
      default: 1,
    },

    meta: {
      createdAt: String,
      updatedAt: String,
      barcode: String,
      qrCode: String,
    },

    images: {
      type: [String],
      default: [],
    },

    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

export default Product;