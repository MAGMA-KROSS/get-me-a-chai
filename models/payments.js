const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name:{type:String},
    to_user: { type: String, required: true },
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    message: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
});


const Payment = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

module.exports = Payment;