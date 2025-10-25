import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const App = sequelize.define(
  "App",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Apps", // Явно указываем имя таблицы
    timestamps: false, // Отключаем createdAt и updatedAt
  },
);

export default App;
