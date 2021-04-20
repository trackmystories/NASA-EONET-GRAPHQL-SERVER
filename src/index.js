
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const EventsAPI = require('./datasources/events');
const GraphQLJSON = require('graphql-type-json');




const server = new ApolloServer({
  typeDefs,
  resolvers,  
  JSON: GraphQLJSON,
  dataSources: () => ({
    eventsAPI: new EventsAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
