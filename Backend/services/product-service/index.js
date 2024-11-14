const express = require("express");
const app = express();

const Product = require("../../models/Product");
// const Category = require("../../models/Category");

const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { verifyToken } = require("../../helpers/verifyToken");

const port = process.env.PORT || 8000;

const storage = multer.diskStorage({
    destination: '../../upload/images',
    filename: (request, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage })


app.use(express.json());
app.use(cors());

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('product'), (request, response) => {
    response.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${request.file.filename}`
    })
});


// --------------------------------------------------------------------

app.post('/addproduct', verifyToken, async (request, response) => {
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

app.post("/removeprod", verifyToken, async (request, response) => {
    await Product.findOneAndDelete({ id: request.body.id });
    console.log("removed");
    response.json({
        success: true,
    })
})

// -------------------------------------------------------------

app.get("/allproducts", async (request, response) => {
    let products = await Product.find({});
    // console.log("products fetched")
    response.send(products);
});


app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port" + port)
    } else {
        console.log("Error" + error)
    }
})
