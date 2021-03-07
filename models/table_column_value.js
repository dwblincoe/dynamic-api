import sequelize from "sequelize";

import db from "../db";
import TableRow from "./table_row.js";
import TableColumn from "./table_column.js";

const TableColumnValue = db.define("table_column_value", {
  value: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

TableColumnValue.belongsTo(TableRow, { as: "row" });
TableColumnValue.belongsTo(TableColumn, { as: "column" });

export default TableColumnValue;
