import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { productRoutes } from "./routes/products.routes";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  app.use(cors());
  next();
});

app.use("/produtos", productRoutes);

app.use(handleErrorMiddleware);

export default app;
