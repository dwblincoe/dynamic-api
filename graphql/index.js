import { GraphQLModule } from "@graphql-modules/core";

import { UserModule } from "./modules/user";

export const appModule = new GraphQLModule({
  imports: [UserModule],
});
