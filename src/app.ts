import express from "express";
import { productRoutes } from "./routes/products.router";

const app = express();
app.use(express.json());

app.use("/produtos", productRoutes);

export default app;
