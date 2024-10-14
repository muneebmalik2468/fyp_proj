const port = 4000;
const express = require("express");
const app = express();
require("./db/config");
const User = require("./db/User")
const Product = require("./db/Product")
const Order = require("./db/Order")
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { request } = require("http");
app.use(express.json());
app.use(cors());




app.get("/", (request, response) => {
    response.send("All OK")
})

// -------------------------------------------

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (request, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage })

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (request, response) => {
    response.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${request.file.filename}`
    })
})

// --------------------------------------------------------------------

app.post('/addproduct', async (request, response) => {
    let products = await Product.find({})
    let id;
    if (products.length > 0) {
        let last_prod_array = products.slice(-1);
        let lastprod = last_prod_array[0];
        id = lastprod.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: request.body.name,
        image: request.body.image,
        category: request.body.category,
        new_price: request.body.new_price,
        old_price: request.body.old_price
    });
    await product.save();
    console.log("Saved");
    response.json({
        success: true,
    })
})

// -------------------------------------------------------------

app.post("/removeprod", async (request, response) => {
    await Product.findOneAndDelete({ id: request.body.id });
    console.log("removed");
    response.json({
        success: true,
    })
})

// -------------------------------------------------------------

app.get("/allproducts", async (request, response) => {
    let products = await Product.find({});
    console.log("products fetched")
    response.send(products);
})

// -------------------------------------------------------------

app.post("/signup", async (request, response) => {
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

app.post('/login', async (request, response) => {
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
})

// -------------------------------------------------------------

const fetchUser = async (request, response, next) => {
    const token = request.header('auth-token');
    if (!token) {
        response.status(401).send({ error: "Authenticate using valid token" })
    } else {
        try {
            const data = jwt.verify(token, 'secret_ecomm')
            request.user = data.user;
            next();
        } catch (error) {
            response.status(401).send({ error: "Authenticate using valid token" })
        }
    }
}

// -------------------------------------------------------------

app.post('/addtocart', fetchUser, async (request, response) => {
    console.log("added", request.body.itemId);
    let userData = await User.findOne({ _id: request.user.id });
    userData.cartData[request.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: request.user.id }, { cartData: userData.cartData });
    response.send("Added")
})

// -------------------------------------------------------------

app.post("/removecart", fetchUser, async (request, response) => {
    console.log("removed", request.body.itemId);
    let userData = await User.findOne({ _id: request.user.id });
    if (userData.cartData[request.body.itemId] > 0)
        userData.cartData[request.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id: request.user.id }, { cartData: userData.cartData });
    response.send("Removed")
})

// -------------------------------------------------------------

app.post("/getcart", fetchUser, async (request, response) => {
    console.log("cart data fetched");
    let userData = await User.findOne({ _id: request.user.id })
    response.json(userData.cartData)
})


// -------------------------------------------------------------


app.post('/orderprod', async (request, response)=>{
    let orders = await Order.find({})
    let id;
    if(orders.length>0)
    {
        let last_order_array = orders.slice(-1);
        let lastorder = last_order_array[0];
        id = lastorder.id+1;
    }else{
        id = 1;
    }
    const order = new Order({
        id: id,
        name: request.body.name,
        email: request.body.email,
        address: request.body.address,
        contact: request.body.contact,
        total: request.body.total,
    });
    await order.save();
    console.log("Order Placed");
    response.json({
        success:true,
    })
})

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
