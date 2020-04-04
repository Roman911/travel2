const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/Users');

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        return new Error('Даний емейл зайнятий');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        name: args.userInput.name,
        email: args.userInput.email,
        password: hashedPassword,
        avatar: 'undefined'
      });

      const result = await user.save();

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('Неправильний логін або пароль!');
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error('Неправильний логін або пароль!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1, name: user.name, avatar: user.avatar };
  }
};