import { gql } from 'apollo-boost';

export const postsQuery = gql`
  query posts {
    posts {
      _id
      title
      createdAt
      small_text
      coverNews
      views
      likes
      author {
        name
        avatar
      }
    }
  }
`;