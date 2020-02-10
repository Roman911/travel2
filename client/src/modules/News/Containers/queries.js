import { gql } from 'apollo-boost';

export const postsQuery = gql`
  query Posts {
    posts {
      id
      title
      createdAt
      small_text
      cover
      views
      user {
        name
        avatar
      }
    }
  }
`;