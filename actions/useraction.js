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