"use strict";
/*
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { todosRepo } from './modules/todos/repos';
import { TodoRepo } from './modules/todos/repos/todoRepo';

export type Context = { todosRepo: TodoRepo }

const server = new ApolloServer({
  context: () => ({ todosRepo } as Context),
  typeDefs,
  resolvers
});

server.listen(process.env.PORT || 400).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
*/
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const server = server_1.createLocalServer();
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map