import "dotenv/config";
import startServer from "./server.js";
import connectDatabase from "./db/connectDatabas.js";
import { createProductsTable } from "./db/setup.js";

const bootstrap = async () => {
  await connectDatabase();
  await createProductsTable();
  startServer();
};

bootstrap();
