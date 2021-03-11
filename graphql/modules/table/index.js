import { GraphQLModule } from "@graphql-modules/core";

import { typeDef as QueryType } from "./types/QueryType";
import { typeDef as MutationType } from "./types/MutationType";
import { typeDef as TableType } from "./types/TableType";
import { typeDef as TableColumnType } from "./types/TableColumnType";
import { typeDef as TableInputType } from "./types/TableInputType";
import { typeDef as TableColumnInputType } from "./types/TableColumnInputType";

import { TableProvider } from "../../providers";

import { isAuthenticated, saveCurrentUser } from "../../../auth-helpers";

export const TableModule = new GraphQLModule({
  name: "table",
  providers: () => [TableProvider],
  typeDefs: [
    QueryType,
    MutationType,
    TableType,
    TableColumnType,
    TableInputType,
    TableColumnInputType,
  ],
  context: saveCurrentUser,
  resolversComposition: {
    "Query.*": [isAuthenticated()],
    "Mutation.*": [isAuthenticated()],
  },
  resolvers: {
    Query: {
      getUserTables: (root, { userId }, { injector }) =>
        injector.get(TableProvider).getByUserId(userId),
    },
    Mutation: {
      addTable: (root, { table }, { injector }) =>
        injector.get(TableProvider).addTable(table),
    },
  },
});
