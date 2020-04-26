import { gql } from 'apollo-boost'

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
`

export const commentsQuery = gql`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
    }
  }
`;