import { gql } from 'apollo-boost'

export const addLikeMutation = gql`
  mutation addLike($postId: ID!, $userId: ID!) {
    addLike(postId: $postId, userId: $userId) {
      likes
    }
  }
`
export const removeLikeMutation = gql`
  mutation removeLike($postId: ID!, $userId: ID!) {
    removeLike(postId: $postId, userId: $userId) {
      _id
    }
  }
`