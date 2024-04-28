import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helper/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { userName, email, password } = await request.json();
  } catch (error) {
    console.error("Error registering a user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering a user",
      },
      {
        status: 500,
      }
    );
  }
}
