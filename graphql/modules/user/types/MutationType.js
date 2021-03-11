export const typeDef = `
    type Mutation {
        register(user: UserInput!): AuthUser
        signIn(user: SignInUserInput!): AuthUser 
    }
`;
