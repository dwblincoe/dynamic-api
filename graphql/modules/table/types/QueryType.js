export const typeDef = `
    type Query {
        getUserTables(userId: Int!): [Table]
    }
`