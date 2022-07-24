const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Movie {
  _id: ID!
  title: String!
  director: String!
  genre: String!
  year: Int!
  rating: Float!
}


input MovieInput {
  title: String!
  director: String!
  year: Int!
  genre: String!
  rating: Float!
}

type Query {
  movies:[Movie!]
}

type Mutation {
  createMovie(movie:MovieInput): Movie
}

schema {
  query: Query
  mutation: Mutation
}
`);

module.exports = schema;
