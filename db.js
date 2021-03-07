import Sequelize from "sequelize";

const db = new Sequelize("dynamic", "postgres", "password", {
  dialect: "postgres",
  logging: false,
});

export default db;
