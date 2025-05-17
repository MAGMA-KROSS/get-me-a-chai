// Enhanced razorpay route with better debugging and error handling

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Payment from "@/models/payments";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req) => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // 2. Get form data from Razorpay
    let body = await req.formData();
    body = Object.fromEntries(body); // Convert to plain object
    console.log("📦 Payment data received:", { 
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
      // Don't log signature in production
    });

    // 3. Find matching payment in DB
    const p = await Payment.findOne({ orderId: body.razorpay_order_id });
    if (!p) {
      console.error("❌ Payment not found for order ID:", body.razorpay_order_id);
      return NextResponse.json(
        { success: false, message: "Payment not found" },
        { status: 404 }
      );
    }
    console.log("✅ Found payment record:", { id: p._id, to_user: p.to_user, amount: p.amount });

    // 4. Get Razorpay secret from env
    const secret = process.env.RAZOR_SECRET;
    if (!secret || typeof secret !== "string") {
      console.error("❌ RAZOR_SECRET is missing or invalid");
      throw new Error("RAZOR_SECRET is not defined or invalid in .env.local");
    }
    console.log("✅ Secret available");

    // 5. Validate Razorpay signature - FIXED METHOD
    let verified = false;
    try {
      verified = validatePaymentVerification(
        { order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id },
        body.razorpay_signature,
        secret
      );
      console.log(`${verified ? "✅" : "❌"} Payment verification:`, verified);
    } catch (verifyError) {
      console.error("❌ Verification error:", verifyError.message);
      return NextResponse.json(
        { success: false, message: "Payment verification error", error: verifyError.message },
        { status: 400 }
      );
    }

    // 6. If verified, update DB and redirect
    if (verified) {
      try {
        // Using await to ensure the update is complete before redirect
        const updatedPayment = await Payment.findByIdAndUpdate(
          p._id,
          { done: true },
          { new: true }
        );
        
        if (!updatedPayment) {
          console.error("❌ Failed to update payment status");
          return NextResponse.json(
            { success: false, message: "Failed to update payment status" },
            { status: 500 }
          );
        }
        
        console.log("✅ Payment marked as done:", { 
          id: updatedPayment._id, 
          done: updatedPayment.done 
        });
        
        // Double-check the update
        const verifyUpdate = await Payment.findById(p._id);
        console.log("✅ Verification of update:", { done: verifyUpdate.done });
        
        return NextResponse.redirect(
          `http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`
        );
      } catch (updateError) {
        console.error("❌ Database update error:", updateError);
        return NextResponse.json(
          { success: false, message: "Database update error", error: updateError.message },
          { status: 500 }
        );
      }
    } else {
      console.log("❌ Payment verification failed");
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