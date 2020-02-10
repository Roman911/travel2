import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addPostMutation } from './mutations';

const withGraphQL = compose(
  graphql(addPostMutation, {
    props: ({ mutate }) => ({
      addPost: post => mutate({
        variables: post,
      }),
    }),
  }),
);

export default compose(withGraphQL);