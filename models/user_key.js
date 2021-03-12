import sequelize from "sequelize";

import db from "../db";
import User from "./user";

const UserKey = db.define("user_key", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  key: {
    type: sequelize.UUID,
    allowNull: false,
  },
});

UserKey.belongsTo(User, { as: "user" });

export default UserKey;
