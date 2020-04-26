import { gql } from 'apollo-boost'

export const CreateCommentMutation = gql`
  mutation createComment($postId: ID!, $idAuthor: ID!, $text: String!) {
    createComment(postId: $postId, idAuthor: $idAuthor, text: $text) {
      _id
    }
  }
`

export const AddCommentMutation = gql`
  mutation addComment($_id: ID!, $idAuthor: ID!, $text: String!) {
    addComment(_id: $_id, idAuthor: $idAuthor, text: $text) {
      comments {
        idAuthor
        text
      }
    }
  }
`