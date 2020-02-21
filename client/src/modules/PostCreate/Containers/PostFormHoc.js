import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addPostMutation } from './mutations';

const withGraphQL = compose(
  graphql(addPostMutation, {
    props: ({ mutate }) => ({
      createPost: data => mutate({
        variables: data,
      }),
    }),
  }),
);

export default compose(withGraphQL);