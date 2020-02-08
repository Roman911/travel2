const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const grapIso = require('graphql-iso-date');
const { GraphQLDate } = grapIso;

const { UserModel } = require('../models');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    idAuthor: { type: GraphQLID },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    confirmed: { type: GraphQLBoolean },
    confirm_hash: { type: GraphQLString },
    last_seen: { type: GraphQLDate },
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserModel.findById(args.id)
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});