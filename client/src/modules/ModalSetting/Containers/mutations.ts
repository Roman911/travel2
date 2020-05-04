import { gql } from 'apollo-boost'

export const addLocationsUserListMutation = gql`
  mutation addLocationsUserList( $userId: ID!, $locationId: ID!, $action: String! ) {
    addLocationsUserList( userId: $userId, locationId: $locationId, action: $action ) {
      _id
    }
  }
`