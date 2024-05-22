import cors from "cors";
import bodyPaser from "body-parser";
import express, { Application, Request, Response } from "express";
import { ProductRouter } from "./modules/Product/product.route";
import { OrderRouter } from "./modules/Order/order.route";

const app: Application = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());

// Route handlers
app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Prodects..!!");
});

export default app;
