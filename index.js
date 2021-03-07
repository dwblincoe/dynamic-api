import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";

import { appModule } from "./graphql";
import db from "./db.js ";

const { schema, context } = appModule;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    context,
  })
);

db.sync();

app.listen(3000, () => console.log("Listening on PORT 3000"));
