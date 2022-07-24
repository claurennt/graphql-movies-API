const express = require('express');
const { graphqlHTTP } = require('express-graphql');

require('dotenv').config();
require('./DB/client');
const graphqlSchema = require('./graph-ql/schema');
const graphqlResolvers = require('./graph-ql/resolvers');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
