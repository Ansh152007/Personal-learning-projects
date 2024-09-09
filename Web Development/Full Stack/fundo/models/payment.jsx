import mongoose from "mongoose";
const {schema, model} = mongoose;

const paymentSchema = new schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    from_user: { type: String, required: true },
    amount: { type: Number, required: true },
    oid: { type: String, required: true },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});

const Payment = model("Payment", paymentSchema);
export default mongoose.models.Payment || Payment;
