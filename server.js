const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const dotenv = require('dotenv');
const cors = require('cors');
const resolvers = require('./resolvers');
const typedefs = require('./typedefs');

//set env variable
dotenv.config();

//express
const app = express();

//cors
app.use(cors());

// apollo server
const apolloServer = new ApolloServer({
    typedefs,
    resolvers,
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT || 3002;

//test endpoint
app.use('/test', (req, res, next) => {
    res.send({ message: 'Hello' });
  })
  
app.listen({ port: PORT }, () => {
    console.log(`Server listening on PORT: ${PORT}`);
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
});