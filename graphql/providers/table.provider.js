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

    addTable = async(table, user) => {
        const newTable = await Table.create({...table, userId: user.id});

        return newTable;
    }

    addColumns = async (columns, tableId) => {
        let newColumns = columns.map(async column => {
            const added = await TableColumn.create({...column, tableId});

            return added;
        })

        return newColumns;
    }
}