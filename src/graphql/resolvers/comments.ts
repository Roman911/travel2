const Comments = require('../../models/Comments')

module.exports = {
  createComment: async (args: { idAuthor: string, postId: string, text: string }) => {
    const { idAuthor, postId, text } = args;
    const comment = new Comments({
      idAuthor: idAuthor,
      postId: postId,
      text: text,
      comments: []
    });
    return await comment.save()
  },
  comments: async (args: { postId: string }) => {
    try {
      return await Comments.find({postId: args.postId})
    } catch (err) {
      throw err;
    }
  },
  addComment: async (args: { _id: string; idAuthor: string, text: string }) => {
    try {
      const comment = await Comments.findById(args._id)
      const { comments } = comment
      if (comment) {
        comments.push({
          idAuthor: args.idAuthor,
          text: args.text
        });
        await comment.save()
      }
      return comment
    } catch (err) {
      throw err
    }
  },
};