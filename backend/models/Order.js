const mongoose = require("mongoose");

 const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    size: String,
    color: String,
    quantity: {
        type: Number,
    },
}, 
 { _id: false }
);


const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItem: [orderItemSchema],
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true, match: [/^\d{6}$/, 'Enter a valid 6-digit PIN code'] },
        phone: { type: String, required: true, match: [/^\d{10}$/, 'Enter a valid 10-digit phone number'],},
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: true,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
    paymentStatus: {
        type: String,
        default: "paid",
    },
    status: {
        type: String,
        enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Processing",
    },
},
 { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema)