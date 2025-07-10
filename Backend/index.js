
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from 'bcrypt';

// // import crypto from 'crypto';
// import dotenv from "dotenv";
// // import { Cashfree } from 'cashfree-pg';
// import PlanRoutes from "./routes/plan.js";

 

// import authRoutes from './routes/authRoutes.js';


// import cashfreeRoutes from "./routes/cashfreeRoutes.js"; // ✅ correct
// import  adminAuthConfig from "./routes/adminAuthConfig.js";



// dotenv.config();

// const app = express();

// const allowedOrigins = ["http://localhost:5173", "https://magicscale.in"];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// app.use(express.json());

// // Routes
// app.use("/api/plan", PlanRoutes);
// app.use('/api/admin', adminAuthConfig);


// app.use('/api/auth', authRoutes);
// // app.use('/api/admin', adminRoutes);

// app.use('/api/cashfree', cashfreeRoutes);


// // MongoDB connection and server startup
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));








// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from 'bcrypt';
// import userRoutes from './routes/userRoutes.js'; // Adjust path if different
// import path from 'path';


// // import crypto from 'crypto';
// import dotenv from "dotenv";
// // import { Cashfree } from 'cashfree-pg';
// import PlanRoutes from "./routes/plan.js";
// // import adminRoutes from './routes/adminRoutes.js'

 
// import subscriptionRoutes from './routes/subscriptionRoutes.js';
// // import authRoutes from './routes/authRoutes.js';
// import downloadRoutes from './routes/downloadRoutes.js';
// // import { resendOTP } from './controllers/authController.js';
// import cashfreeRoutes from "./routes/cashfreeRoutes.js"; // ✅ correct
// // import  adminAuthConfig from "./routes/adminAuthConfig.js";
// import payment from './routes/payment.js'
// // import { registerUser } from "./controllers/authController.js"; 



// dotenv.config();

// const app = express();

// const allowedOrigins = ["http://localhost:5173", "https://magicscale.in"];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// app.use(express.json());

// // Routes
// app.use("/api/plan", PlanRoutes);
// // app.use('/api/admin', adminAuthConfig);
// app.use('/uploads', express.static(path.resolve('uploads')));
// // app.use('/api', adminRoutes);
// app.use('/api', downloadRoutes);
// // router.post('/resend-otp', resendOTP);
// // Routes
// app.use('/api/user', userRoutes);
// app.use('/api', subscriptionRoutes);
// // app.use('/api/auth/verify-otp', verifyOtp); // Assuming you have a route for OTP verification

// // app.use('/api/auth', authRoutes);
// // app.use('/api/admin', adminRoutes);

// app.use('/api/cashfree', cashfreeRoutes);
// app.use('/api/success', payment);


// // MongoDB connection and server startup
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));


















// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import bcrypt from 'bcrypt';
// import userRoutes from './routes/userRoutes.js'; // Adjust path if different
// import path from 'path';
// import dotenv from "dotenv";
// import PlanRoutes from "./routes/plan.js";
// import subscriptionRoutes from './routes/subscriptionRoutes.js';
// import downloadRoutes from './routes/downloadRoutes.js';
// import cashfreeRoutes from "./routes/cashfreeRoutes.js";
// import payment from './routes/payment.js';

// dotenv.config();

// const app = express();

// const allowedOrigins = ["http://localhost:5173", "https://magicscale.in"];

// app.use(cors({
//   origin: function (origin, callback) {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// }));

// app.use(express.json());

// // ✅ Health check route for Railway and basic monitoring
// app.get("/", (req, res) => {
//   res.send("✅ MagicScale backend is live!");
// });

// // Routes
// app.use("/api/plan", PlanRoutes);
// app.use('/uploads', express.static(path.resolve('uploads')));
// app.use('/api', downloadRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api', subscriptionRoutes);
// app.use('/api/cashfree', cashfreeRoutes);
// app.use('/api/success', payment);

// // MongoDB connection and server startup
// const PORT = process.env.PORT || 8080;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));




















import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Route imports
import userRoutes from './routes/userRoutes.js';
import PlanRoutes from "./routes/plan.js";
import subscriptionRoutes from './routes/subscriptionRoutes.js';
import downloadRoutes from './routes/downloadRoutes.js';
import cashfreeRoutes from "./routes/cashfreeRoutes.js";
import payment from './routes/payment.js';

dotenv.config();

const app = express();

// CORS configuration
const allowedOrigins = ["http://localhost:5173", "https://magicscale.in", "https://www.magicscale.in"];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ✅ Health check route for Railway and general monitoring
app.get("/", (req, res) => {
  res.send("✅ MagicScale backend is live!");
});

// Static files
app.use('/uploads', express.static(path.resolve('uploads')));

// API Routes
app.use("/api/plan", PlanRoutes);
app.use('/api/user', userRoutes);
app.use('/api', subscriptionRoutes);
app.use('/api', downloadRoutes);
app.use('/api/cashfree', cashfreeRoutes);
app.use('/api/success', payment);

// ✅ Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Global Error:", err.stack);
  res.status(500).send("Something broke!");
});

// MongoDB connection and server startup
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
