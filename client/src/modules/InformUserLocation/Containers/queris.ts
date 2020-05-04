import { gql } from 'apollo-boost'

export const locationUserQuery = gql`
  query locationUser($userId: ID!, $locationId: ID!) {
    locationUser(userId: $userId, locationId: $locationId) {
      _id
      action
    }
  }
`