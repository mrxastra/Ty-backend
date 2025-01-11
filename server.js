require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const adminRoute = require("./router/admin-router");
const contactRoute = require("./router/contact-router");
const paymentRoute = require("./router/payment-router");

const formRoute = require("./router/form-router"); // Import the form router
const multer = require("multer");
const path = require("path"); // Import the path module

const corsOptions = {
  // origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname); // Set unique filenames
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.fieldname === "GaitImage" || file.fieldname === "PostureImage") {
      cb(null, true);
    } else {
      cb(new Error("Invalid field!"), false);
    }
  },
});

// Serve static files from the 'uploads' folder
app.use("/uploads", express.static("uploads"));

//lets handle cors
app.use(cors(corsOptions));
// to get the json data in the express app.
app.use(express.json());

// Mount the Router
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/dataform", formRoute); // Mount the form router
app.use("/api/form", paymentRoute);
app.use("/api/admin", adminRoute);

// API endpoint for file uploads
app.post("/api/upload", upload.single("file"), (req, res, next) => {
  // If no file is uploaded, send an error response
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded!" });
  }

  // If file is uploaded successfully, send success response with file details
  res.json({
    filename: req.file.filename,
    mimetype: req.file.mimetype,
    size: req.file.size,
  });
});

// Error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5500;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
