import mongoose from "mongoose";
const {schema, model} = mongoose;

const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    },
    coverpic: {
        type: String,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = model("User", userSchema);
export default mongoose.models.User || User;