import { getProducts, addProduct } from "../services/product.service.js";

export const getProductsController = async (req, res, next) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error("Error in getProductsController:", error);
    next(error);
  }
};

export const addProductController = async (req, res, next) => {
  try {
    const { name, price } = req.body;

    if (!name || typeof price === "undefined" || isNaN(Number(price))) {
      return res
        .status(400)
        .json({ message: "Name and valid price are required." });
    }

    const priceAsNumber = Number(price);

    const newProduct = await addProduct({ name, price: priceAsNumber });

    res.status(201).json({
      message: "Product added successfully.",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error in addProductController:", error);
    next(error);
  }
};
