import { gql } from 'apollo-boost';

export const postQuery = gql`
  query post($_id: ID!) {
    post(_id: $_id) {
      likes
    }
  }
`;