import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["Completed", "Incomplete", "Cancelled"],
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payments",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Orders || mongoose.model("Orders", Schema);
