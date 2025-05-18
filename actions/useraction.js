"use server"

import Razorpay from "razorpay"
import Payment from "@/models/payments"
import mongoose from "mongoose"
import User from "@/models/user"

export const initiate = async (amount, to_user, paymentform) => {
    await mongoose.connect(process.env.MONGO_URI);
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAZOR_KEY, key_secret: process.env.RAZOR_SECRET })

    
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)
    await Payment.create({
        name: paymentform.name,
        to_user: to_user,
        orderId: x.id,
        amount: amount,
        message: paymentform.message
    })
    return x
}

export const fetchuser = async (username) => {
    await mongoose.connect(process.env.MONGO_URI);

    const u = await User.findOne({ username });
    if (!u) return null;

    const user = u.toObject();

    // Convert non-serializable fields
    user._id = user._id.toString();
    user.createdAt = user.createdAt?.toISOString();
    user.updatedAt = user.updatedAt?.toISOString();

    return user;
};

export const fetchpayments = async (username) => {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Get payments and sort them
    let payments = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .lean();
    
    // Serialize each payment object
    const serializedPayments = payments.map(payment => ({
        _id: payment._id.toString(),
        name: payment.name,
        to_user: payment.to_user,
        orderId: payment.orderId,
        amount: payment.amount,
        message: payment.message,
        done: payment.done,
        createdAt: payment.createdAt ? payment.createdAt.toISOString() : null,
        updatedAt: payment.updatedAt ? payment.updatedAt.toISOString() : null
    }));
    
    return serializedPayments;
}