const authResolver = require('./auth')
const eventsResolver = require('./events')
const postResolver = require('./post')
const locationsResolver = require('./locations')
const locationsListResolver = require('./locationList')
const commentsResolver = require('./comments')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver,
  ...locationsResolver,
  ...locationsListResolver,
  ...commentsResolver
};

module.exports = rootResolver;