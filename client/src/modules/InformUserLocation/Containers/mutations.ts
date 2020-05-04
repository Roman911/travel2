import { gql } from 'apollo-boost'

export const addLocationsUserListMutation = gql`
  mutation addLocationsUserList( $_id: ID, $userId: ID, $locationId: ID, $action: String ) {
    addLocationsUserList( _id: $_id, userId: $userId, locationId: $locationId, action: $action ) {
      _id
    }
  }
`