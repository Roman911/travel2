import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { postsQuery } from './queries';

export default compose(graphql(postsQuery));