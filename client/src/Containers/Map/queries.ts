import { gql } from 'apollo-boost';

export const locationsQuery = gql`
  query locations {
    locations {
      _id
      coordinates
      isType
    }
  }
`;