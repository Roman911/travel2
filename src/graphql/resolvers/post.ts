const Post = require('../../models/Post');
// @ts-ignore
const { transformPost } = require('./merge');

module.exports = {
  posts: async (args: any, req: { idAuthor: any; }) => {
    try {
      const posts = await Post.find({author: req.idAuthor});
      return posts.map((post: MyTransformPost) => {
        return transformPost(post);
      });
    } catch (err) {
      throw err;
    }
  },
  post: async (args: { _id: string }) => {
    try {
      const post = await Post.findById(args._id);
      if (post) {
        post.views++;
        await post.save()
      }
      return transformPost(post)
    } catch (err) {
      throw err
    }
  },
  createPost: async (args: { postInput: any; }) => {
    const { postInput } = args;
    const post = new Post({
      title: postInput.title,
      idAuthor: postInput.idAuthor,
      type_material: postInput.type_material,
      coverNews: "undefined",
      coverPost: "undefined",
      link: postInput.link,
      tags: postInput.tags,
      tickets: postInput.tickets,
      small_text: postInput.small_text,
      coordinates: postInput.coordinates,
      location: postInput.location,
      work_time: postInput.work_time,
      isType: postInput.isType,
      photo: postInput.phone,
      text: postInput.text,
      views: 0,
      likes: []
    });
    return await post.save()
  },
  addLike: async (args: { postId: string; userId: string }) => {
    try {
      const post = await Post.findById(args.postId);
      const { likes } = post;
      if (post) {
        likes.push(args.userId);
        await post.save()
      }
      return post
    } catch (err) {
      throw err
    }
  },
  removeLike: async (args: { postId: string; userId: string }) => {
    try {
      const post = await Post.findById(args.postId);
      const { likes } = post;
      if (post) {
        likes.pop(args.userId);
        await post.save()
      }
    } catch (err) {
      throw err
    }
  }
};