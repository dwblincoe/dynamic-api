import sequelize from "sequelize";

import db from "../db";
import User from "./user";

const Table = db.define("table", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

Table.belongsTo(User, { as: "user" });

export default Table;
