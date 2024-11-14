const mongoose = require("../config/db");
const Order = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
    },
    status: {
        type: String,
        default: "pending"
    },
    cartItems: { // Add cartItems field
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("orders", Order);





// const mongoose = require("../config/db");


// const Order = new mongoose.Schema({
//     id:{
//         type: Number,
//         required: true
//     },
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: String,
//         required: true
//     },
//     contact:{
//         type: Number,
//         required: true
//     },
//     total:{
//         type: Number,
//         // required: true
//     },
//     status:{
//         type: String,
//         default: "pending"
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = mongoose.model("orders", Order);