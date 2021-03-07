import { GraphQLModule } from "@graphql-modules/core";

import { typeDef as UserType } from "./types/UserType";
import { typeDef as UserInputType } from "./types/UserInputType";
import { typeDef as QueryType } from "./types/QueryType";
import { typeDef as MutationType } from "./types/MutationType";

import { UserProvider } from "../../providers";

export const UserModule = new GraphQLModule({
  name: "UserModule",
  providers: () => [UserProvider],
  typeDefs: [QueryType, MutationType, UserType, UserInputType],
  resolvers: {
    Query: {
      getUsers: (root, args, { injector }) =>
        injector.get(UserProvider).getUsers(),
    },
    Mutation: {
      register: (root, { user }, { injector }) =>
        injector.get(UserProvider).register(user),
    },
  },
});
