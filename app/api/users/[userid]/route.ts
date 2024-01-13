import dbConnect from "@/lib/DB";
import UserModel from "@/lib/Models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { userid } }: { params: { userid: string } }
) {
  try {
    await dbConnect();
    const User = await UserModel.findOne({ _id: userid });
    if (!User) {
      return NextResponse.json({ message: "No User Found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Success", data: User },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
