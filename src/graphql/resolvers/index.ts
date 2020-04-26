const authResolver = require('./auth')
const eventsResolver = require('./events')
const postResolver = require('./post')
const locationsResolver = require('./locations')
const commentsResolver = require('./comments')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver,
  ...locationsResolver,
  ...commentsResolver
};

module.exports = rootResolver;