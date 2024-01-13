import dbConnect from "@/lib/DB";
import UserModel from "@/lib/Models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const Users = await UserModel.find();
    if (!Users || Users?.length === 0) {
      return NextResponse.json({ message: "No User To Show" }, { status: 404 });
    }
    return NextResponse.json({ message: "Success", Users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || error },
      { status: 500 }
    );
  }
}
