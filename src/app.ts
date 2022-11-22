import express from "express";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { productRoutes } from "./routes/products.router";

const app = express();
app.use(express.json());

app.use("/produtos", productRoutes);

app.use(handleErrorMiddleware);

export default app;
