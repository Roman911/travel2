import { gql } from 'apollo-boost';

export const postQuery = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      createdAt
      small_text
      text
      coverPost
      views
      likes
      author {
        _id
        name
        avatar
      }
    }
  }
`;