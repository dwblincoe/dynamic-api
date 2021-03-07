import sequelize from "sequelize";

import db from "../db";

const User = db.define("user", {
  firstName: {
    type: sequelize.STRING,
  },
  lastName: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

export default User;
