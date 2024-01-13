import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import uploadRoutes from "./uploadRoutes.js";
import orderRoutes from "./orderRoutes.js";
import express from "express";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/category", categoryRoutes);
router.use("/products", productRoutes);
router.use("/upload", uploadRoutes);
router.use("/orders", orderRoutes);

export default router;