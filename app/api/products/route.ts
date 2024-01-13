import dbConnect from "@/lib/DB";
import ProductsModel from "@/lib/Models/ProductsModel";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { images } from "@/types/types";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDE_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Products = await ProductsModel.find();
    if (!Products || Products?.length === 0) {
      return NextResponse.json(
        { message: "No Products To Show" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Success", data: Products },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const formData = await req.formData();
    const slug = formData.get("slug")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const price = formData.get("price")?.valueOf();
    const category = formData.get("category")?.toString();
    const brand = formData.get("brand")?.toString();
    const stock_Qty = formData.get("stock_Qty")?.valueOf();
    const attributes = formData.get("attributes")?.valueOf();
    const files = formData.getAll("image") as File[];
    const Product = await ProductsModel.findOne({ slug });
    if (Product) {
      return NextResponse.json(
        { message: "This slug already exists try another one" },
        { status: 400 }
      );
    }
    // Array to store Cloudinary upload promises
    const uploadPromises: Promise<any>[] = [];

    for (const file of files) {
      // Convert each file to a buffer

      const arrayBuffer = await file.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);

      const uploadPromise = new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {},
          function (error, result) {
            if (error) {
              reject(error);
            } else {
              const imageData: images = {
                public_id: result?.public_id,
                secure_url: result?.secure_url,
                format: result?.format,
                etag: result?.etag,
                resource_type: result?.resource_type,
              };
              resolve(imageData);
            }
          }
        );
        // Pipe the buffer to the Cloudinary upload stream
        uploadStream.end(buffer);
      });
      uploadPromises.push(uploadPromise);
    }
    // Wait for all uploads to complete
    const results: images[] = await Promise.all(uploadPromises);
    const ProductCreated = await ProductsModel.create({
      name,
      slug,
      description,
      price,
      category,
      brand,
      stock_Qty,
      attributes,
      images: results,
      createdBy: "SYSTEM",
    });
    return NextResponse.json(
      { message: "Product Created Successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}

/*
    
    
     */
