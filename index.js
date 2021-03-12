import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { ApolloServer } from "apollo-server";

import { appModule } from "./graphql";
import db from "./db.js ";

const { schema, context } = appModule;

const app = express();

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//     context,
//   })
// );

const server = new ApolloServer({
  schema,
  graphiql: true,
  context,
});

db.sync();

server.listen(3000, () => console.log("Listening on PORT 3000"));
