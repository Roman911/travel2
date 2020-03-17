const User = require('../../models/Users');

const { dateToString } = require('../../helpers/date');

const author = async authorId => {
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

const transformPost = post => {
  return {
    ...post._doc,
    _id: post.id,
    author: author.bind(this, post.idAuthor),
    createdAt: dateToString(post._doc.createdAt),
    updatedAt: dateToString(post._doc.updatedAt)
  };
};

exports.transformPost = transformPost;
