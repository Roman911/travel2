import { gql } from 'apollo-boost';

export const postQuery = gql`
  query Posts($id: ID) {
    post(id: $id) {
      id
      title
      createdAt
      small_text
      text
      cover
      views
      user {
        name
        avatar
      }
    }
  }
`;