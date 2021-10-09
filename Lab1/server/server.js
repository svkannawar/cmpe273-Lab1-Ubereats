const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require('multer');

const app = express();

// const fileStorageEngine=multer.diskStorage({
//   destination: (req, file, cb)=>{
//     cb(null, "./images" );
//   },
//   filename: (req, file, cb)=>{
//     cb(null, Date.now() + "--" + file.originalname);
//   },
// })

//const upload= multer({storage: fileStorageEngine});


// route for multer
// app.post("/single", upload.single("image"), (req, res)=>{
//   console.log("--------",req.file);
//   res.send("Single file upload successfull")
// });


// app.post("/multiple", upload.array('images', 3), (req, res)=>{
//   console.log("----multiple----",req.files);
//   res.send("Multiple files upload successfull")
// });

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// enabling cors for all requests by using cors middleware
app.use(cors());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./routes/customer.routes.js")(app);
require("./routes/creds.routes.js")(app);
require("./routes/restaurantRender.routes")(app);
require("./routes/orders.routes")(app);
require("./routes/images.routes")(app);
require("./routes/favorites.routes")(app);
require("./routes/deliveryAddresses.routes")(app);
require("./routes/dishes.routes")(app);
require("./routes/uploadImageS3.route")(app);


// set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000.");
});

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});