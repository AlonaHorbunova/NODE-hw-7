import { Router } from "express";
import {
  getProductsController,
  addProductController,
} from "../controllers/product.controller.js";

const productsRouter = new Router();

productsRouter.get("/", getProductsController);
productsRouter.post("/", addProductController);

export default productsRouter;
