export const typeDef = `
    type Mutation {
        addTable(table: TableInput!): Table
        addColumns(columns: [TableColumnInput]!, tableId: Int!): [TableColumn]
    }
`