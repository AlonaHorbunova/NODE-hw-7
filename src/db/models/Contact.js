import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const Contact = sequelize.define(
  "Contact",
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "contacts",
  },
);

//Contact.sync({ alter: true });

//await Contact.create({ fullname: "Ivasik Telesik", phone: "+1234567890",});

export default Contact;
