
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const EventsAPI = require('./datasources/events');



const server = new ApolloServer({
  typeDefs,
  resolvers,  dataSources: () => ({
    eventsAPI: new EventsAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
