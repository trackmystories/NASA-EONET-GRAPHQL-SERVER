const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");
const EventsAPI = require("./src/datasources/events");
const GraphQLJSON = require("graphql-type-json");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  JSON: GraphQLJSON,
  dataSources: () => ({
    eventsAPI: new EventsAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
