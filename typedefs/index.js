const { gql } = require('apollo-server-express');

const userTypeDefs = require('./user');
const taskTypeDefs = require('./task');

const typedefs = gql`
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [
  typedefs,
  userTypeDefs,
  taskTypeDefs
]