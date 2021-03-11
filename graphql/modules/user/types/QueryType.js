export const typeDef = `
    directive @auth on FIELD_DEFINITION

    type Query {
        getUsers: [User] @auth
    }
`;
