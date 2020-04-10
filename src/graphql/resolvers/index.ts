const authResolver = require('./auth');
const eventsResolver = require('./events');
const postResolver = require('./post');
const locationsResolver = require('./locations');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver,
  ...locationsResolver
};

module.exports = rootResolver;