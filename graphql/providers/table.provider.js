import Table from '../../models/table';
import TableColumn from '../../models/table_column';

export default class TableProvider {
    getByUserId = async(userId) => {
        const tables = await Table.findAll({
            where: { userId }, 
            include: [
                {
                    model: TableColumn,
                    as: "columns"
                }
            ]
        });

        return tables;
    }

    addTable = async(table) => {
        const {name, columns} = table;
        const newTable = await Table.create({name, userId: 1});

        let newTableColumns = columns.map(async (column) => {
            const newColumn = await TableColumn.create({...column, tableId: newTable.id});
            return newColumn;
        });

        return {...newTable.dataValues, columns: newTableColumns};
        
    }
}