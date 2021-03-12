import { GraphQLModule } from "@graphql-modules/core";

import { UserModule } from "./modules/user";
import { TableModule } from "./modules/table";
import { UserKeyModule } from "./modules/user-key";

export const appModule = new GraphQLModule({
  imports: [UserModule, TableModule, UserKeyModule],
});
