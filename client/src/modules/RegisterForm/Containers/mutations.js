import { gql } from 'apollo-boost';

export const addUserMutation = gql`
  mutation createUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      _id
    }
  }
`;