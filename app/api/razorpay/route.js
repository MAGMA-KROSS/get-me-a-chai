import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Payment from "@/models/payments";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req) => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);

    // 2. Get form data from Razorpay
    let body = await req.formData();
    body = Object.fromEntries(body); // Convert to plain object

    // 3. Find matching payment in DB
    const p = await Payment.findOne({ orderId: body.razorpay_order_id });
    if (!p) {
      return NextResponse.json(
        { success: false, message: "Payment not found" },
        { status: 404 }
      );
    }

    // 4. Get Razorpay secret from env
    const secret = process.env.RAZOR_SECRET;
    if (!secret || typeof secret !== "string") {
      throw new Error("RAZOR_SECRET is not defined or invalid in .env.local");
    }

    // 5. Validate Razorpay signature
    const verified = validatePaymentVerification(
      {
        order_id: body.razorpay_order_id,
        payment_id: body.razorpay_payment_id,
        signature: body.razorpay_signature,
      },
      secret
    );

    // 6. If verified, update DB and redirect
    if (verified) {
      const updatedPayment = await Payment.findByIdAndUpdate(
        p._id,
        { done: true },
        { new: true }
      );
      return NextResponse.redirect(
        `http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error("❌ API ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error", error: err.message },
      { status: 500 }
    );
  }
};
