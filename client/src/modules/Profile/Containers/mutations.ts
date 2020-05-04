import { gql } from 'apollo-boost'

export const removeLocationWithUserListMutation = gql`
  mutation removeLocationWithUserList( $_id: ID! ) {
    removeLocationWithUserList( _id: $_id ) {
      _id
    }
  }
`