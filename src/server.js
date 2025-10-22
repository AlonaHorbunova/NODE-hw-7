import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import contactsRouter from "./routes/contacts.router.js";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";

const startServer = () => {
  const app = express();
  app.use(cors());

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Я родился!");
  });

  app.use("/api/contacts", contactsRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/products", productsRouter);

  app.use(errorHandler);
  app.use(notFoundHandler);

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

export default startServer;
