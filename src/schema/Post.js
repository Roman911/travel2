const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const grapIso = require('graphql-iso-date');
const { GraphQLDate } = grapIso;

const { PostModel } = require('../models');
const { UserModel } = require('../models');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    idAuthor: { type: GraphQLID },
    type_material: { type: GraphQLString },
    title: { type: GraphQLString },
    cover: { type: GraphQLString },
    link: { type: GraphQLString },
    // tags: { type:  },
    price: { type: GraphQLString },
    small_text: { type: GraphQLString },
    coordinateY: { type: GraphQLString },
    coordinateX: { type: GraphQLString },
    photo: { type: GraphQLString },
    text: { type: GraphQLString },
    views:{ type: GraphQLInt },
    confirmed: { type: GraphQLBoolean },
    confirm_hash: { type: GraphQLString },
    last_seen: { type: GraphQLDate },
    user: {
      type: UserType,
      resolve({ idAuthor }, args) {
        return UserModel.findById(idAuthor)
      }
    }
  })
});

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
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return PostModel.findById(args.id)
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      // args: { name: {type: GraphQLString} },
      resolve() {
        return PostModel.find({})
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return UserModel.findById(args.id)
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});