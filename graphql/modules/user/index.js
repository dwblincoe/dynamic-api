import { GraphQLModule } from "@graphql-modules/core";

import { typeDef as UserType } from "./types/UserType";
import { typeDef as UserInputType } from "./types/UserInputType";
import { typeDef as QueryType } from "./types/QueryType";
import { typeDef as MutationType } from "./types/MutationType";
import { typeDef as SignInUserType } from "./types/SignInUserType";
import { typeDef as AuthUserType } from "./types/AuthUserType";

import { UserProvider } from "../../providers";
import { saveCurrentUser, isAuthenticated } from "../../../auth-helpers";

export const UserModule = new GraphQLModule({
  name: "UserModule",
  providers: () => [UserProvider],
  typeDefs: [
    QueryType,
    MutationType,
    UserType,
    UserInputType,
    SignInUserType,
    AuthUserType,
  ],
  context: saveCurrentUser,
  resolversComposition: {
    'Query.*': [isAuthenticated()]
  },
  resolvers: {
    Query: {
      getUsers: (root, args, { injector }) =>
        injector.get(UserProvider).getUsers(),
    },
    Mutation: {
      register: (root, { user }, { injector }) =>
        injector.get(UserProvider).register(user),

      signIn: (root, { user }, { injector }) =>
        injector.get(UserProvider).signIn(user),
    },
  },
});
