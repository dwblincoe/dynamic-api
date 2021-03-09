import { GraphQLModule } from "@graphql-modules/core";

import { UserModule } from "./modules/user";
import { TableModule } from './modules/table';

export const appModule = new GraphQLModule({
  imports: [UserModule, TableModule]
});
