import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($_id: ID!) {
    me(_id: $_id) {
        _id
        username
        email
        password
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
`;


