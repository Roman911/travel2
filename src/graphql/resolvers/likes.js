const Likes = require('../../models/Likes');

module.exports = {
  createLikes: async ({ userId, postId }) => {
    const likes = new Likes({
      userId: userId,
      postId: postId
    });
    return await likes.save()
  }
};