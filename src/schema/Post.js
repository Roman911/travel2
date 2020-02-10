const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const grapIso = require('graphql-iso-date');
const { GraphQLDate } = grapIso;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    createdAt: { type: GraphQLDate },
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        idAuthor: { type: GraphQLString },
        email: { type: GraphQLString },
        avatar: { type: GraphQLString },
        name: { type: GraphQLString },
        lastName: { type: GraphQLString },
        password: { type: GraphQLString },
        confirmed: { type: GraphQLBoolean },
        confirm_hash: { type: GraphQLString },
        last_seen: { type: GraphQLDate },
      },
      resolve( parent, { email, name, password } ) {
        const candidate = UserModel.findOne({ email });
        if (!candidate) {
          throw new Error("errorName.UNAUTHORIZED")
        }
        const hashedPassword = bcrypt.hashSync(password, 12);
        const user = new UserModel({ email, name, password: hashedPassword, avatar: 'undefined' });
        return user.save();
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve( parent, { email, password } ) {
        const user = UserModel.findOne({ email });

        if (user) {
          const match = bcrypt.compare(password, user.password);
          if (match) {
            return  user
          }
        }
      }
    },
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLString },
        idAuthor: { type: GraphQLID },
        type_material: { type: GraphQLString },
        cover: { type: GraphQLString },
        link: { type: GraphQLString },
        // tags,
        price: { type: GraphQLString },
        small_text: { type: GraphQLString },
        coordinateY: { type: GraphQLString },
        coordinateX: { type: GraphQLString },
        photo: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve(parent, { title, idAuthor, type_material, cover, link, price, small_text, coordinateY, coordinateX, photo, text }) {
        const post = new PostModel({
          title, idAuthor, type_material, cover, link, price, small_text, coordinateY, coordinateX, photo, text,
        });
        return post.save();
      },
    }
  }
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return UserModel.findById(id)
      }
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent,  { id } ) {
        return PostModel.findById(id)
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve() {
        return PostModel.find({})
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});