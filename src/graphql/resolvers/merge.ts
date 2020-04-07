// @ts-ignore
const User = require('../../models/Users');
const { dateToString } = require('../../helpers/date');

type MyTransformPost = {
  _doc: {
    createdAt: any
    updatedAt: any
  }
  id: string
  idAuthor: string
}

const author = async (authorId: any) => {
  try {
    const author = await User.findById(authorId);
    return {
      ...author._doc,
      _id: author.id
    };
  } catch (err) {
    throw err;
  }
};

// @ts-ignore
const transformPost = (post: MyTransformPost) => {
  return {
    ...post._doc,
    _id: post.id,
    // @ts-ignore
    author: author.bind(this, post.idAuthor),
    createdAt: dateToString(post._doc.createdAt),
    updatedAt: dateToString(post._doc.updatedAt)
  };
};

exports.transformPost = transformPost;
