const User = require('../../models/Users')

type MyTransformPosts = {
  _doc: {
    createdAt: any
    updatedAt: any
  }
  id: string
  idAuthor: string
}

type MyTransformComments = {
  _doc: {
    createdAt: any
  }
  id: string
  idAuthor: string
  comments: any[]
}

const author = async (authorId: string) => {
  try {
    const author = await User.findById(authorId);
    return {
      ...author._doc,
      _id: author.id
    };
  } catch (err) {
    throw err;
  }
}

export const transformPost = (post: MyTransformPosts) => {
  return {
    ...post._doc,
    _id: post.id,
    // @ts-ignore
    author: author.bind(this, post.idAuthor)
  }
}