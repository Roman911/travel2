const authResolver = require('./auth');
const eventsResolver = require('./events');
const postResolver = require('./post');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver
};

module.exports = rootResolver;