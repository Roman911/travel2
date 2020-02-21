import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { loginQuery } from './queries';

const withGraphQL = compose(
  graphql(loginQuery, {
    options: ({ data }) => ({
      variables: { data },
    })
  }),
);

export default compose(withGraphQL);