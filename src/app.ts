import cors from "cors";
import bodyPaser from "body-parser";
import express, { Application, Request, Response } from "express";
import { ProductRouter } from "./modules/Product/product.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(bodyPaser.json());

app.use("/api/products", ProductRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
