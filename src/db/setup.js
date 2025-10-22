import sequelize from "./sequelize.js";

export const createProductsTable = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL
        );
    `;
  try {
    await sequelize.query(query);
    console.log("Table 'products' created or already exists.");
  } catch (error) {
    console.error("Error creating products table:", error.message);
    throw error;
  }
};
