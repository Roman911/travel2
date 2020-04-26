import { gql } from 'apollo-boost';

export const commentsQuery = gql`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
      idAuthor
      text
      createdAt
      comments {
        idAuthor
        text
        createdAt
      }
    }
  }
`;

export const authorQuery = gql`
  query author($_id: ID!) {
    author(_id: $_id) {
      avatar
      name
    }
  }
`;