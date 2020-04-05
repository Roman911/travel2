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
      tickets
      coordinates
      location
      work_time
      isType
      author {
        _id
        name
        avatar
      }
    }
  }
`;