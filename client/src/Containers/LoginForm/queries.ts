import {gql} from 'apollo-boost';

export const loginQuery = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
      avatar
      name
      email
    }
  }
`;