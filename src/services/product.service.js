import { QueryTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

export const getProducts = async () => {
  const query = `SELECT id, name, price FROM products`;
  const data = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  return data;
};

export const addProduct = async ({ name, price }) => {
  console.log("Parameters for query:", { name, price });

  const query = `INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *`;
  const data = await sequelize.query(query, {
    bind: [name, price],
    type: QueryTypes.INSERT,
  });

  return data[0];
};
