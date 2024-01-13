import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Avatar: {
      type: String,
    },
    authToken: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
    addresses: [
      {
        type: String,
        enum: ["Shipping", "Billing"],
        default: "Billing",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders",
      },
    ],
    cart: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
      },
    ],
    cartcount: {
      type: Number,
      default: 0,
    },
    paymentMethods: [
      {
        type: String,
        lastFourDigits: String,
        expiryDate: String,
      },
    ],
    paymentHistory: [
      {
        payment: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Payments",
        },
      },
    ],
    wishlistCount: {
      type: Number,
      default: 0,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Users || mongoose.model("Users", Schema);
