import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'User',
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            }
        }
    ],
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        country:{type:String,required:true},
    },
    paymentMethod: {
        type: String,
        required: true,
        default:"Paypal",
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address:{type:String},
    },
    taxPrice: {
        type: Number,
        required: true,
        default:0.0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default:false,
    },
    paidAt: {
        type:Date,
    },
    deliveredAt: {
        type:Date,
    }

    
},
    {
        timestamps: true
    }
)

const Order = mongoose.model("Order", userSchema)
export default Order