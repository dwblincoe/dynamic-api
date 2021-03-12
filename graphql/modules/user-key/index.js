import { GraphQLModule } from "@graphql-modules/core";

import { typeDef as UserKeyType } from "./types/UserKeyType";
import { typeDef as UserKeyInputType } from "./types/UserKeyInputType";
import { typeDef as QueryType } from "./types/QueryType";
import { typeDef as MutationType } from "./types/MutationType";

import { UserKeyProvider } from "../../providers";
import { saveCurrentUser, isAuthenticated } from "../../../auth-helpers";

export const UserKeyModule = new GraphQLModule({
  name: "UserKey",
  providers: [UserKeyProvider],
  typeDefs: [QueryType, MutationType, UserKeyType, UserKeyInputType],
  context: saveCurrentUser,
  resolversComposition: {
    "Query.*": [isAuthenticated()],
    "Mutation.*": [isAuthenticated()],
  },
  resolvers: {
    Query: {
      getUserKeys: (root, args, { _injector, currentUser }) =>
        _injector.get(UserKeyProvider).getUserKeys(currentUser.id),
    },
    Mutation: {
      createKey: (root, { key }, { _injector }) =>
        _injector.get(UserKeyProvider).createKey(key),
    },
  },
});
