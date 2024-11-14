const express = require("express");
const app = express();

const Order = require("../../models/Order");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const path = require("path");
const cors = require("cors");
const { verifyToken } = require("../../helpers/verifyToken");

const port = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

app.post('/orderprod', async (request, response) => {
    const { name, email, address, contact, total, cartItems } = request.body;

    // Generate Order ID
    let orders = await Order.find({});
    let id;
    if (orders.length > 0) {
        let last_order_array = orders.slice(-1);
        let lastorder = last_order_array[0];
        id = lastorder.id + 1;
    } else {
        id = 1;
    }

    // Create New Order
    const order = new Order({
        id: id,
        name: name,
        email: email,
        address: address,
        contact: contact,
        total: total,
        cartItems: cartItems,  // Store cart items with the order
    });

    await order.save();
    console.log("Order Placed");
    response.json({ success: true });
});


// app.post('/orderprod', async (request, response)=>{
//     let orders = await Order.find({})
//     let id;
//     if(orders.length>0)
//     {
//         let last_order_array = orders.slice(-1);
//         let lastorder = last_order_array[0];
//         id = lastorder.id+1;
//     }else{
//         id = 1;
//     }
//     const order = new Order({
//         id: id,
//         name: request.body.name,
//         email: request.body.email,
//         address: request.body.address,
//         contact: request.body.contact,
//         total: request.body.total
//     });
//     await order.save();
//     console.log("Order Placed");
//     response.json({
//         success:true,
//     })
// })

// -------------------------------------------------------------

app.get("/allorders", async (request, response) => {
    let orders = await Order.find({});
    console.log("all orders fetched")
    response.send(orders);
})


// -------------------------------------------------------------


app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port" + port)
    } else {
        console.log("Error" + error)
    }
})
