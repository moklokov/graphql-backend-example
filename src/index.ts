import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import context from "./context";

const port = 3000;

export const server = new ApolloServer({
  schema,
  context,
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
