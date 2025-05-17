import mongoose from "mongoose";

const opticalShopSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "shop_owner"
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

const OpticalShop = mongoose.model("OpticalShop", opticalShopSchema);

export default OpticalShop;
