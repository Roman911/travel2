import { gql } from 'apollo-boost';

export const addUserMutation = gql`
  mutation addUser(
    $name: String,
    $email: String,
    $password: String,
  ) {
    addUser(
      name: $name,
      email: $email,
      password: $password,
    ) {
      name
      email
      password
    }
  }
`;