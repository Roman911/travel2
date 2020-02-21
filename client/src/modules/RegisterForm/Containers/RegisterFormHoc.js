import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addUserMutation } from './mutations';

const withGraphQL = compose(
  graphql(addUserMutation, {
    props: ({ mutate }) => ({
      createUser: data => mutate({
        variables: data,
      }),
    }),
  }),
);

export default compose(withGraphQL);