const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SaveBookInput {
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    me(_id: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveBook(input:SaveBookInput): User

    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
