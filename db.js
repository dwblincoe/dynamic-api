import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();

const { DB, USER, PASSWORD } = process.env;

const db = new Sequelize(DB, USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  // logging: false,
});

db.authenticate().then(
  () => console.log("Success"),
  (err) => console.log(err)
);

export default db;
