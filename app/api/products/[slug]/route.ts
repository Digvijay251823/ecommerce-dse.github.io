import dbConnect from "@/lib/DB";
import ProductsModel from "@/lib/Models/ProductsModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    await dbConnect();
    const Product = await ProductsModel.findOne({ slug: slug });
    if (!Product) {
      return NextResponse.json(
        { message: "Product Not Found" },
        { status: 404 }
      );
    }
    if (Product?.reviews?.length > 0) {
      Product.populate("reviews", "user name rating comment createdAt");
    }
    return NextResponse.json(
      { message: "Success", data: Product },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
