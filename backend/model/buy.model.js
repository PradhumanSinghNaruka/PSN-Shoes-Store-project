import { text } from "express";
import mongoose from "mongoose";

const buySchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {  
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const Buy = mongoose.model("Buy", buySchema);
export default Buy;
