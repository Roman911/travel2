import { gql } from 'apollo-boost';

export const addPostMutation = gql`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
      _id
    }
  }
`;