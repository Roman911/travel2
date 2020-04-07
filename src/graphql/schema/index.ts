const {buildSchema} = require('graphql');

module.exports = buildSchema(`
type Post {
    _id: ID!
    author: Author!
    title: String
    type_material: String
    coverNews: String
    coverPost: String
    link: String
    tags: [String]
    tickets: [String]
    small_text: String
    coordinates: [String]
    location: String
    work_time: String
    isType: String
    text: String
    views: Int
    likes: [String]
    createdAt: String
}
input PostInput {
  title: String
  idAuthor: ID
  type_material: String
  link: String
  tags: [String]
  tickets: [String]
  small_text: String
  coordinates: [String]
  location: String
  work_time: String
  isType: String
  photo: String
  text: String
}
type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}
type User {
  _id: ID!
  email: String!
  password: String
}
type Author {
  _id: ID!
  avatar: String
  name: String
}
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
  avatar: String
  name: String
}
input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}
input UserInput {
  name: String!
  email: String!
  password: String!
}
type RootQuery {
    events: [Event!]!
    posts: [Post!]!
    post(_id: ID!): Post!
    login(email: String!, password: String!): AuthData!
}
type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    createPost(postInput: PostInput): Post
    postEvent(eventId: ID!): Post!
    cancelPost(postId: ID!): Event!
    addLike(postId: ID!, userId: ID!): Post
    removeLike(postId: ID!, userId: ID!): Post
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);