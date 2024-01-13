import { Products_Attributes, User_Netsted, images } from "@/types/types";
import mongoose, { Document, Mongoose } from "mongoose";

interface Products extends Document {
  name: string;
  description: string;
  slug: string;
  price: number;
  category: string;
  rating: number;
  brand: string;
  stock_Qty: number;
  images: images[];
  attributes: Products_Attributes;
  reviews: User_Netsted;
  descount: string;
  createdBy: User_Netsted;
}

const Schema = new mongoose.Schema<Products>(
  {
    name: {
      type: String,
      required: [true, "please enter your products name"],
    },
    slug: {
      type: String,
      required: [true, "please enter the slug value to show in url"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "please enter your description"],
    },
    price: {
      type: Number,
      required: [true, "please enter the price of this product"],
    },
    category: [String],
    rating: {
      type: Number,
      default: 0,
    },
    brand: {
      type: String,
    },
    stock_Qty: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        secure_url: String,
        format: String,
        etag: String,
        resource_type: String,
        createdAt: { type: Date, default: new Date() },
      },
    ],
    attributes: {
      color: {
        type: [String],
      },
      size: {
        type: [String],
      },
      weight: {
        type: [String],
      },
    },
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
        name: { type: String },
        rating: Number,
        comment: String,
        createdAt: { type: Date, default: new Date() },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", Schema);
