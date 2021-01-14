const {gql} = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');


const typeDefs = gql`


  type Event {
    id: ID!
    title: String
    description: String
    link: String
    closed:String
    categories: [Categories]
    sources: [Sources]
    geometry: [Geometry]
  }

  type Categories {
    id: ID!
    title: String
  }

  type Sources {
    id: ID!
    url: String
  }

  type Geometry {
    magnitudeValue: String
    magnitudeUnit: String
    date: String
    type: String
  }

  type Query {
    events: [Event!]!
  }

  `;

module.exports = typeDefs;
