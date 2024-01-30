import mongoose from "mongoose";

interface images {
  public_id: string;
  secure_url: string;
  format?: string;
  etag?: string;
  resource_type?: string;
  createdAt?: string;
}

interface Products_Attributes {
  color?: string[];
  weight?: string;
  material?: string;
  size?: string;
}

interface User_Netsted {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  createdAt: string;
}

interface Products {
  _id?: string;
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
