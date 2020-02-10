import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addUserMutation } from './mutations';

const withGraphQL = compose(
  graphql(addUserMutation, {
    props: ({ mutate }) => ({
      addUser: user => mutate({
        variables: user,
      }),
    }),
  }),
);

export default compose(withGraphQL);