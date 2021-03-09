import dotenv from 'dotenv';
import Sequelize from "sequelize";

dotenv.config();

const { DB, USER, PASSWORD } = process.env;

const db = new Sequelize(DB, USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default db;
