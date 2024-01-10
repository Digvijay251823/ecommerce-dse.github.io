import mongoose from "mongoose";

interface images {
  public_id: string;
  secure_url: string;
  format: string;
  createdAt: string;
  etag: string;
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
