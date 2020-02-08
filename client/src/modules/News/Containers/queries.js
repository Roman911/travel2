import { gql } from 'apollo-boost';

export const postsQuery = gql`
  query Posts {
    posts {
      id
      title
      last_seen
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