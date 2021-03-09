import sequelize from "sequelize";

import db from "../db";
import Table from "./table";

const TableColumn = db.define("table_column", {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  dataType: {
    type: sequelize.STRING,
    allowNull: false,
  },
  isRequired: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
  allowNull: {
    type: sequelize.BOOLEAN,
    allowNull: false,
  },
});

TableColumn.belongsTo(Table, { as: "table" });
Table.hasMany(TableColumn, {foreignKey: "tableId", as: "columns"})

export default TableColumn;
