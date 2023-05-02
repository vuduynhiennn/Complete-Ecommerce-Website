const expressAsyncHandler = require('express-async-handler');
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
    },
    slug:{
        type:String,
        required:true, 
        lowercase: true,
        unique: true
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sold: {
        type: Number, 
        default: 0,
    },
    quantity: {
        type: Number,
        required: true,
    },
    images: [],
    color: {
        type: String,
        required: true
    },
    ratings: [{
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }],
    totalrating: {
        type: String,
        default: 0
    }
}, { timestamps: true });

//Export the model
module.exports = mongoose.model('Product', productSchema);