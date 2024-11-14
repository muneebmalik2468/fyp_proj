const express = require("express");
const app = express();

const User = require("../../models/User");
const Order = require("../../models/Order");

const jwt = require("jsonwebtoken");

const path = require("path");
const cors = require("cors");
const { verifyAuthenticated } = require("../../helpers/verifyAuthenticated");
const { verifyToken } = require("../../helpers/verifyToken");


app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.post("/signup", verifyAuthenticated, async (request, response) => {
    let check = await User.findOne({ email: request.body.email });
    if (check) {
        return response.status(400).json({ success: false, error: "user exists" });
    }
    let cart = new Array(300).fill(0);
    // for (let i = 0; i < 300; i++) {
    //     cart[i]=0;
    // }
    const user = new User({
        name: request.body.username,
        email: request.body.email,
        password: request.body.password,
        cartData: cart,
    })
    await user.save();
    const data = {
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecomm');
    response.json({ success: true, token })
})

// -------------------------------------------------------------

app.post('/login', verifyAuthenticated, async (request, response) => {
    let user = await User.findOne({ email: request.body.email });
    if (user) {
        const passwordCheck = request.body.password === user.password;
        if (passwordCheck) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecomm');
            response.json({ success: true, token });
        } else {
            response.json({ success: false, error: "Wrong Credentials" })
        }
    } else {
        response.json({ success: false, error: "Wrong Email" })
    }
});

// -------------------------------------------------------------

app.post('/adminlogin', verifyAuthenticated, async (request, response) => {
    let user = await User.findOne({ email: request.body.email });
    if (!user) {
        response.json({ success: false, error: "User not found" })
    } else {
        if (user.role === true) {
            const passwordCheck = request.body.password === user.password;
            if (passwordCheck) {
                const data = {
                    user: {
                        id: user.id
                    }
                }
                const token = jwt.sign(data, 'secret_ecomm');
                response.json({ success: true, token });
            } else {
                response.json({ success: false, error: "Wrong Credentials" })
            }
        } else {
            response.json({ success: false, error: "You are not allowed" })
        }
    }
});

// -------------------------------------------------------------

app.post('/addtocart', verifyToken, async (request, response) => {
    console.log("added", request.body.itemId);
    let userData = await User.findOne({ _id: request.user.id });
    userData.cartData[request.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: request.user.id }, { cartData: userData.cartData });
    response.send("Added")
})

// -------------------------------------------------------------

app.post("/removecart", verifyToken, async (request, response) => {
    console.log("removed", request.body.itemId);
    let userData = await User.findOne({ _id: request.user.id });
    if (userData.cartData[request.body.itemId] > 0)
        userData.cartData[request.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id: request.user.id }, { cartData: userData.cartData });
    response.send("Removed")
})

// -------------------------------------------------------------

app.post("/getcart", verifyToken, async (request, response) => {
    // console.log("cart data fetched");
    let userData = await User.findOne({ _id: request.user.id })
    response.json(userData.cartData)
})


app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port" + port)
    } else {
        console.log("Error" + error)
    }
})
